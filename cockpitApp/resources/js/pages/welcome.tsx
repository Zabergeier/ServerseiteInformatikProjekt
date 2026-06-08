import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';
import { route } from 'ziggy-js';
import { Bot } from 'lucide-react';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Welcome" />
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={route('robots.index')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={register()}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row p-4 m-4">
                        <div className="flex flex-col items-start gap-6 lg:gap-8">
                            <Card className="w-full border-[#19140035] dark:border-[#3E3E3A] m-8 p-8">
                                <Bot className="h-20 w-20 text-[#191400] dark:text-[#EDEDEC]" />
                                <CardTitle className="text-3xl font-bold tracking-tight lg:text-4xl dark:text-[#EDEDEC] text-[#191400]">
                                Welcome to Cockpit
                                </CardTitle>
                                <CardDescription className="text-lg text-[#191400] dark:text-[#EDEDEC]">
                                Cockpit is a powerful and user-friendly web application designed to help you manage and control your robots with ease. Whether you're a hobbyist, a developer
                                </CardDescription>
                                
                                


                            </Card>
                            
                        </div>
                    
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
