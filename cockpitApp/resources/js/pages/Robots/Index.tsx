import { Head, Link, router } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
import { route } from 'ziggy-js';
import { Button } from '@/components/ui/button';

export default function Index() {
    return (
        <>
            <Head title="Robots" />
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
            href: '/robots',
        },
    ],
};
