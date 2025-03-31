import Image from "next/image";
import Link from 'next/link';
import { Metadata } from 'next'
import PromptSmithLogo from '@/app/ui/ps-logo'
import {
    UserCircleIcon,
    CurrencyDollarIcon,
    AcademicCapIcon
} from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Prompt Smith'
}

const navLinks = [
    {name: 'About', href: '/', icon: AcademicCapIcon},
    {name: 'Affiliates', href: '/', icon: CurrencyDollarIcon},
    {name: 'login', href: '/prompts', icon: UserCircleIcon}
]

export default function Home() {
  return (
      <div>
          {/*nav*/}
          <div className='flex flex-row p-4 bg-purple-600 gap-2 justify-center lg:justify-end'>
              <PromptSmithLogo logoStyles='hidden text-purple-600 lg:flex lg:mr-auto' />
              {navLinks.map(navLink => {
                  const LinkIcon = navLink.icon;
                  return (
                      <Link
                          key={navLink.name}
                          href={navLink.href}
                          className='flex flex-row text-white border rounded-sm px-3 py-2'>
                              <LinkIcon className='size-6 mr-2' />
                              {navLink.name}
                      </Link>
                  )
              })}
          </div>

          {/*hero*/}
          <div className='flex flex-col items-center'>
              {/*Logo*/}
              <div className='flex h-25 items-end rounded-lg lg:h-52'>
                  <PromptSmithLogo
                      iconStyles='text-purple-600 size-13 lg:size-20'
                      textStyles='text-purple-600 text-[35px] lg:text-[60px]'
                  />
              </div>
              <p className='lg:text-lg'>
                  The most beautiful way to organize & paste text
              </p>
          </div>

      </div>
  );
}
