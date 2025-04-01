import type { Metadata } from "next";
import "../../globals.css"
import SideNav from '@/app/ui/prompts/sidenav'

export const metadata: Metadata = {
    title: {
        default: "Welcome to Prompt Smith",
        template: "%s | Prompt Smith"
    },
    description: "Welcome to Prompt Smith"
}

export default function DashboardLayout({ children }: { children: React.ReactNode } ) {
    return (
        <html lang="en">
            <body>
                <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                    <div className="w-full flex-none md:w-64">
                        <SideNav />
                    </div>
                    <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}
