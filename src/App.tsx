import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { HeroScene } from './scenes/HeroScene'
import { HeroOverlay } from './components/ui/HeroOverlay'
import PixelTrail from './components/ui/PixelCursor'
import BlurText from './components/ui/BlurText'
import { LogoLoop } from './components/ui/LogoLoop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVite, SiNodedotjs, SiMongodb } from 'react-icons/si'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import PixelTransition from './components/ui/PixelTransitionCard'
import ElectricBorder from './reactbits/ElectricBorder'
import Folder from './components/ui/FolderContact'
// Background image is now set globally in CSS

function App() {
  return (
    <div className="relative min-h-screen w-full text-white">
      {/* Welcome/Hero Section */}
      <section
        className="relative h-screen snap-start overflow-hidden"
      >
        <PixelTrail
          gridSize={50}
          trailSize={0.1}
          maxAge={250}
          interpolate={5}
          color="#fff"
          gooeyFilter={{ id: "goo-welcome", strength: 2 }}
          className="pointer-events-none absolute inset-0"
        />
        <Canvas shadows dpr={[1, 2]} gl={{ antialias: true }} className="absolute inset-0">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </Canvas>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <HeroOverlay />
        </div>
      </section>

      {/* About */}
      <section
        className="min-h-screen snap-start grid place-items-center px-6 relative overflow-hidden"
      >
        <PixelTrail
          gridSize={50}
          trailSize={0.1}
          maxAge={250}
          interpolate={5}
          color="#fff"
          gooeyFilter={{ id: "goo-about", strength: 2 }}
          className="pointer-events-none absolute inset-0"
        />
        <div className="max-w-4xl text-center space-y-8">
          <BlurText 
            text="About Me" 
            className="text-4xl md:text-6xl"
            delay={150}
            animateBy="words"
            direction="top"
          />
          <p className="text-white/80">
            I'm a creative developer focused on rich, interactive web experiences combining
            3D graphics, motion, and modern UI engineering to deliver delightful, performant interfaces.
          </p>
          <LogoLoop
            logos={[
              { node: <SiReact />, title: "React", href: "https://react.dev" },
              { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
              { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
              { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
              { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
              { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
              { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
            ]}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Technology stack"
          />
        </div>
        {/* Temporarily disabled GradualBlur to test white space issue */}
        {/* <GradualBlur
          target="parent"
          position="bottom"
          height="6rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
        /> */}
      </section>

      {/* Work Experience */}
      <section
        className="min-h-screen snap-start px-6 py-16 relative overflow-hidden z-20"
      >
        <PixelTrail
          gridSize={50}
          trailSize={0.1}
          maxAge={250}
          interpolate={5}
          color="#fff"
          gooeyFilter={{ id: "goo-work", strength: 2 }}
          className="pointer-events-none absolute inset-0"
        />
        <div className="mx-auto max-w-6xl relative z-30">
          <BlurText 
            text="Work Experience" 
            className="text-4xl md:text-6xl block text-center mb-10"
            delay={100}
            animateBy="words"
            direction="top"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Senior Frontend Developer",
                company: "TechCorp Inc.",
                period: "2022 - Present",
                description: "Led development of React-based applications with 3D graphics integration."
              },
              {
                title: "Full Stack Developer",
                company: "StartupXYZ",
                period: "2020 - 2022",
                description: "Built scalable web applications using Node.js, React, and MongoDB."
              },
              {
                title: "Frontend Developer",
                company: "Digital Agency",
                period: "2019 - 2020",
                description: "Created responsive websites and interactive user interfaces."
              },
              {
                title: "Junior Developer",
                company: "Web Solutions",
                period: "2018 - 2019",
                description: "Developed and maintained client websites using modern web technologies."
              }
            ].map((job, i) => (
              <PixelTransition
                key={i}
                firstContent={
                  <div className="p-6 h-full flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <p className="text-white/70 mb-2">{job.company}</p>
                    <p className="text-sm text-white/50">{job.period}</p>
                  </div>
                }
                secondContent={
                  <div className="p-6 h-full flex flex-col justify-center bg-gradient-to-br from-purple-600/20 to-blue-600/20">
                    <p className="text-white/90 text-sm leading-relaxed">{job.description}</p>
                  </div>
                }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.4}
                aspectRatio="60%"
              />
            ))}
          </div>
        </div>
        {/* Temporarily disabled GradualBlur to test white space issue */}
        {/* <GradualBlur
          target="parent"
          position="bottom"
          height="4rem"
          strength={1.5}
          divCount={4}
          curve="ease-out"
          opacity={0.8}
        /> */}
      </section>

      {/* Projects */}
      <section
        className="min-h-screen snap-start px-6 py-16 relative overflow-hidden z-20"
      >
        <PixelTrail
          gridSize={50}
          trailSize={0.1}
          maxAge={250}
          interpolate={5}
          color="#fff"
          gooeyFilter={{ id: "goo-projects", strength: 2 }}
          className="pointer-events-none absolute inset-0"
        />
        <div className="mx-auto max-w-6xl relative z-30">
          <BlurText 
            text="Projects" 
            className="text-4xl md:text-6xl block text-center mb-10"
            delay={120}
            animateBy="words"
            direction="top"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "3D Portfolio Website",
                description: "Interactive portfolio with Three.js, React Three Fiber, and custom shaders.",
                tech: "React, Three.js, Tailwind"
              },
              {
                title: "E-commerce Platform",
                description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
                tech: "Next.js, Node.js, MongoDB"
              },
              {
                title: "Real-time Chat App",
                description: "WebSocket-based chat application with file sharing and emoji reactions.",
                tech: "React, Socket.io, Express"
              },
              {
                title: "Data Visualization Tool",
                description: "Interactive charts and graphs for business analytics and reporting.",
                tech: "D3.js, TypeScript, Python"
              },
              {
                title: "Mobile Game",
                description: "Cross-platform mobile game with multiplayer functionality and leaderboards.",
                tech: "React Native, Firebase, Unity"
              },
              {
                title: "AI Content Generator",
                description: "Machine learning-powered content creation tool with natural language processing.",
                tech: "Python, TensorFlow, FastAPI"
              },
              {
                title: "Blockchain Explorer",
                description: "Real-time blockchain transaction explorer with advanced filtering and analytics.",
                tech: "Web3.js, Ethereum, React"
              }
            ].map((project, i) => (
              <ElectricBorder
                key={i}
                color="#7df9ff"
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: 16 }}
                className="col-span-1 h-full"
              >
                <div className="p-4 bg-black/80 backdrop-blur-sm rounded-[16px] h-full overflow-hidden cursor-pointer">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-3 leading-relaxed">{project.description}</p>
                  <div className="text-xs text-cyan-300/80 font-mono">{project.tech}</div>
                </div>
              </ElectricBorder>
            ))}
          </div>
        </div>
        {/* Temporarily disabled GradualBlur to test white space issue */}
        {/* <GradualBlur
          target="parent"
          position="bottom"
          height="5rem"
          strength={2}
          divCount={6}
          curve="bezier"
          opacity={0.9}
        /> */}
      </section>

      {/* Contact */}
      <section
        className="h-screen snap-start grid place-items-center px-6 relative overflow-hidden z-20"
      >
        <PixelTrail
          gridSize={50}
          trailSize={0.1}
          maxAge={250}
          interpolate={5}
          color="#fff"
          gooeyFilter={{ id: "goo-contact", strength: 2 }}
          className="pointer-events-none absolute inset-0"
        />
        <div className="mx-auto max-w-4xl w-full relative z-30">
          <div className="absolute top-8 left-8">
            <BlurText 
              text="Contact" 
              className="text-4xl md:text-6xl"
              delay={180}
              animateBy="words"
              direction="top"
            />
          </div>
          <div className="flex justify-center pt-28">
            <Folder
              size={2}
              color="#5227FF"
              items={[
                <div key="linkedin" className="flex items-center justify-center h-full p-2">
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">
                    <FaLinkedin size={24} />
                  </a>
                </div>,
                <div key="github" className="flex items-center justify-center h-full p-2">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                    <FaGithub size={24} />
                  </a>
                </div>,
                <div key="email" className="flex items-center justify-center h-full p-2">
                  <a href="mailto:hello@example.com" className="text-green-500 hover:text-green-400 transition-colors">
                    <MdEmail size={24} />
        </a>
      </div>
              ]}
            />
          </div>
        </div>
      </section>
      </div>
  )
}

export default App
