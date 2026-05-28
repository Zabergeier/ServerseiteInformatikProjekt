import { Head, Link, router } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
import { route } from 'ziggy-js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Index() {
    return (
        <>
            <Head title="Register Robot" />
            <div className='w-8/12 p-4'>
            <form className='gap-4'>
                <div className='gap-4'>
                    <label htmlFor="Robotername">Name</label>
                    <Input placeholder='Robotername'/>
                </div>
                <div className='gap-4'>
                    <label htmlFor="Adress">Adresse des Roboters</label>
                    <Input placeholder='127.0.0.1 ...'/>
                </div>
            </form>

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