import React from 'react';
import { type Page } from './PageNavigation';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import WorkPage from '../pages/WorkPage';
import ProjectsPage from '../pages/ProjectsPage';
import ContactPage from '../pages/ContactPage';

interface PagePreviewProps {
  currentPage: Page;
}

const PagePreview: React.FC<PagePreviewProps> = ({ currentPage }) => {
  const renderPreview = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'work':
        return <WorkPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="w-full h-full overflow-hidden rounded-lg bg-black">
      <div className="transform scale-50 origin-top-left w-[200%] h-[200%]">
        {renderPreview()}
      </div>
    </div>
  );
};

export default PagePreview;
