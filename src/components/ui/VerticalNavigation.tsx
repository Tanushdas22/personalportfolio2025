import React, { useState, useEffect } from 'react';

interface NavigationItem {
  id: string;
  label: string;
  sectionId: string;
}

const VerticalNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  const navigationItems: NavigationItem[] = [
    { id: '01', label: 'Home', sectionId: 'home' },
    { id: '02', label: 'Overview', sectionId: 'about' },
    { id: '03', label: 'Work Exp', sectionId: 'work' },
    { id: '04', label: 'Projects', sectionId: 'projects' },
    { id: '05', label: 'Connect', sectionId: 'contact' }
  ];

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => document.getElementById(item.sectionId)).filter(Boolean);
      
      let current = '';
      sections.forEach(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section.id;
          }
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-4 sm:left-6 top-1/2 transform -translate-y-1/2 z-50 hidden sm:block">
      <div className="flex flex-col items-center space-y-8">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/30 transform -translate-x-1/2"></div>
        
        {/* Navigation items */}
        {navigationItems.map((item) => (
          <div key={item.id} className="relative flex items-center">
            {/* Number */}
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium cursor-pointer transition-all duration-300 ${
                activeSection === item.sectionId 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-transparent text-white/60 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => scrollToSection(item.sectionId)}
            >
              {item.id}
            </div>
            
            {/* Label */}
            <div 
              className={`ml-3 text-sm font-medium cursor-pointer transition-all duration-300 ${
                activeSection === item.sectionId 
                  ? 'text-blue-400' 
                  : 'text-white/60 hover:text-white'
              }`}
              onClick={() => scrollToSection(item.sectionId)}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default VerticalNavigation;
