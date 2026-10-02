import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const navLinks = [
    { label: 'Home', href: '#top' },
    { label: 'About me', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'My work', href: '#work' },
    { label: 'Contact me', href: '#contact' },
]

const Navbar = ({ isDarkMode, toggleTheme }) => {

    const [isScroll, setIsScroll] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setIsScroll(window.scrollY > 50)
        onScroll()
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

  return (
    <>
      {/* soft colour glow behind the top of the page */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full' priority />
      </div>

      <nav className={`w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-colors duration-300
        ${isScroll ? 'bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme/80 dark:shadow-white/20' : ''}`}>
        <a href="#top">
            <Image src={assets.shanice_logo} alt="Shanice" className='w-28 cursor-pointer mr-14' priority />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 font-Ovo
          ${isScroll ? '' : 'bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent'}`}>
            {navLinks.map(({ label, href }) => (
                <li key={href}><a href={href} className='hover:text-gray-500 dark:hover:text-gray-300 transition-colors'>{label}</a></li>
            ))}
        </ul>

        <div className='flex items-center gap-4 lg:gap-6'>
            <button onClick={toggleTheme} aria-label='Toggle dark mode'>
                <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className='w-6 cursor-pointer'/>
            </button>
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
                Connect <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3'/>
            </a>
            <button className='block md:hidden ml-3' onClick={() => setIsMenuOpen(true)} aria-label='Open menu'>
                <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className='w-6 cursor-pointer'/>
            </button>
        </div>
      </nav>

      {/* -- ----- mobile menu ----- -- */}
      {/* Kept outside <nav>: the nav's backdrop blur would otherwise trap this fixed panel inside the nav bar. */}
      <div className={`flex md:hidden flex-col py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500
        dark:bg-darkHover dark:text-white ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <button className='absolute top-6 right-6' onClick={() => setIsMenuOpen(false)} aria-label='Close menu'>
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className='w-5 cursor-pointer'/>
            </button>
            <ul className='flex flex-col gap-4'>
                {navLinks.map(({ label, href }) => (
                    <li key={href}><a className='font-Ovo' onClick={() => setIsMenuOpen(false)} href={href}>{label}</a></li>
                ))}
            </ul>
      </div>
    </>
  )
}

export default Navbar
