import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { ImLocation2 } from "react-icons/im";
import { MdWifiCalling } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
        {/* Desktop 1st small nav */}
        <div className='hidden md:flex items-center justify-between md:px-[3rem] font-delius py-1 bg-zinc-200 w-full fixed z-10'>
            <ul className='flex items-center gap-5'>
                <SocialIcon
                url="https://facebook.com"
                target="_blank"
                network="facebook"
                style={{ height: 20, width: 20,}}
                className="colorscheme"/>

                <SocialIcon
                url="https://instagram.com"
                target="_blank"
                network="instagram"
                style={{ height: 20, width: 20,}}
                className="colorscheme"/>

                {/* <SocialIcon
                url="https://tiktok.com"
                target="_blank"
                network="tiktok"
                style={{ height: 20, width: 20,}}
                className="colorscheme"/> */}

                <SocialIcon
                url="https://whatsapp.com"
                target="_blank"
                network="whatsapp"
                style={{ height: 20, width: 20,}}
                className="colorscheme"/>
            </ul>


            <ul className='flex items-center gap-5'>
                <li className='flex items-center gap-2'><ImLocation2 className='text-red-500'/>Canada</li>
                <li className='flex items-center gap-2'><MdWifiCalling /> <span className='animate-pulse'>+1(306) 261-6653</span></li>
            </ul>

        </div>

        {/* Main Desktop Nav */}
        <nav className='hidden lg:flex items-center pt-10 text-black pb-2 justify-between px-[1rem] md:px-[3rem] bg-white/30 w-full font-montserrat shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] '>

            <Link href={'/'} className='flex items-center gap-3'>
                <Image src='/image/aylogo2.png' width={100} height={100} alt='logo' className='rounded-lg'/>
                <h3 className='font-extrabold text-3xl logo-text-color tracking-[5px] font-delius'>AYVisualZ</h3>
                
            </Link>

            <ul className='flex items-center gap-10 font-delius'>
                <li className='hover:bg-amber-200 py-1 px-3 hvr-shutter-in-vertical font-semibold cursor-pointer'>Home</li>
                <li className='hover:bg-amber-200 py-1 px-3 hvr-shutter-in-vertical font-semibold cursor-pointer'>About</li>
                <li className='hover:bg-amber-200 py-1 px-3 hvr-shutter-in-vertical font-semibold cursor-pointer'>Gallery</li>
                <li className='hover:bg-amber-200 py-1 px-3 hvr-shutter-in-vertical font-semibold cursor-pointer'>Services</li>
                <li className='hover:bg-amber-200 py-1 px-3 hvr-shutter-in-vertical font-semibold cursor-pointer'>Contact</li>

            </ul>

        </nav>

        {/* FOR SMALL SCREEN 1ST NAVBAR */}
        <div className='flex lg:hidden items-center justify-between px-[1rem] md:px-[3rem] font-delius py-1 bg-zinc-200 w-full fixed z-10'>
            <ul className='flex items-center gap-4'>
                <SocialIcon
                url="https://facebook.com"
                target="_blank"
                network="facebook"
                style={{ height: 20, width: 20,}}
                className="colorscheme"/>

                <SocialIcon
                url="https://instagram.com"
                target="_blank"
                network="instagram"
                style={{ height: 20, width: 20,}}
                className="colorscheme"/>

                {/* <SocialIcon
                url="https://tiktok.com"
                target="_blank"
                network="tiktok"
                style={{ height: 20, width: 20,}}
                className="colorscheme"/> */}

                <SocialIcon
                url="https://whatsapp.com"
                target="_blank"
                network="whatsapp"
                style={{ height: 20, width: 20,}}
                className="colorscheme"/>
            </ul>


            <ul className='flex items-center gap-1 text-sm'>
                {/* <li className='flex items-center gap-1'><ImLocation2 className='text-red-500'/>Canada</li> */}
                <li className='flex items-center gap-1'><MdWifiCalling /> <span className='animate-pulse font-bold'>+1(306) 261-6653</span></li>
            </ul>

        </div>

        {/* main Nav for phone screen */}
        <nav className='lg:hidden flex items-center pt-10 text-black py-3 justify-between px-[1rem] md:px-[3rem] bg-white/30 w-full font-montserrat shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] '>

            <Link href={'/'} className='flex items-center gap-3 '>
                <Image src='/image/aylogo2.png' width={70} height={70} alt='logo' className=''/>
                <h3 className='font-extrabold text-xl logo-text-color '>AYVisualZ</h3>
                
            </Link>

            <div>
                <Image src='/image/menu.svg' width={40} height={40} alt='menu logo' className=''/>
            </div>

        </nav>










      
    </>
  )
}

export default Navbar
