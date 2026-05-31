import { Head, Link, router, Form, useForm } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
import { route } from 'ziggy-js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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