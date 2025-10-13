import React from 'react'
import RotatingText from './RotatingText'

export function HeroOverlay() {
  const texts = [
    "Tanush Das",
    "a Computer Engineer",
    "a Systems Architect",
    "a Full Stack Developer",
    "a UI/UX Designer",
    "a Data Engineer"
  ]

  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center scale-125 sm:scale-125 md:scale-150 lg:scale-[2] px-4">
      <div className="mt-2 sm:mt-4 text-center text-lg sm:text-lg md:text-xl" style={{ color: '#3C3CE8' }}>
        <p>Hello World! I'm</p>
      </div>
      <h1 className="select-none text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight px-2" style={{ color: '#00ffff' }}>
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


