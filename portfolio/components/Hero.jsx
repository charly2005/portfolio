'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Download, Send } from 'lucide-react'


import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,

} from 'react-icons/ri'

import DevImg from './DevImg'
import Socials from './Socials'

const Hero = () => {
    return <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-blue-50 bg-no-repeat bg-bottom dark:bg-black">
        <div className="container mx-auto">
            <div className='flex justify-between gap-x-8'>
                <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                    <div className='text-sm uppercase font-semibold mb-0 text-primary tracking-[4px]'></div>
                    <h1 className='h1 mb-4 '>Hi, my name is
                        Charles Yao</h1>
                    <p className='subtitle max-w[490px] mx-auto xl:mx-0'>This is my website containing my journey in becoming a software engineer</p>
                    <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-9'>
                        <Link href='/contact'>
                            <Button className='gap-x-2'>
                                Contact Me <Send size={18} />
                            </Button>
                        </Link>
                        <a href='/CharlesYaoResume.pdf' download='Charles-Yao-Resume' target='_blank' rel='noreferrer'>
                            <Button className='gap-x-2 bg-slate-600 hover:bg-slate-700 text-white hover:text-white'>
                                Download CV <Download size={18} />
                            </Button>
                        </a>

                    </div>
                    <Socials containerStyles = 'flex gap-x-6 mx-auto xl:mx-0' iconsStyles = 'text-foreground text-[30px] hover:text-primary transition-all'/>


                </div>
                <div className='hidden xl:flex relative'>
                    <div className = 'bg-hero_shape2_light h-[490px] w-[490px] bg-no-repeat absolute -top-1 -right-2' >
                        <div className = 'bg-hero_shape w-[510px] h-[462px] relative bg-no-repeat' >
                            <DevImg containerStyles = 'flex flex-col items-center justify-center relative -bottom-5 right-5' imgSrc = '/IMG_0850.jpg' />
                        </div>
                    </div>
                </div>

            </div>
            <div className='hidden md:flex absolute left-2/4 xl:bottom-10 md:bottom-10 animate-bounce'>
                <Link href="#about">

                    <RiArrowDownSLine className='text-3xl text-primary' />
                </Link>
            </div>
        </div>
    </section>
}

export default Hero