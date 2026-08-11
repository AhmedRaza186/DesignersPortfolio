import React from 'react';
import SeatspotCard from './SeatspotCard';
import TermoglassCard from './TermoglassCard';
import WaterwaveCard from './WaterwaveCard';
import CTACard from './CTACard';

export default function Projects() {
  return (
    <section className="projects">
      <SeatspotCard />
      <TermoglassCard />
      <WaterwaveCard />
      <CTACard />
    </section>
  );
}
