import React from 'react';
import termoglassImg from '../../assets/Image (Termo glass).png';

export default function TermoglassCard() {
  return (
    <article className="project-card project-card--photo">
      <img src={termoglassImg} alt="Termoglass" className="project-image" />
    </article>
  );
}
