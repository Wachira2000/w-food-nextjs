'use client';

import { fadeIn } from '@/variants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-footer bg-cover bg-no-repeat text-white pt-16'>
        <div className='container mx-auto'>
            {/* {logo} */}
            <div className='w-[300px] mb-8 xl:mb-0'>
                <Link href='/'>
                    <Image src='/logo.svg' width={90} height={36} alt='logo'/>
                </Link>
            </div>
            {/* {grid items} */}
            <div className='flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16'>
                {/* {blog} */}
                <div>
                    <h4 className='font-semibold mb-5'>Blog</h4>
                        <ul className='flex flex-col gap-y-6 text-sm'>
                            <li>
                                <Link href='/'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                Eius cumque maiores aspernatur saepe exercitationem. 
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                Itaque in rem adipisci maxime assumenda laborum. 
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                voluptatem similique quaerat et cum nemo? 
                                </Link>
                            </li>
                        </ul>
                   
                </div>
                {/* {item} */}
                <div>
                    <h4 className='font-semibold mb-5'>New Items</h4>
                        <ul className='flex flex-col gap-y-6 text-sm'>
                            <li>
                                <Link href='/'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                Eius cumque maiores aspernatur saepe exercitationem. 
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                Itaque in rem adipisci maxime assumenda laborum. 
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                voluptatem similique quaerat et cum nemo? 
                                </Link>
                            </li>
                        </ul>
                   
                </div>
                <div>
                    <h4 className='font-semibold mb-5'>Socials</h4>
                        <ul className='flex flex-col gap-y-6 text-sm'>
                            <li>
                                <Link href='/'>
                                    Youtube 
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                Instagram 
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                TikTok 
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                Facebook 
                                </Link>
                            </li>
                        </ul>
                </div>
                <div className='py-4 border-t border-white/10'>
                    <p className='text-white/60 text-center text-sm'>
                        Copyright &copy; Lewis Wachira
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer