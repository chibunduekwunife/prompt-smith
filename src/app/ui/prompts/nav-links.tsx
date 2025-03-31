"use client"

import {
    HomeIcon,
    ArrowTrendingUpIcon,
    ShareIcon,
    BeakerIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

const links = [
    {name: 'My Prompts', href: '/prompts', icon: HomeIcon},
    {name: 'Shared Prompts', href: '/prompts/shared', icon: ShareIcon},
    {name: 'Trending Prompts', href: '/prompts/trending', icon: ArrowTrendingUpIcon},
    {name: 'Test Prompts', href: '/prompts/tests', icon: BeakerIcon},
];

export default function NavLinks() {

    const pathname = usePathname();

    return (
        <>
            {links.map(link => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 " +
                            "text-sm font-medium hover:bg-purple-100 hover:text-purple-500 md:flex-none " +
                            "md:justify-start md:p-2 md:px-3",
                            {
                                'bg-purple-100 text-purple-500': pathname === link.href
                            }
                        )}>
                            <LinkIcon className="w-6" />
                            <p className="hidden md:block">{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}
