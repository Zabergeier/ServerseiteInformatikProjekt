import { Head, Link, router, Form, useForm } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
import { route } from 'ziggy-js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';

interface Robot{
    id:number,
    nam:string,
    adr:string,
    bez:string,
    user_id:string
}

interface PageProps{
    robot:Robot
}

export default function Index(pageProps:PageProps) {
    
    
    return (
        <>
            <Head title="Cockpit" />
            <div className="h-auto p-4 m-4 min-h-[250vh] rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border grid grid-cols-6 place-items-center">
            
                <div>
                    <h5 className='m-2'>Contoll Panel</h5>
                    <div className=" h-auto p-4 m-4 rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border grid grid-cols-2 ">
                    
                    <div className='place-items-center h-fit'>
                        <h5>R</h5>
                        <Slider defaultValue={[75]} max ={100} step={0.1} className='mx-auto h-fit' orientation='vertical' >

                        </Slider>
                    
                    </div>
                    <div className='h-fit place-items-center'>
                        <h5>L</h5>
                        <Slider defaultValue={[75]} max ={100} step={0.1} className='mx-auto h-fit' orientation='vertical' >

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