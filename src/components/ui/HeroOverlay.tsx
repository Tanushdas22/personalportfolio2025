import BlurText from './BlurText'

export function HeroOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <BlurText 
        text="Tanush Das — Computer Engineer"
        className="select-none text-center text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-cyan-200/90"
        delay={80}
        animateBy="words"
        direction="top"
        stepDuration={0.4}
      />
    </div>
  )
}


