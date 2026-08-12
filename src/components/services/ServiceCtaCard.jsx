import React from 'react';

export default function ServiceCtaCard({ label, buttonText }) {
  return (
    <article className="service-card service-card--cta">
      <p className="service-cta-label">{label}</p>
      <button type="button" className="btn btn-dark service-cta-btn">
        {buttonText}
      </button>
    </article>
  );
}
