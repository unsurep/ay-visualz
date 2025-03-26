'use client'

import TextTransition, { presets } from 'react-text-transition';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { motion } from 'motion/react';

const TEXTS = ['Creating Memories', 'Creating Experiences...', 'Creating Dreams...','Creating Journeys...',
    'Creating Connections...', 'Creating Emotions...', 'Creating Impressions...', 'Creating Journeys...', 'Creating Legacies...'
];

const Hero = () => {

    // typo effect
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);




  return (
    <>
    <div className='bg-cover bg-no-repeat bg-center h-screen lg:h-[80vh] font-delius flex flex-col items-center relative' style={{ backgroundImage: "url('/image/aylogo2.png')"}}>
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
        <h1 className='text-3xl lg:text-5xl font-bold pt-32 lg:pt-5 text-amber-400/90 font-delius '>Welcome </h1>

        <motion.div 
          initial={{opacity:0, y:-50 }}
          animate={{opacity:1, y:0 }}
          transition={{ duration:0.6}}


          className=" relative pt-24 lg:pt-16 text-center ">
          <h1 className="text-3xl lg:text-5xl text-amber-400/90 font-bold">Capturing Moments,</h1>
          <h1 className="text-3xl lg:text-5xl text-amber-400/90 font-bold pt-2">
            <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
          </h1>
        
          <div>
            <motion.button href="#contact" 
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}}

            className="mt-24 inline-block bg-amber-200 px-6 py-3 text-black rounded-lg hover:bg-black hover:text-white font-semibold hover:border border-white cursor-pointer ">Book a Session</motion.button>
          </div>
        </motion.div>

        {/* small screen hidden . shown on big screen */}
        <div className='hidden lg:block'>
            <Image src='/image/snap.webp' width={200} height={200} alt='image' className='absolute right-[5rem] bottom-0'/>
        </div>


        {/* big screen hidden, shown on small screen */}
        <div className='lg:hidden block'>
            <Image src='/image/snap.webp' width={170} height={170} alt='image' className='absolute right-[0rem] bottom-0'/>
        </div>

    
    </div>
    </>
  )
}

export default Hero
