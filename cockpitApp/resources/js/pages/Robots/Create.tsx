import { Head, Link, router, Form, useForm } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
import { route } from 'ziggy-js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';


export default function Index() {
    
    return (
        <>
            <Head title="Register Robot" />
            <div className='w-8/12 p-4'>
            <Form action={route('robots.register')} className='space-y-4'>
                <div className='gap-1.5'>
                    <label htmlFor="Robotername" >Name</label>
                    <Input placeholder='Robotername' name='nam' type='text' />
                </div>
                <div className='gap-1.5'>
                    <label htmlFor="Beschreibung">Beschreibung</label>
                    <Textarea placeholder='Beschreibung' name='bez' ></Textarea>
                    
                </div>
                
                <Button type='submit'>Register</Button>
                

                
            </Form>

            </div>
            
        </>
    );
}

Index.layout = {
    breadcrumbs: [
        {
            title: 'Register Robot',
            href: '/robots/create',
        },
    ],
};