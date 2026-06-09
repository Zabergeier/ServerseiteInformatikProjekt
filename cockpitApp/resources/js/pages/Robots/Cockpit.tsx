import { Head, Link, router, Form, useForm } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
import { route } from 'ziggy-js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import {jwtDecode} from 'jwt-decode';
import mqtt, { MqttClient } from "mqtt";
import { Console, error } from 'console';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { AlertDialog, } from 'radix-ui';
import { HoverCardTrigger,HoverCard, HoverCardContent  } from '@/components/ui/hover-card';
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { ArrowLeftIcon } from 'lucide-react';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {bindKey} from '@rwh/keystrokes';


interface Robot{
    id:number,
    nam:string,
    adr:string,
    bez:string,
    user_id:string
}
interface User{
    id:number,
    name:string,
    email:string,
}

interface PageProps{
    robot:Robot
    user: User
    psw:string | undefined
}

interface Motor{
    mLeft: number
    mRight: number
}



export default function Index({user,robot,psw}:PageProps) {
    const [token,setToken] = useState<string | undefined>(undefined);
    const clientRef= useRef<MqttClient | null>(null);
    const [mRight,setmRight] = useState<number>(0);
    const [mLeft,setmLeft] = useState<number>(0);
    
    
    

    const emqx_url = "wss://"+String(import.meta.env.VITE_MQTT_URL)+ ":8084/mqtt";


    
    






    const showPsw = () =>{
        console.log(psw);
       if(psw != null){
        return(
        <Card className='m-4 p-4 justify-center'>
            
        <HoverCard openDelay={10} closeDelay={100}>
        <HoverCardTrigger asChild>
            <Button variant="link">Hover Here To Show Password</Button>
        </HoverCardTrigger>
        <HoverCardContent className="flex w-64 flex-col gap-0.5">
            <div className="font-semibold">Passwort: {psw}</div>
            <div>Name: {"robot_" + robot.id}</div>
            
        </HoverCardContent>
      
    </HoverCard>
    </Card>
)
       }
       return (<></>)
    }



    const issueToken = async () =>{
        if(token != undefined ){
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now()/ 1000;
            if(decodedToken.exp == null) {
                throw new Error('invalid JWT Token')
            }
            if (currentTime > (decodedToken.exp - 1000)){
                return token;
            }
        }

        const {data} = await axios.post(route('mqtt.token'));
        const t = data.token;
        return t;
    }

    

    function loadClient(atoken:string){
        const clientId = "emqx_react_" + 1;
        const username = atoken;
        
        console.log(username);
        console.log(clientId);
        console.log(emqx_url);

        const client =mqtt.connect(emqx_url,{
            clientId: clientId,
            username: username
        })

        client?.once("connect",()=>toast("Client successfull connected"));
        client?.once("error",(err)=>{console.log('Connected Client not success');console.log(err.message);});

        clientRef.current = client;
    }



    function publishDataNeu({mLeft, mRight}:Motor){

        const topic = "/user/" + user.id + "/roboter/" + robot.id +"/drive";
        
        console.log(mLeft);
        console.log(mRight);

        const payload = JSON.stringify({motorRight:mRight , motorLeft:mLeft});
        const qos = 0;
        clientRef.current?.publish(topic,payload,{qos},(error)=>{console.log(error?.message);console.log("error");});
    }
    //Veraltet
    function publishData(){

        const topic = "/user/" + user.id + "/roboter/" + robot.id +"/drive";
        
        console.log(mLeft);
        console.log(mRight);

        const payload = JSON.stringify({motorRight:mRight , motorLeft:mLeft});
        const qos = 0;
        clientRef.current?.publish(topic,payload,{qos},(error)=>{console.log(error?.message);console.log("error");});
    }

    
    
    useEffect(()=>{
        

        issueToken().then((t)=>{setToken(t);loadClient(t)});

        bindKey('w',{
            onPressed:() => {publishDataNeu({mLeft:100,mRight:100});},

            onReleased:() => {publishDataNeu({mLeft:0,mRight:0});}
        });

        bindKey('s',{
            onPressed:() => {publishDataNeu({mLeft:-100,mRight:-100});},
            onReleased:() => {publishDataNeu({mLeft:0,mRight:0});}
        });

        bindKey('a',{
            onPressed:() => {publishDataNeu({mLeft:100,mRight:0});},
            onReleased:() => {publishDataNeu({mLeft:0,mRight:0});}
        });

        bindKey('d',{
            onPressed:() =>{publishDataNeu({mLeft:0,mRight:100});},
            onReleased:() => {publishDataNeu({mLeft:0,mRight:0});}
        });

    },[])
    
    return (
        <>
        
            <Head title="Cockpit" />
            
            
            <div className="h-auto p-4 m-4 min-h-[250vh] rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                <ButtonGroup className="flex w-full items-center justify-end">
                    <ButtonGroup className="hidden sm:flex">
                        <Link href={route('robots.index')} ><Button variant="outline" size="icon" aria-label="Go Back">
                        <ArrowLeftIcon />
                    </Button></Link>
                    
                        </ButtonGroup>
                    <ButtonGroup>
                         <Button variant="outline" onClick={() => router.delete(route('robots.delete',robot.id))}> Delete</Button>
                        
                        <Button variant="outline" onClick={() => router.put(route('robots.resetPsw',robot.id))}>Neues Passwort</Button>
                    </ButtonGroup>

                    <ButtonGroup className="hidden sm:flex">
                        <Button variant="outline" onClick={() => router.get(route('robots.edit',robot.id))}>Edit</Button>
                    </ButtonGroup>
                </ButtonGroup>

                <div className='flex flex-col items-center'>
                    
                        {showPsw()}
                    
                    
                    <h5 className='m-2 '>Contoll Panel</h5>

                    <div className=" h-auto w-full space-x-8 m-4 p-4 rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border flex justify-around items-center ">
                   
                    <div className='w-fit h-fit'>
                        <h5>R</h5>
                        <Slider onValueChange={([v])=>{ setmLeft(v);publishData()}} defaultValue={[50]} max ={100} min={0} step={0.1} className='w-fit h-fit' orientation='vertical' >

                        </Slider>
                    
                    </div>
                    <div className='h-fit place-items-center w-fit'>
                        <h5>L</h5>
                        <Slider onValueChange={([v])=>{ setmRight(v);publishData()}} defaultValue={[50]} max ={100} min={0} step={0.1} className='w-fit h-fit' orientation='vertical' >

                        </Slider>
                    
                    </div>
                    
                    
                </div>

                </div>
                
                    
            </div>


            
            
        </>
    );
}

Index.layout = {
    breadcrumbs: [
        {
            title: 'Cockpit',
            href: '/robots/cockpit/{id}',
        },
    ],
};