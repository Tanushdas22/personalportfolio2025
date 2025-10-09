import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { HeroScene } from './scenes/HeroScene'
import { HeroOverlay } from './components/ui/HeroOverlay'
import BlurText from './components/ui/BlurText'
import { LogoLoop } from './components/ui/LogoLoop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVite, SiNodedotjs, SiMongodb } from 'react-icons/si'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import PixelTransition from './components/ui/PixelTransitionCard'
import ElectricBorder from './reactbits/ElectricBorder'
import Folder from './components/ui/FolderContact'
import Particles from './components/ui/Particles'
import PixelTrail from './components/ui/PixelCursor'

function App() {
  return (
    <div className="relative min-h-screen w-full text-white">
      {/* Fixed Particles Background - Like CSS background-attachment: fixed */}
      <Particles
        particleCount={300}
        particleSpread={15}
        speed={0.08}
        particleColors={['#00FFFF', '#00CCCC', '#009999']}
        moveParticlesOnHover={true}
        particleHoverFactor={0.5}
        alphaParticles={false}
        particleBaseSize={80}
        sizeRandomness={1.5}
        cameraDistance={25}
        disableRotation={false}
        className="particles-fixed"
      />

      
      {/* Single Combined Section */}
      <section className="relative overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-screen" style={{ zIndex: 0 }}>
          <Canvas shadows dpr={[1, 2]} gl={{ antialias: true }} className="absolute inset-0" style={{ zIndex: 2 }}>
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </Canvas>
          <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ zIndex: 3 }}>
            <HeroOverlay />
          </div>
        </div>

        {/* About Section */}
        <div className="min-h-screen grid place-items-center px-6 py-16 relative" style={{ zIndex: 0 }}>
          <div className="max-w-4xl text-center space-y-8">
            <BlurText 
              text="About Me" 
              className="text-4xl md:text-6xl"
              delay={150}
              animateBy="words"
              direction="top"
              style={{ color: '#00FFFF' }}
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
        </div>

        {/* Work Experience Section */}
        <div className="min-h-screen px-6 py-16 relative" style={{ zIndex: 0 }}>
          <div className="mx-auto max-w-6xl relative z-50">
            <BlurText 
              text="Work Experience" 
              className="text-4xl md:text-6xl block text-center mb-10"
              delay={100}
              animateBy="words"
              direction="top"
              style={{ color: '#00FFFF' }}
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
        </div>

        {/* Projects Section */}
        <div className="min-h-screen px-6 py-16 relative" style={{ zIndex: 0 }}>
          <div className="mx-auto max-w-6xl relative z-50">
            <BlurText 
              text="Projects" 
              className="text-4xl md:text-6xl block text-center mb-10"
              delay={120}
              animateBy="words"
              direction="top"
              style={{ color: '#00FFFF' }}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "3D Portfolio Website",
                  description: "Interactive portfolio with Three.js, React Three Fiber, and custom shaders.",
                  tech: "React, Three.js, Tailwind",
                  link: "https://github.io"
                },
                {
                  title: "E-commerce Platform",
                  description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
                  tech: "Next.js, Node.js, MongoDB",
                  link: "https://github.io"
                },
                {
                  title: "Real-time Chat App",
                  description: "WebSocket-based chat application with file sharing and emoji reactions.",
                  tech: "React, Socket.io, Express",
                  link: "https://github.io"
                },
                {
                  title: "Data Visualization Tool",
                  description: "Interactive charts and graphs for business analytics and reporting.",
                  tech: "D3.js, TypeScript, Python",
                  link: "https://github.io"
                },
                {
                  title: "Mobile Game",
                  description: "Cross-platform mobile game with multiplayer functionality and leaderboards.",
                  tech: "React Native, Firebase, Unity",
                  link: "https://github.io"
                },
                {
                  title: "AI Content Generator",
                  description: "Machine learning-powered content creation tool with natural language processing.",
                  tech: "Python, TensorFlow, FastAPI",
                  link: "https://github.io"
                },
                {
                  title: "Blockchain Explorer",
                  description: "Real-time blockchain transaction explorer with advanced filtering and analytics.",
                  tech: "Web3.js, Ethereum, React",
                  link: "https://github.io"
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
                  <a 
                    href={project.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-4 bg-black/80 backdrop-blur-sm rounded-[16px] h-full overflow-hidden cursor-pointer hover:bg-black/90 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-white/70 text-sm mb-3 leading-relaxed">{project.description}</p>
                    <div className="text-xs text-cyan-300/80 font-mono">{project.tech}</div>
                  </a>
                </ElectricBorder>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="h-screen grid place-items-center px-6 relative" style={{ zIndex: 0 }}>
          {/* Contact Text - Positioned outside the container */}
          <div className="absolute top-8 left-45 z-30">
            <BlurText 
              text="Contact" 
              className="text-4xl md:text-6xl"
              delay={180}
              animateBy="words"
              direction="left"
              style={{ color: '#00FFFF' }}
            />
          </div>
          
          <div className="mx-auto max-w-4xl w-full relative z-30">
            <div className="flex justify-center pt-10">
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
        </div>
      </section>
    </div>
  )
}

export default App
