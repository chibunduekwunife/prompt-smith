import type { Metadata } from 'next'

import {
    FolderIcon,
    EllipsisVerticalIcon,
    DocumentTextIcon,
    PencilSquareIcon,
    FolderPlusIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export const metadata: Metadata = {
    title: "Prompts",
    description:
        "View all your saved AI prompt; easily access trending " +
        "and test potential outputs with different AI models",
}

//move to database
const folders = [
    {name: "Example Folder", href: "/prompts/examplefolder"},
    {name: "Spicy Cats", href: "/prompts/spicsds"},
    {name: "ChatGPT Prompts", href: "/prompts/chat"},
    {name: "Free Prompts AI", href: "/prompts/snlds"},
]

const options = [
    {name: "Title (A-Z)", value: "TitleAsc"},
    {name: "Title (Z-A)", value: "TitleDesc"},
    {name: "Date added (Oldest First)", value: "DateAddedOldest"},
    {name: "Date added (Newest First)", value: "DateAddedNewest"}
]

const prompts = [
    {name: "My First Ever Prompt :)", href: "/", dateCreated: "4/5/2020"},
    {name: "My Second Ever Prompt :)", href: "/", dateCreated: "9/15/2040"},
    {name: "My Third Ever Prompt :)", href: "/", dateCreated: "5/16/2025"},
]

export default function DashboardPage () {
    return (
        <div>
            {/*folders section*/}
            <div className='mb-6'>
                <div className='flex flex-col lg:flex-row mb-4 lg:mb-0'>
                    <h1 className="font-extrabold text-xl my-3 text-purple-600">Folders</h1>
                    <Link
                        href='/'
                        className='flex flex-row gap-x-1.5 justify-items-center p-2 border max-w-fit
                    hover:text-purple-600 hover:border-purple-600 lg:ml-auto h-[40px]'
                    >
                        <FolderPlusIcon className='size-6' />
                        Create Folder
                    </Link>
                </div>
                <div className="justify-center">
                    <div className="flex flex-col gap-3 lg:grid lg:grid-cols-3 3xl:grid-cols-4">
                        {folders.map(folder => {
                            return (
                                <Link
                                    key={folder.name}
                                    href={folder.href}
                                    className='flex p-3 bg-gray-200 h-[54px] hover:bg-purple-100 items-center'
                                >
                                    <FolderIcon className='size-6' />
                                    <p className='ml-2'>{folder.name}</p>
                                    <EllipsisVerticalIcon className='size-6 ml-auto' />

                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/*prompts section*/}
            <div>
                <div className="flex flex-col lg:flex-row mb-4 lg:mb-0">
                    <h1 className="font-extrabold text-xl my-3 text-purple-600">Prompts (No Folder)</h1>
                    <select className='p-2 border h-[40px] max-w-[300px] lg:ml-auto' defaultValue="">
                        <option
                            value=""
                            disabled
                            hidden
                            className='text-gray-400'>Select a Sorting Option</option>
                        {options.map(options => {
                            return (
                                <option
                                    value={options.value}
                                    key={options.value}
                                >{options.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className=''>
                    <div className="flex flex-col gap-3">
                        {prompts.map(prompt => {
                            return (
                                <Link
                                    key={prompt.name}
                                    href={prompt.href}
                                    className='flex flex-row p-2 bg-gray-200 hover:bg-purple-100'
                                >
                                    <DocumentTextIcon className='size-6 mr-2' />

                                    <div className='flex flex-col'>
                                        {prompt.name}
                                        <div className='mr-2'>
                                            <p className='italic text-gray-500 text-sm'>
                                                Date Created: {prompt.dateCreated}
                                            </p>
                                        </div>
                                    </div>

                                    <PencilSquareIcon className='size-6 ml-auto' />
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
