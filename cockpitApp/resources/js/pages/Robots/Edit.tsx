import { Head, router, Form,} from '@inertiajs/react';
import { route } from 'ziggy-js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface Robot{
    id:number,
    nam:string,
    psw:string,
    bez:string,
    user_id:string
}

interface PageProps{
    robot:Robot
}

export default function Index({robot} : PageProps) {
    
    return (
        <>
            <Head title="Edit Robot" />
            
            <div className='w-8/12 p-4'>
            
            <Form method='put' action={route('robots.saveEdit',robot.id)} className='space-y-4'>
                <h2>Name: {robot.nam}</h2>
                <p>Id: robot_{robot.id}</p>
                <div className='gap-1.5'>
                    <label htmlFor="Robotername" >Name</label>
                    <Input placeholder='Robotername' name='nam' type='text' defaultValue={robot.nam} />
                </div>
                <div className='gap-1.5'>
                    <label htmlFor="Beschreibung">Beschreibung</label>
                    <Textarea placeholder='Beschreibung' name='bez' defaultValue={robot.bez}></Textarea>
                    
                </div>

                
                
                <Button type='submit'>Bestätige</Button>
                

                
            </Form>

            </div>
            
        </>
    );
}

Index.layout = {
    breadcrumbs: [
        {
            title: 'Edit Robot',
            href: '/robots/{$robot.id}/edit',
        },
    ],
};