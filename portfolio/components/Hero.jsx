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
import Badge from './Badge'
import Socials from './Socials'

const Hero = () => {
    return <section className = "py-12 xl:py-24 h-[84vh] xl:pt-28 bg-blue-50 bg-no-repeat bg-bottom dark:bg-black">
        <div className="container mx-auto">
            <div>
                <div>txt</div>
                <div>img</div>
                <div>

                </div>
                <div className = 'hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                    <RiArrowDownSLine className = 'text-3xl text-primary' />    
                </div>
            </div>
        </div>
    </section>
}

export default Hero