import React from 'react';
import waterwaveImg from '../../assets/Image (Water wave).png';

export default function WaterwaveCard() {
  return (
    <article className="project-card project-card--photo">
      <img src={waterwaveImg} alt="Waterwave" className="project-image" />
    </article>
  );
}
