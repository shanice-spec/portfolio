import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

// TODO: replace with the email address you want visitors to see.
const EMAIL = 'your-email@example.com'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.shanice_logo} alt='Shanice' className='w-36 mx-auto mb-2'/>
        <a href={`mailto:${EMAIL}`} className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
            {EMAIL}
        </a>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© {new Date().getFullYear()} Shanice Jones. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a href="https://github.com/" target='_blank' rel='noreferrer'>GitHub</a></li>
            <li><a href="https://www.linkedin.com/" target='_blank' rel='noreferrer'>LinkedIn</a></li>
            <li><a href="#contact">Connect with me</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
