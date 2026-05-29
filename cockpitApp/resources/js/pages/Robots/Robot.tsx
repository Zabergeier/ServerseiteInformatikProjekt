import { Head, Link, router, usePage } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
import { route } from 'ziggy-js';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Robot{
    id:number,
    nam:string,
    adr:string,
    bez:string,
    user_id:string
}

interface PageProps{
    
    robots:Robot[]
}

export default function Index() {

    return (
        <>
            <Head title="Mein Roboter" />
            <div className='m-4'>
                <Link href={route('robots.create')}> <Button> Register Robot </Button> </Link>
            </div>
            
        </>
    );
}

Index.layout = {
    breadcrumbs: [
        {
            title: 'Robots',
            href: '/robots/robot',
        },
    ],
};
