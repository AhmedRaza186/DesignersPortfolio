import React from 'react';

export default function ServiceCard({ tag, title, description }) {
  return (
    <article className="service-card">
      <span className="service-tag">{tag}</span>
      <div className="service-card-body">
        <h3 className="service-title">{title}</h3>
      </div>
      <p className="service-description">{description}</p>
    </article>
  );
}
