import { Head, Link, router, usePage } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
import { route } from 'ziggy-js';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bot } from 'lucide-react';
import { ButtonGroup } from '@/components/ui/button-group';

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
                <Bot></Bot>
                <CardTitle>{robot.nam}</CardTitle>
                <CardDescription>{"robot_"+robot.id}</CardDescription>
                <CardAction>
                    <Link href={route('robots.cockpit',robot.id)}><Button variant='outline'>Connect</Button></Link>
                </CardAction>

            </CardHeader>
            <CardContent>
                {robot.bez}
            </CardContent>
            
        </Card>
    
    )
    return (
        <>
            <Head title="Robots" />
           
            <div className=" gap-4 overflow-x-auto rounded-xl p-4">
                
                
                <ScrollArea>
                    <div className="  p-4 m-4 min-h-[100vh] rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border justify-end">
                        <ButtonGroup className='justify-end p-2'> <Button className='justify-end'onClick={() => router.get(route('robots.create'))} > Register Robot </Button> </ButtonGroup>
                        
                        <div className=" rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border grid grid-cols-3">
                        
                        {items}
                    </div>
                    </div>
                </ScrollArea>
                
            </div>
            
        </>
    );
}

Index.layout = {
    breadcrumbs: [
        {
            title: 'Robots',
            href: '/robots',
        },
    ],
};
