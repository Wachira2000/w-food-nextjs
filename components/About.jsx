'use client';

import { fadeIn } from '@/variants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';

const About = () => {
  return (
    <section className='grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 items-center' id='about'>
        <motion.div 
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.4}}
        className='xl:pl-[135px]'>
            <h1 className='mb-9'>Let&apos;s Talk About Food</h1>
            <p className='mb-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cupiditate error enim ex ut natus autem, quisquam cum veniam reiciendis totam tenetur, odio libero qui corporis ea. Eligendi, commodi culpa?
            </p>
            <p className='mb-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam expedita vel soluta fugiat magni eveniet aliquam, vero voluptate inventore amet officiis quo! Earum repellat, tempora impedit magni quod voluptatibus maiores.
            </p>
            <Button>Read more</Button>
        </motion.div>
        {/* {img} */}
        <motion.div
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.4}}>
            <Image src='/about/img.png' width={705} height={771} alt='about' className='hidden xl:flex'/>
        </motion.div>
    </section>
  )
}

export default About