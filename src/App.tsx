import { useState } from 'react'
import BlobCursor from './components/ui/BlobCursor'
import Particles from './components/ui/Particles'
import PageNavigation, { type Page } from './components/ui/PageNavigation'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import WorkPage from './components/pages/WorkPage'
import ProjectsPage from './components/pages/ProjectsPage'
import ContactPage from './components/pages/ContactPage'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderCurrentPage = () => {
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
    <div className="relative min-h-screen w-full text-white">
      {/* Navigation Components */}
      <PageNavigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      {/* Fixed Particles Background - Like CSS background-attachment: fixed */}
      <Particles
        particleCount={500}
        particleSpread={15}
        speed={0.08}
        particleColors={['#FFFFFF', '#FFFFFF', '#FFFFFF']}
        moveParticlesOnHover={true}
        particleHoverFactor={2.0}
        alphaParticles={false}
        particleBaseSize={150}
        sizeRandomness={1.5}
        cameraDistance={25}
        disableRotation={false}
        className="particles-fixed fixed inset-0"
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

      {/* Current Page */}
      <section className="relative overflow-hidden">
        {renderCurrentPage()}
      </section>
    </div>
  )
}

export default App