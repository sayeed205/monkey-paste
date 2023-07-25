import Link from 'next/link';
import { NavItem } from '@/types';

import { getCurrentUser } from '@/lib/session';
import { cn } from '@/lib/utils';

import { MainNav } from '../main-nav';
import { ModeToggle } from '../mode-toggle';
import { UserAccountNav } from '../user-account-nav';
import { buttonVariants } from './button';

interface HeaderProps {
    items: NavItem[];
}

export default async function Header({ items }: HeaderProps) {
    const user = await getCurrentUser();
    // if (!user) return notFound();

    return (
        <header className="sticky top-0 z-40 border-b bg-background">
            <div className="container flex h-16 items-center justify-between py-4">
                <MainNav items={items} />
                <div className="flex flex-row gap-2">
                    <ModeToggle />
                    {user ? (
                        <UserAccountNav
                            user={{
                                name: user.name,
                                image: user.image,
                            }}
                        />
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className={cn(
                                    buttonVariants({ variant: 'ghost' })
                                )}
                            >
                                Login
                            </Link>
                            <Link
                                href="/signup"
                                className={cn(
                                    buttonVariants({ variant: 'ghost' })
                                )}
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
