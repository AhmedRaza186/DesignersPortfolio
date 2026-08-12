import React from 'react';
import Topbar from '../../components/layout/Topbar';
import Intro from '../../components/home/Intro';
import About from '../../components/about/About';
import Services from '../../components/services/Services';
import FAQ from '../../components/faq/FAQ';
import Projects from '../../components/projects/Projects';
import Contact from '../../pages/Contact/Contact';

export default function Home() {
  return (
    <div className="page">
      <Topbar />
      
      {/* 1. Home Section (Hero) */}
      <main className="main-content">
        <Intro />
        <Projects />
      </main>
      
      {/* 2. About Section */}
      <About />
      
      {/* 3. Projects Section (Reserved / Not Implemented Yet) */}
      {/* <ProjectsSection /> */}
      
      {/* 4. Services Section */}
      <Services />
      
      {/* 5. Contact Section */}
      <Contact />
      
      {/* 6. FAQ Section */}
      <FAQ />
      
      {/* 7. Footer Section (Reserved / Not Implemented Yet) */}
      {/* <Footer /> */}
    </div>
  );
}
