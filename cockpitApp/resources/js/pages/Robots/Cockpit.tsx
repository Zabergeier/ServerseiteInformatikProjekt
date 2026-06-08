import { Head, Link, router, Form, useForm } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
import { route } from 'ziggy-js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';
import mqtt, { MqttClient } from "mqtt";
import { Console, error } from 'console';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { AlertDialog, } from 'radix-ui';
import { HoverCardTrigger,HoverCard, HoverCardContent  } from '@/components/ui/hover-card';


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



export default function Index({user,robot,psw}:PageProps) {
    const [token,setToken] = useState<string | undefined>(undefined);
    const [client,setClient] = useState<MqttClient | null>(null);
    const [mRight,setmRight] = useState<number>(75);
    const [mLeft,setmLeft] = useState<number>(75);

    const emqx_url = "wss://"+String(import.meta.env.VITE_MQTT_URL)+ ":8084/mqtt";
    
    const showPsw = () =>{
        console.log(psw);
       if(psw != null){
        return(
            
        <HoverCard openDelay={10} closeDelay={100}>
        <HoverCardTrigger asChild>
            <Button variant="link">Hover Here To Show Password</Button>
        </HoverCardTrigger>
        <HoverCardContent className="flex w-64 flex-col gap-0.5">
            <div className="font-semibold">Passwort: {psw}</div>
            <div>Name: {"robot_" + robot.id}</div>
            
        </HoverCardContent>
      
    </HoverCard>)
       }
       return (<>no psw</>)
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

        setClient(client);
    }



    function publishData(){
        console.log(robot.id);
        console.log(user.id);
        
        const topic = "/user/" + user.id + "/roboter/" + robot.id +"/drive";
        
        
        const payload = JSON.stringify({motorRight:mRight , motorLeft:mLeft});
        const qos = 0;
        client?.publish(topic,payload,{qos},(error)=>{console.log(error?.message);console.log("error");});
    }

    
    
    useEffect(()=>{
        

        issueToken().then((t)=>{setToken(t);loadClient(t)});
        

    },[])
    
    return (
        <>
        
            <Head title="Cockpit" />
            
            {showPsw()}
            <div className="h-auto p-4 m-4 min-h-[250vh] rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border grid grid-cols-6 place-items-center">
            
                <div>
                    <h5 className='m-2'>Contoll Panel</h5>
                    <div className=" h-auto p-4 m-4 rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border grid grid-cols-2 ">
                    
                    <div className='place-items-center h-fit'>
                        <h5>R</h5>
                        <Slider onValueChange={([v])=>{ setmLeft(v);publishData()}} defaultValue={[50]} max ={100} min={0} step={0.1} className='mx-auto h-fit' orientation='vertical' >

                        </Slider>
                    
                    </div>
                    <div className='h-fit place-items-center'>
                        <h5>L</h5>
                        <Slider onValueChange={([v])=>{ setmRight(v);publishData()}} defaultValue={[50]} max ={100} min={0} step={0.1} className='mx-auto h-fit' orientation='vertical' >

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