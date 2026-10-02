import React from 'react'

// Soft blobs in the header glow's colours (cream, pink, lavender, sky blue),
// spread down the full height of the page so the tint continues past the top.
// Sizes and positions are percentages of the page, so it stretches with the content.
const blobs = [
  // top of the page: replaces the old header-bg-color.png glow
  'radial-gradient(35% 6% at 75% 2%, rgba(226, 222, 250, 0.9), transparent)',
  'radial-gradient(30% 5% at 45% 3%, rgba(243, 222, 250, 0.8), transparent)',
  'radial-gradient(25% 5% at 15% 4%, rgba(247, 246, 226, 0.9), transparent)',
  'radial-gradient(45% 9% at 85% 14%, rgba(226, 222, 250, 0.85), transparent)',
  'radial-gradient(40% 8% at 10% 24%, rgba(247, 246, 226, 0.9), transparent)',
  'radial-gradient(45% 9% at 30% 34%, rgba(243, 222, 250, 0.8), transparent)',
  'radial-gradient(40% 8% at 90% 46%, rgba(232, 241, 254, 0.9), transparent)',
  'radial-gradient(45% 9% at 15% 58%, rgba(230, 226, 250, 0.8), transparent)',
  'radial-gradient(40% 8% at 80% 70%, rgba(245, 225, 245, 0.85), transparent)',
  'radial-gradient(45% 9% at 20% 84%, rgba(232, 241, 254, 0.9), transparent)',
  'radial-gradient(40% 8% at 85% 95%, rgba(247, 246, 226, 0.9), transparent)',
]

const PageGlow = () => (
  <div aria-hidden='true' className='absolute inset-0 -z-10 pointer-events-none dark:hidden'
    style={{ backgroundImage: blobs.join(', ') }} />
)

export default PageGlow
