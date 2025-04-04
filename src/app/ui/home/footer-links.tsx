"use client"
import { footerLinks, socialLinks } from "@/app/lib/data";
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import Link from "next/link";

export function FooterLinks({ data, title }: { data: number, title: string }) {
    const pathname = usePathname()

    return (
        <>
            <h1 className="font-bold text-xl">{title}</h1>
            {footerLinks[data].map(footerLink => {
                return (
                    <Link
                        key={footerLink.name}
                        href={footerLink.href}
                        className={clsx(
                            "text-white font-light",
                            {
                                "text-yellow-500": pathname === footerLink.href,
                            }
                        )}
                    >
                        {footerLink.name}
                    </Link>
                )
            })}
        </>
    )
}

export function SocialLinks() {
    return (
        <div className="flex">
            {socialLinks.map(link => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex flex-row"
                    >
                        <LinkIcon className="size-6 mr-2"/>
                    </Link>
                )
            })}
        </div>
    )
}