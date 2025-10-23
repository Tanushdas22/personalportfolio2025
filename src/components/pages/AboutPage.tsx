import React from 'react';
import BlurText from '../ui/BlurText';
import { LogoLoop } from '../ui/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVite, SiNodedotjs, SiC, SiMysql, SiAssemblyscript, SiGnubash, SiArduino, SiPython, SiHtml5, SiCss3 } from 'react-icons/si';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-8 sm:py-16 relative" style={{ zIndex: 0, color: '#ff0000' }}>
      <div className="mx-auto max-w-6xl relative z-50">
        <BlurText 
          text="About Me" 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl block text-left mb-4"
          textColors={['#3C3CE8'] as string[]}
        />
        <p className="text-white/80 text-left text-sm sm:text-base lg:text-lg leading-relaxed px-2 sm:px-0 w-full mb-8" style={{ color: '#00ffff' }}>
          People often ask me what makes a system tick. For me, it's the magic in the middle—the invisible conversations between devices. As a 4th-year Computer Engineering student, I'm fascinated by the architecture that powers our world, from the complex dance of Communication Systems and robust Networks to the cloud platforms they run on. I love building bridges, both digital and physical.
          <br/><br/> When I'm not designing the backbone of systems, I'm crafting their face, diving into the creative world of Web Development. I get a kick out of turning complex ideas into sleek, user-friendly interfaces, primarily wielding TypeScript and the React library. And for the heavy lifting behind the scenes? You'll find me loyal to Java, a passion first sparked by tinkering with Android development.
          <br/><br/> But my drive to build and organize isn't confined to code. I've channeled that same energy into leading teams and managing resources, having served as the VP Finance for my Engineering Student Society and as a Hardware Associate for NeurAlbertaTech. I've also orchestrated the tech behind the scenes as the Director of IT & Logistics for Instilt Educate.
          <br/><br/> Fueling this cycle of creation are two non-negotiables: a relentless gym session to clear my head and a steadfast cup of coffee to fill it with new ideas. I'm excited to connect and explore how I can help build what's next
        </p>
        <div className="flex justify-start">
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
    </div>
  );
};

export default AboutPage;
