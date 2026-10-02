import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = ({ isDarkMode }) => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>What I offer</h4>
      <h2 className='text-center text-5xl font-Ovo'>My services</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300'>
        From the API that powers your product to the website your users see and the pipeline that deploys it,
        here's how I can help.
      </p>

      <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10'>
        {serviceData.map(({ icon, title, description, link }) => (
            <div key={title} className='border border-gray-300 rounded-lg px-8 py-12 cursor-pointer duration-500
              hover:bg-lightHover hover:-translate-y-1 hover:shadow-black
              dark:border-white/50 dark:hover:bg-darkHover dark:hover:shadow-white'>
                <Image src={icon} alt='' className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
                <a href={link || '#contact'} className='flex items-center gap-2 text-sm mt-5'>
                    Read more <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} alt='' className='w-4'/>
                </a>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Services
