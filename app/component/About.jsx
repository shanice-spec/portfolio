import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({ isDarkMode }) => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='Shanice Jones' className='w-full rounded-3xl'/>
        </div>

        <div className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo text-gray-600 dark:text-gray-300'>
                I'm a software developer with a strong focus on API development. Most of my work is designing and building
                APIs with .NET and Java, backed by well-structured SQL databases. I also build complete websites, from the
                database to the interface, using Next.js and Laravel. Beyond the code, I apply CI/CD principles with Azure
                Pipelines, automating builds, tests and deployments so every change ships quickly and reliably.
            </p>

            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description}) => (
                    <li key={title} className='border border-gray-400 rounded-xl p-6 cursor-pointer duration-500
                      hover:bg-lightHover hover:-translate-y-1 hover:shadow-black
                      dark:border-white dark:hover:bg-darkHover/50 dark:hover:shadow-white'>
                        <Image src={isDarkMode ? iconDark : icon} alt='' className='w-7 mt-3'/>
                        <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-gray-600 text-sm leading-6 dark:text-white/80'>{description}</p>
                    </li>
                ))}
            </ul>

            <h4 className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</h4>

            <ul className='flex flex-wrap items-center gap-3 sm:gap-5'>
                {toolsData.map((tool, index) => (
                    <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer
                      hover:-translate-y-1 duration-500 dark:border-white'>
                        <Image src={tool} alt='' className='w-5 sm:w-7'/>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
