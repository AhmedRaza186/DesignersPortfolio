import React from 'react';
import Topbar from '../../components/layout/Topbar';
import Intro from '../../components/home/Intro';
import Projects from '../../components/home/Projects';
import Contact from '../../components/home/Contact';

export default function Home() {
  return (
    <div className="page">
      <Topbar />
      <main className="main-content">
        <Intro />
        <Projects />
      </main>
      <Contact />
      <footer className="footer">© 2026 Aun Uddin Ahmed</footer>
    </div>
  );
}
