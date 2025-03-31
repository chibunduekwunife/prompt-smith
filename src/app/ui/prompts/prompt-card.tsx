
import Link from 'next/link'

export function PromptDiv ({children}: {children: React.ReactNode}) {
    return (
        <div className='justify-center flex flex-col gap-3'>
            {children}
        </div>
    )
}

export function PromptCard ({ title , href }: {
    title: string,
    href: string,
}) {

    return (
        <Link
            href={href}>
            {title}
        </Link>
    )
}

