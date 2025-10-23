import React from 'react';
import BlurText from '../ui/BlurText';
import PixelTransition from '../ui/PixelTransitionCard';

const WorkPage: React.FC = () => {
  return (
    <div className="min-h-screen px-6 py-16 relative" style={{ zIndex: 0 }}>
      <div className="mx-auto max-w-6xl relative z-50">
        <BlurText 
          text="Work Experience" 
          className="text-4xl md:text-6xl block text-left mb-4"
          textColors={['#3C3CE8'] as string[]}
        />
        <div className="mb-10">
          <BlurText
            text="Click on each one to learn more"
            className="text-sm md:text-sm text-left"
            textColors={['#00ffff'] as string[]}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Systems Engineering Intern",
              company: "City of Edmonton",
              period: "Jan 2025 - Sep 2025",
              description:"Performed technical reviews and integration of contractor system designs on the $2.63B Valley Line West LRT project."
            },
            {
              title: "Research Intern",
              company: "University of Alberta Engineering",
              period: "Sep 2023 - Dec 2023",
              description:"Automated sensor data collection using Python and LabView, processing over 10,000 data points for research analysis."
            },
            {
              title: "Engineering Intern",
              company: "Al Futtaim Willis",
              period: "May 2023 - Aug 2023",
              description: "Proposed comprehensive risk engineering reports of client properties, oprimizing $750,000 worth of machinery."
            },
            {
              title: "Robotics Research Intern",
              company: "Manipal Academy of Higher Education",
              period: "Aug 2021 - Sep 2021",
              description: "Designed and programmed an Arduino-based rover, achieving 95% accuracy in autonomous navigation tasks."
            }
          ].map((job, i) => {
            // Function to render text with highlighted numbers
            const renderTextWithNumbers = (text: string) => {
              const parts = text.split(/(\$?\d+[.,]?\d*[BKM%]?)/g);
              return parts.map((part, index) => {
                if (/\$?\d+[.,]?\d*[BKM%]?/.test(part)) {
                  return (
                    <span key={index} className="block">
                      <span className="text-2xl md:text-3xl font-bold text-blue-400 leading-none">
                        {part}
                      </span>
                    </span>
                  );
                }
                return <span key={index}>{part}</span>;
              });
            };

            return (
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
                  <div className="text-white/90 text-base leading-relaxed space-y-2">
                    {renderTextWithNumbers(job.description)}
                  </div>
                </div>
              }
              gridSize={12}
              pixelColor='#ffffff'
              animationStepDuration={0.4}
              aspectRatio="60%"
            />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
