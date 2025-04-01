"use client"

import PromptSmithLogo from "@/app/ui/ps-logo";
import { navLinks } from "@/app/lib/data";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import clsx from 'clsx'

export default function NavBar () {
    const pathname = usePathname();

    return (
        <div className='flex flex-row p-4 bg-gradient-to-r from-purple-600 to-purple-900 gap-2 items-center'>
            <Link
                href="/">
                <PromptSmithLogo logoStyles='text-purple-600' textStyles='hidden md:flex' />
            </Link>
            <div className='flex ml-auto gap-1.5 md:gap-2'>
                {navLinks.map(navLink => {
                    const LinkIcon = navLink.icon;
                    return (
                        <Link
                            key={navLink.name}
                            href={navLink.href}
                            className={clsx(
                                'flex flex-row text-white border rounded-sm px-3 py-2 hover:text-gray-200' +
                                ' duration-100 ease-in-out',
                                {
                                    'bg-purple-500 border-purple-300': pathname === navLink.href,
                                }
                            )}>
                            <LinkIcon className='size-6 mr-2' />
                            {navLink.name}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
