import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

// Roles cycled through in the headline, typed out one at a time like a terminal.
const roles = ['software developer', 'API developer', 'full-stack developer', 'cloud engineer']

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

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact"
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>
          contact me
          <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </a>
        <a href="/sample-resume.pdf" download
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
          my resume
          <Image src={assets.download_icon} alt='' className='w-4' />
        </a>
      </div>
    </div>
  )
}

export default Header
