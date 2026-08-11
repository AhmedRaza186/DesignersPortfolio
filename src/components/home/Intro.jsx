import React from 'react';

const tags = ['UX/UI', 'Wireframing', 'Prototyping', 'Research'];

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro-top">
        <span className="badge">
          <span className="badge-dot" />
          Available for Work
        </span>
        <div className="profile">
          <img
            className="avatar"
            src="https://api.builder.io/api/v1/image/assets/TEMP/ddaa56ac794d6f7b1c43af3371921c2a8bd245bb?width=80"
            alt="Aun Uddin Ahmed"
          />
          <div className="profile-info">
            <p className="profile-name">Aun Uddin Ahmed</p>
            <p className="profile-email">aunuddinahmed25@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="intro-body">
        <h1 className="heading">
          <span className="heading-muted">Thoughtful Digital</span>
          <span className="heading-strong">UI/UX Designer</span>
        </h1>
        <p className="description">
          I design digital products, websites, and interfaces with a strong focus
          on usability, clarity, and real-world impact. I turn complex ideas into
          experiences that feel simple, useful, intuitive, and purposeful.
        </p>
        <div className="cta-row">
          <button type="button" className="btn btn-dark">
            Get in Touch
          </button>
          <button type="button" className="btn btn-light">
            See More Info
          </button>
        </div>
      </div>

      <div className="tags-row">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
        <a href="#" className="tag-link">
          See Pricing
        </a>
      </div>
    </section>
  );
}
