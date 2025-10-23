import React from 'react';
import BlurText from '../ui/BlurText';
import Folder from '../ui/FolderContact';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ContactPage: React.FC = () => {
  return (
    <div className="h-screen px-4 sm:px-6 py-16 relative" style={{ zIndex: 0 }}>
      <div className="mx-auto max-w-6xl relative z-50">
        <BlurText 
          text="Contact" 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl block text-center mb-4"
          textColors={['#3C3CE8']}
        />
        
        <div className="mb-10">
          <BlurText
            text="Tap on the folder!"
            className="text-xs sm:text-sm text-center"
            textColors={['#00ffff']}
          />
        </div>
        
        <div className="mx-auto max-w-4xl w-full relative z-30 flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="flex justify-center pt-10">
            <Folder
              size={2}
              color="#5227FF"
              items={[
                <a key="linkedin" href="https://www.linkedin.com/in/tanush-das" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full p-2 w-full cursor-pointer hover:bg-blue-50 transition-colors duration-200 rounded-lg">
                  <FaLinkedin size={24} className="text-blue-500" />
                </a>,
                <a key="github" href="https://github.com/Tanushdas22" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full p-2 w-full cursor-pointer hover:bg-gray-50 transition-colors duration-200 rounded-lg">
                  <FaGithub size={24} className="text-black" />
                </a>,
                <a key="email" href="mailto:tanushra@ualberta.ca" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full p-2 w-full cursor-pointer hover:bg-green-50 transition-colors duration-200 rounded-lg">
                  <MdEmail size={24} className="text-green-500" />
                </a>
              ] as Array<React.ReactNode | null>}
            />
          </div>
        </div>
        <div className="absolute bottom-4 right-4 sm:right-8 z-30">
          <p className="text-xs sm:text-sm" style={{ color: '#FFFFFF' }}>
            ©2025 Tanush Das
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
