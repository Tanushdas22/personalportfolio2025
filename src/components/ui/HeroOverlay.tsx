import React from 'react'
import RotatingText from './RotatingText'

export function HeroOverlay() {
  const texts = [
    "Tanush Das",
    "a Computer Engineer",
    "a Full Stack Developer",
    "a UI/UX Designer",
    "a Creative Technologist"
  ]

  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center scale-[2]">
      <div className="mt-4 text-center text-lg sm:text-xl" style={{ color: '#FFFFFF' }}>
        <p>Hello World! I'm</p>
      </div>
      <h1 className="select-none text-center text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight" style={{ color: '#00FFFF' }}>
        {React.createElement(RotatingText as any, {
          texts: texts,
          rotationInterval: 3000,
          transition: {
            type: "spring",
            damping: 20,
            stiffness: 300
          },
          initial: { y: '100%', opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: '-100%', opacity: 0 },
          splitBy: "words",
          mainClassName: "text-center"
        })}
      </h1>      
    </div>
  )
}


