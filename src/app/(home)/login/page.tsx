import PromptSmithLogo from '@/app/ui/ps-logo'
import { Suspense } from 'react'
import { Metadata } from 'next'
import LoginForm from '@/app/ui/login/login-form'

export const metadata: Metadata = {
    title: 'Login',
}

export default function LoginPage () {
    return (
        <main className="flex items-center justify-center">
            <div className='flex flex-col items-center mt-15 md:mt-25 w-[60%] max-w-[700px]'>
                <div className='bg-purple-600 py-10 md:py-15 w-full justify-items-center'>
                    <PromptSmithLogo
                        iconStyles="md:size-14"
                        textStyles="md:text-[40px]"
                    />
                </div>
                <Suspense>
                    <LoginForm />
                </Suspense>
            </div>
        </main>
    )
}
