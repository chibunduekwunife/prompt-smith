"use client"

import PromptSmithLogo from "@/app/ui/ps-logo";
import Form from 'next/form'
import { FooterLinks, SocialLinks } from "@/app/ui/home/footer-links"

export default function FooterMenu () {

    return (
        <footer className="inset-x-0 bg-gradient-to-r from-purple-600 to-purple-900
        text-white px-4 py-10">

            <div className="flex flex-col justify-center items-center lg:flex-row gap-4">

                {/*logo section*/}
                <div className="gap-y-5 w-full md:w-[55%] lg:w-[40%] mb-15">
                    <div className="flex flex-col justify-center mb-5 ">
                        <PromptSmithLogo
                            logoStyles="my-2 justify-center lg:justify-start"
                            iconStyles="size-15 lg:size-12"
                            textStyles="text-[50px] lg:text-[32px]"
                        />
                        <p className="text-gray-200 italic hidden lg:flex text-sm">Effortlessly Save & Manage AI Prompts</p>
                    </div>
                    <div>
                        <Form action="/" className="flex flex-col gap-y-6">
                            <h1 className="font-bold text-xl text-center lg:text-left">Subscribe Now</h1>
                            <input
                                name="subscribe"
                                placeholder="Enter your Email"
                                type="email"
                                className="bg-white text-black p-2"
                            />
                            <button
                                type="submit"
                                className="bg-purple-950 p-4 rounded-lg cursor-pointer"
                            >
                                Subscribe
                            </button>
                        </Form>
                    </div>
                </div>

                {/*information & Helpful Links section*/}
                <div className="grid grid-cols-2 gap-10 w-full justify-center md:flex flex-row">
                    {/*section A*/}
                    <div className="flex flex-col gap-y-4">
                        <FooterLinks data={0} title={"Information"} />
                    </div>
                    {/*section B*/}
                    <div className="flex flex-col gap-y-4">
                        <FooterLinks data={1} title={"Helpful Links"} />
                    </div>
                    {/*section C*/}
                    <div className="flex flex-col gap-y-4">
                        <FooterLinks data={2} title={"Our Services"} />
                    </div>
                    {/*section D*/}
                    <div className="flex flex-col gap-y-4">
                        <FooterLinks data={3} title={"Contact Us"} />
                    </div>
                </div>

                <div className="flex flex-col mt-10 items-center">
                    <p>Prompt Smith &#169; 2020</p>
                    <div className="mt-5">
                        <SocialLinks />
                    </div>
                </div>
            </div>
            {/**/}
        </footer>
    )
}
