import React from 'react';
import earbudsImg from '../../assets/Image (Earbuds).png';

export default function SeatspotCard() {
  return (
    <article className="project-card project-card--seatspot">
      <img src={earbudsImg} alt="Seatspot" className="project-image" />
      <div className="seatspot-overlay">
        <h3 className="seatspot-title">Seatspot</h3>
        <div className="seatspot-tags">
          <span className="tag tag--dark">UI/UX</span>
          <span className="tag tag--dark">Prototyping</span>
          <span className="tag tag--dark">3D</span>
        </div>
      </div>
    </article>
  );
}
