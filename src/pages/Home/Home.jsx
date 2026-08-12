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
      <About />
      <Services />
      <FAQ />
      <main className="main-content">
        <Intro />
        <Projects />
      </main>
      <Contact />
      <footer className="footer">© 2026 Aun Uddin Ahmed</footer>
    </div>
  );
}
