import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { HeroScene } from './scenes/HeroScene'
import { HeroOverlay } from './components/ui/HeroOverlay'
import BlobCursor from './components/ui/BlobCursor'
import BlurText from './components/ui/BlurText'
import { LogoLoop } from './components/ui/LogoLoop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVite, SiNodedotjs, SiC, SiMysql, SiAssemblyscript, SiGnubash, SiArduino, SiPython, SiHtml5, SiCss3 } from 'react-icons/si'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import PixelTransition from './components/ui/PixelTransitionCard'
import ElectricBorder from './reactbits/ElectricBorder'
import Folder from './components/ui/FolderContact'
import Particles from './components/ui/Particles'

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
      
       <BlobCursor
         blobType="circle"
         fillColor="#5227FF"
         trailCount={3}
         sizes={[40, 75, 45]}
         innerSizes={[20, 35, 25]}
         innerColor="rgba(255,255,255,0.8)"
         opacities={[0.6, 0.6, 0.6]}
         shadowColor="rgba(0,0,0,0.75)"
         shadowBlur={5}
         shadowOffsetX={10}
         shadowOffsetY={10}
         filterStdDeviation={30}
         useFilter={true}
         fastDuration={0.1}
         slowDuration={0.5}
         zIndex={9999}
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
        <div className="min-h-screen grid place-items-center px-6 py-16 relative" style={{ zIndex: 0, color: '#ff0000' }}>
          <div className="max-w-4xl text-center space-y-8">
              <BlurText 
                text="About Me" 
                className="text-4xl md:text-6xl"
                delay={150}
                animateBy="words"
                direction="top"
                textColors={['#3C3CE8']}
              />
              <p className="text-white/80 text-left" style={{ color: '#00ffff' }}>
                People often ask me what makes a system tick. For me, it's the magic in the middle—the invisible conversations between devices. As a 4th-year Computer Engineering student, I'm fascinated by the architecture that powers our world, from the complex dance of Communication Systems and robust Networks to the cloud platforms they run on. I love building bridges, both digital and physical.
                <br/><br/> When I'm not designing the backbone of systems, I'm crafting their face, diving into the creative world of Web Development. I get a kick out of turning complex ideas into sleek, user-friendly interfaces, primarily wielding TypeScript and the React library. And for the heavy lifting behind the scenes? You'll find me loyal to Java, a passion first sparked by tinkering with Android development.
                <br/><br/> But my drive to build and organize isn't confined to code. I've channeled that same energy into leading teams and managing resources, having served as the VP Finance for my Engineering Student Society and as a Hardware Associate for NeurAlbertaTech. I've also orchestrated the tech behind the scenes as the Director of IT & Logistics for Instilt Educate.
                <br/><br/> Fueling this cycle of creation are two non-negotiables: a relentless gym session to clear my head and a steadfast cup of coffee to fill it with new ideas. I'm excited to connect and explore how I can help build what's next
              </p>
            <LogoLoop
              logos={[
                { node: <SiReact />, title: "React", href: "https://react.dev" },
                { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
                { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
                { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
                { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
                { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
                { node: <SiC />, title: "C", href: "https://en.wikipedia.org/wiki/C_(programming_language)" },
                { node: <SiMysql />, title: "SQL", href: "https://en.wikipedia.org/wiki/SQL" },
                { node: <SiAssemblyscript />, title: "Assembly", href: "https://en.wikipedia.org/wiki/Assembly_language" },
                { node: <SiGnubash />, title: "Bash", href: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)" },
                { node: <SiArduino />, title: "Arduino", href: "https://www.arduino.cc" },
                { node: <SiPython />, title: "Python", href: "https://www.python.org" },
                { node: <SiHtml5 />, title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
                { node: <SiCss3 />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
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
              className="text-4xl md:text-6xl block text-left mb-4"
              delay={100}
              animateBy="words"
              direction="top"
              textColors={['#3C3CE8']}
            />
            <div className="mb-10">
              <BlurText
                text="Click each one to learn more"
                className="text-sm md:text-sm text-left"
                delay={200}
                animateBy="words"
                direction="left"
                textColors={['#00ffff']}
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Systems Engineering Intern",
                  company: "City of Edmonton",
                  period: "Jan 2025 - Sep 2025",
                  description:"2.63B $ Valley Line West LRT project"
                },
                {
                  title: "Research Intern",
                  company: "University of Alberta Engineering",
                  period: "Sep 2023 - Dec 2023",
                  description:"Automated Data Collection using Python and LabView"
                },
                {
                  title: "Engineering Intern",
                  company: "Al Futtaim Willis",
                  period: "May 2023 - Aug 2023",
                  description: "Created Figma Designs for the AFW Wellness App"
                },
                {
                  title: "Robotics Research Intern",
                  company: "Manipal Academy of Higher Education",
                  period: "Aug 2021 - Sep 2021",
                  description: "Designed and programmed a rover in Arduino."
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
              textColors={['#3C3CE8']}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "7-Segment LED Decoder",
                  description: "Designed a 7-segment decoder to display hexadecimal values and count numbers.",
                  tech: "VHDL, FPGA Design, Vivado",
                  link: "https://github.com/Tanushdas22/7-segLED"
                },
                {
                  title: "Property Findr",
                  description: "Webscraper for finding properties and notifies users via email",
                  tech: "Python, BeautifulSoup, APScheduler",
                  link: "https://github.com/Tanushdas22/PropertyFindr"
                },
                {
                  title: "Wordl",
                  description: "Terminal-based guessing game where the user attempts to guess a secret word.",
                  tech: "C, Linux",
                  link: "https://github.com/Tanushdas22/wordl"
                },
                {
                  title: "LibraryBot",
                  description: "Simple personal library management application",
                  tech: "HTML, CSS, JavaScript",
                  link: "https://github.com/Tanushdas22/LibraryBot"
                },
                {
                  title: "BloodGuard",
                  description: "A health-tech system integrating wearable data, and ML Insights integrated into an Android app to deliver cardiovascular health insights",
                  tech: "Python, Scikit-learn, Kotlin, Android Studio, Javascript, HTML, CSS",
                  link: "https://thisisbloodguard.github.io/"
                },
                {
                  title: "Nexus NFT",
                  description: " Responsive crypto website incorporating grid systems, typography styles, and auto-layout for enhanced collaboration and efficiency",
                  tech: "Figma",
                  link: "https://www.figma.com/proto/tEtMfllQA6AOjS5PurLuhD/Nexus---by-Tanush-Das?node-id=204-2&node-type=CANVAS&t=7KVNf4CUaCK8clb0-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                },
                {
                  title: "ACVMS",
                  description: "Comprehensive Vehicle Management System",
                  tech: "SketchUp, CAD",
                  link: "https://web.connect.trimble.com/#/project/XdNbN84n9RI/detailviewer/vUg7ypooKts/Kv_JmoMlez0/revisions?stoken=RJDEZMw1FyagLnBcdaIY3OEWwxSX2xM2URMmaf8zlIV-EPK0Ak2inrVUmnAVdyw1&origin=app.connect.trimble.com"
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
                textColors={['#3C3CE8']}
              />
          </div>
          
          <div className="mx-auto max-w-4xl w-full relative z-30">
            <div className="flex justify-center pt-10">
              <Folder
                size={2}
                color="#5227FF"
                items={[
                  <div key="linkedin" className="flex items-center justify-center h-full p-2">
                    <a href="www.linkedin.com/in/tanush-das" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">
                      <FaLinkedin size={24} />
                    </a>
                  </div>,
                  <div key="github" className="flex items-center justify-center h-full p-2">
                    <a href="https://github.com/Tanushdas22" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                      <FaGithub size={24} />
                    </a>
                  </div>,
                  <div key="email" className="flex items-center justify-center h-full p-2">
                    <a href="mailto:tanushra@ualberta.ca" className="text-green-500 hover:text-green-400 transition-colors">
                      <MdEmail size={24} />
                    </a>
                  </div>
                ]}
              />
            </div>
          </div>
           <div className="absolute bottom-4 right-8 z-30">
             <p className="text-sm md:text-sm" style={{ color: '#FFFFFF' }}>
               ©2025 Tanush Das
             </p>
           </div>
        </div>
      </section>
    </div>
  )
}

export default App
