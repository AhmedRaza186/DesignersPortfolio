import React from 'react';

export default function About() {
  return (
    <section className="about">
      <span className="about-badge">About Me</span>
      <div className="about-body">
        <h1 className="about-heading">I'm Aun</h1>
        <div className="about-description">
          <p>
            I'm a UI/UX Designer and 7th Semester BBA student passionate about
            designing intuitive digital experiences that solve real user
            problems. With 1 year of hands-on experience, I focus on creating
            products that are simple, functional, and visually engaging.
          </p>
          <p>
            I've worked on web and mobile applications, transforming ideas
            into user-centered interfaces through research, wireframing,
          </p>
        </div>
      </div>
      <button type="button" className="btn btn-dark about-resume-btn">
        Download Resume
      </button>
    </section>
  );
}
