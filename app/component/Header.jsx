import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

// Roles cycled through in the headline, typed out one at a time like a terminal.
const roles = ['software developer', 'API developer', 'full-stack developer', 'cloud engineer']

// Round icon links shown beside the resume button.
const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/shanice-spec',
    icon: <path d='M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z' />,
  },
  {
    label: 'Email',
    href: 'mailto:shanicejones567890@gmail.com',
    icon: <path d='M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1 2.3V17h16V7.3l-8 5.6-8-5.6ZM5.4 7l6.6 4.6L18.6 7H5.4Z' />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shanice-jones-574318271/',
    icon: <path d='M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.83v1.5h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13v5.43h-4v-4.81c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.89h-4v-11Z' />,
  },
]

const TYPE_SPEED = 90      // ms per letter while typing
const DELETE_SPEED = 45    // ms per letter while erasing
const HOLD_TIME = 1800     // ms a finished role stays on screen
const NEXT_WORD_DELAY = 400

const useTypewriter = (words) => {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    // Visitors who've asked their OS for less motion just get the first role, no animation.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0])
      return
    }

    const word = words[wordIndex]
    const finishedTyping = !isDeleting && text === word
    const finishedDeleting = isDeleting && text === ''

    const delay = finishedTyping ? HOLD_TIME
      : finishedDeleting ? NEXT_WORD_DELAY
      : isDeleting ? DELETE_SPEED : TYPE_SPEED

    const timer = setTimeout(() => {
      if (finishedTyping) {
        setIsDeleting(true)
      } else if (finishedDeleting) {
        setIsDeleting(false)
        setWordIndex((wordIndex + 1) % words.length)
      } else {
        setText(word.slice(0, text.length + (isDeleting ? -1 : 1)))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex, words])

  return text
}

const Header = () => {
  const typedRole = useTypewriter(roles)

  return (
    <div id='top' className='w-11/12 max-w-3xl text-center mx-auto min-h-screen pt-28 pb-10 flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='Shanice Jones' className='rounded-full w-32 sm:w-40 object-cover aspect-square' priority />
      </div>

      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi! I'm Shanice Jones
        <Image src={assets.hand_icon} alt='' className='w-6'/>
      </h3>

      {/* min-h keeps the line's height reserved so the page doesn't jump while the text is erased */}
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo leading-tight min-h-[1.25em]' aria-label={roles.join(', ')}>
        <span aria-hidden='true'>
          {typedRole}
          <span className='inline-block w-[0.08em] h-[0.9em] ml-1 align-[-0.05em] bg-current animate-blink'></span>
        </span>
      </h1>

      <p className='max-w-2xl mx-auto font-Ovo text-gray-600 dark:text-gray-300'>
        I build fast, reliable APIs with .NET and Java, and complete websites with Next.js and Laravel,
        then ship them through automated Azure pipelines.
      </p>

      <div className='flex flex-wrap items-center justify-center gap-4 mt-4'>
        <a href="/Shanice_Jones_Resume.pdf" download
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>
          my resume
          <Image src={assets.download_icon} alt='' className='w-4 invert' />
        </a>
        <div className='flex items-center gap-3'>
          {socials.map(({ label, href, icon }) => (
            <a key={label} href={href} aria-label={label}
              {...(href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
              className='w-12 h-12 rounded-full border border-gray-500 bg-white text-black flex items-center justify-center hover:-translate-y-1 duration-300'>
              <svg viewBox='0 0 24 24' className='w-5 h-5' fill='currentColor' aria-hidden='true'>{icon}</svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
