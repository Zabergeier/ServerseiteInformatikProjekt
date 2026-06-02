import { Head, Link, router, usePage } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
import { route } from 'ziggy-js';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Robot{
    id:number,
    nam:string,
    psw:string,
    bez:string,
    user_id:string
}

interface User{
    id:number,
    name:string,
    email:string
}
interface PageProps{
    
    robots:Robot[],
    user: User,
}

export default function Index({robots,user}:PageProps) {
    
    const items = robots.map((robot)=>
        <Card key={robot.id} className='m-4'>
            
            <CardHeader>
                <CardTitle>{robot.nam}</CardTitle>
                <CardDescription>{"robot_"+robot.id}</CardDescription>
                <CardAction>
                    <Link href={route('robots.cockpit',robot.id)}><Button variant='outline'>Connect</Button></Link>
                </CardAction>

            </CardHeader>
            <CardContent>
                Das ist ein Roboter mit der Beschreibung: {robot.bez}
            </CardContent>
            
        </Card>
    
    )
    return (
        <>
            <Head title="Robots" />
           
            <div className=" gap-4 overflow-x-auto rounded-xl p-4">
                
                <ScrollArea>
                    <div className=" min-h-[100vh] rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border grid grid-cols-3">
                        {items}
                    </div>
                </ScrollArea>
                
            </div>
            <div className='m-4'>
                <Link href={route('robots.create')}> <Button> Register Robot </Button> </Link>
            </div>
            
        </>
    );
}

Index.layout = {
    breadcrumbs: [
        {
            title: 'Index',
            href: '/index',
        },
    ],
};
