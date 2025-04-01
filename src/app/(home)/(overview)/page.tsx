import Link from 'next/link';
import { Metadata } from 'next'
import PromptSmithLogo from '@/app/ui/ps-logo'
import {
    GlobeAltIcon,
    ArrowRightCircleIcon
} from "@heroicons/react/24/outline"

export const metadata: Metadata = {
  title: 'Prompt Smith'
}

export default function Home() {
  return (
      <div>
          {/*hero*/}
          <div className='flex flex-col items-center'>

              {/*hero*/}
              <div className='flex flex-col items-center'>

                  {/*Logo*/}
                  <div className='flex h-25 items-end rounded-lg md:h-52'>
                      <PromptSmithLogo
                          iconStyles='text-purple-600 size-13 md:size-20'
                          textStyles='text-purple-600 text-[35px] md:text-[60px]'
                      />
                  </div>
                  <p className='md:text-2xl'>
                      The most beautiful way to organize & paste text
                  </p>

                  <Link
                      href="/chrome"
                      className="flex flex-row gap-2 text-white items-center mt-6 md:mt-8 px-6
                      py-3 bg-gradient-to-r from-blue-600 to-purple-500 font-bold text-sm md:text-lg
                      rounded-lg shadow-indigo-500/50 shadow-md hover:shadow-lg  duration-200 ease-out"
                  >
                      Get the Chrome Extension
                      <ArrowRightCircleIcon className="size-5 md:size-6"/>
                  </Link>

                  <div className="flex flex-row items-center gap-1 md:gap-1.5 text-gray-400 mt-3 md:mt-5">
                      <GlobeAltIcon className="size-4 md:size-6"/>
                      <p className="text-sm md:text-lg">
                          Join over 50K Users Worldwide
                      </p>
                  </div>
              </div>

              {/*Login Options*/}
              <div className='flex flex-col items-center'>
                  <div className="flex items-center mt-15 md:mt-20">
                      <p className="font-semibold md:text-2xl">
                          Easily Save and Manage Prompts
                      </p>
                  </div>
                  <Link
                      href="/chrome"
                      className="flex flex-row gap-2 text-purple-600 items-center mt-6 md:mt-8 px-6
                  py-3 bg-transparent border-2 border-solid border-purple-600 font-bold text-sm
                  md:text-lg rounded-md hover:border-purple-600 hover:bg-purple-600 hover:text-white
                  duration-150 ease-in-out"
                  >
                      Log on to Web App
                      <ArrowRightCircleIcon className="size-5 md:size-6"/>
                  </Link>
              </div>
          </div>

      </div>
  );
}
