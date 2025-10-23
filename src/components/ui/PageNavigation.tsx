import React, { useState, useEffect } from 'react';
import PagePreview from './PagePreview';

export type Page = 'home' | 'about' | 'work' | 'projects' | 'contact';

interface PageNavigationProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const PageNavigation: React.FC<PageNavigationProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pages = [
    { id: 'home' as Page, label: 'Home', number: '01' },
    { id: 'about' as Page, label: 'Overview', number: '02' },
    { id: 'work' as Page, label: 'Work Exp', number: '03' },
    { id: 'projects' as Page, label: 'Projects', number: '04' },
    { id: 'contact' as Page, label: 'Connect', number: '05' }
  ];

  const handlePageClick = (page: Page) => {
    onPageChange(page);
    setIsMenuOpen(false);
  };

  const scrollToContact = () => {
    onPageChange('contact');
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="fixed top-6 right-6 z-50 w-8 h-8 flex flex-col justify-center items-center space-y-1 hover:opacity-80 transition-opacity"
      >
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>

      {/* Reach Out Button */}
      <button
        onClick={scrollToContact}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
      >
        REACH OUT →
      </button>

      {/* Advanced Navigation Overlay with Zoom-out Effect */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm">
          <div className="flex h-full">
            {/* Left Side - Framed Current Page */}
            <div className="w-2/3 relative flex items-center justify-center">
              <div className="relative w-[80%] h-[53%]">
                {/* Blue Border Frame - Front layer */}
                <div className="absolute inset-0 border-4 border-blue-500 rounded-lg transform rotate-2 scale-95 shadow-2xl z-20"></div>
                <div className="absolute inset-0 border-4 border-blue-400 rounded-lg transform -rotate-1 scale-98 shadow-xl z-20"></div>
                
                {/* Current Page Preview - Laptop Screen */}
                <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl w-full h-full">
                  <div className="transform scale-[0.9455] origin-top-left w-[100%] h-[533.33%]">
                    <PagePreview currentPage={currentPage} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Navigation List */}
            <div className="w-1/3 flex flex-col justify-center p-8">
              <div className="space-y-6">
                {pages.map((page) => (
                  <div
                    key={page.id}
                    onClick={() => handlePageClick(page.id)}
                    className={`cursor-pointer transition-all duration-300 hover:scale-105 relative ${
                      currentPage === page.id 
                        ? 'text-white' 
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {/* Crossed out line for current page */}
                    {currentPage === page.id && (
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-500 transform -translate-y-1/2"></div>
                    )}
                    
                    <div className="text-4xl font-bold mb-2 relative z-10">
                      {page.number}
                    </div>
                    <div className="text-xl font-medium relative z-10">
                      {page.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl hover:opacity-80 transition-opacity z-60"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
};

export default PageNavigation;
