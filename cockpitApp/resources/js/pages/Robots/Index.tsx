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

export default function Index({robots}:PageProps) {
    const handleConnect = function(robot:Robot){
        route()
    }

    const items = robots.map((robot)=>
        <Card className='m-4'>
            
            <CardHeader>
                <CardTitle>{robot.nam}</CardTitle>
                <CardDescription>{robot.adr}</CardDescription>
                <CardAction>
                    <Button variant='outline' onClick={() => handleConnect(robot)}>Connect</Button>
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
