import { useEffect, useState } from 'react'

export function HeroOverlay() {
  const full = "Tanush Das — Computer Engineering"
  const [text, setText] = useState("")

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      setText(full.slice(0, i++))
      if (i > full.length) clearInterval(id)
    }, 40)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <h1 className="select-none text-center text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-cyan-200/90">
        {text}
        <span className="animate-pulse">▍</span>
      </h1>
    </div>
  )
}


