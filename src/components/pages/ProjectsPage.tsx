import React from 'react';
import BlurText from '../ui/BlurText';
import PixelTransition from '../ui/PixelTransitionCard';

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen px-6 py-16 relative" style={{ zIndex: 0 }}>
      <div className="mx-auto max-w-6xl relative z-50">
        <BlurText 
          text="Projects" 
          className="text-4xl md:text-6xl block text-center mb-4"
          textColors={['#3C3CE8'] as string[]}
        />
        
        <div className="mb-10">
          <BlurText
            text="Click each one to learn more"
            className="text-sm md:text-sm text-center"
            textColors={['#00ffff'] as string[]}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[                
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
              title: "Nexus NFT",
              description: "Responsive crypto website incorporating grid systems, typography styles, and auto-layout",
              tech: "Figma",
              link: "https://www.figma.com/proto/tEtMfllQA6AOjS5PurLuhD/Nexus---by-Tanush-Das?node-id=204-2&node-type=CANVAS&t=7KVNf4CUaCK8clb0-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
            },
            {
              title: "ACVMS",
              description: "Comprehensive Vehicle Management System",
              tech: "SketchUp, CAD",
              link: "https://web.connect.trimble.com/#/project/XdNbN84n9RI/detailviewer/vUg7ypooKts/Kv_JmoMlez0/revisions?stoken=RJDEZMw1FyagLnBcdaIY3OEWwxSX2xM2URMmaf8zlIV-EPK0Ak2inrVUmnAVdyw1&origin=app.connect.trimble.com"
            },
            {
              title: "BloodGuard",
              description: "A health-tech system integrating wearable data, and ML Insights integrated into an Android app to deliver cardiovascular health insights",
              tech: "Python, Scikit-learn, Kotlin, Android Studio, Javascript, HTML, CSS",
              link: "https://thisisbloodguard.github.io/"
            },
            {
              title: "LED Decoder",
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
              title: "Tanushell",
              description: "Custom Linux shell implementation with process management, job control, and I/O redirection",
              tech: "C, Linux",
              link: "https://github.com/Tanushdas22/Tanushell"
              },
              {
              title: "EmoteeLawg",
              description: "Android emotion tracking app with persistent storage using Room database and MVVM architecture",
              tech: "Java, Android Studio, Room, LiveData, ViewModel",
              link: "https://github.com/Tanushdas22/Emoteelawg"
              },
              {
              title: "LLM Maze Solver",
              description: "Research project exploring Tree of Thought prompting strategies for spatial reasoning tasks with GPT models",
              tech: "Python, Jupyter, OpenAI API",
              link: "https://github.com/Tanushdas22/MazeSolver"
              },
              {
              title: "Cancer-Free",
              description: "End-to-end machine learning pipeline for breast cancer diagnosis with KNN classification and ethical analysis",
              tech: "Python, scikit-learn, pandas, matplotlib",
              link: "https://github.com/Tanushdas22/MLP"
              }                
          ].map((project, i) => (
            <PixelTransition
              key={i}
              firstContent={
                <div className="p-4 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <div className="text-xs text-cyan-300/80 font-mono">{project.tech}</div>
                </div>
              }
              secondContent={
                <div className="p-4 h-full flex flex-col justify-center bg-gradient-to-br from-purple-600/20 to-blue-600/20">
                  <div className="text-white/90 text-sm leading-relaxed">
                    {project.description}
                  </div>
                  <div className="mt-4">
                    <a 
                      href={project.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full hover:bg-cyan-500/30 transition-colors duration-200"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              }
              gridSize={12}
              pixelColor='#7df9ff'
              animationStepDuration={0.4}
              aspectRatio="60%"
              className="col-span-1 h-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
