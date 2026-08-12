import React from 'react';
import ServiceCard from './ServiceCard';
import ServiceCtaCard from './ServiceCtaCard';

const services = [
  {
    tag: 'UI/UX',
    title: 'UI/UX Design',
    description:
      'Designing user experiences that are clear, intuitive, and easy to navigate, with a strong focus on usability and consistency.',
  },
  {
    tag: '3 - 7 days',
    title: 'Wireframing',
    description:
      'Creating low to mid-fidelity wireframes to define layout, structure, and user flow before moving into visual design.',
  },
  {
    tag: 'User-focused',
    title: 'Research',
    description:
      'Exploring user needs, behaviors, and pain points through research and analysis to build more meaningful experiences.',
  },
  {
    tag: '4 - 7 days',
    title: 'Prototyping',
    description:
      'Building interactive prototypes to test flows, interactions, and usability before moving toward the final design.',
  },
  {
    tag: 'End-to-end',
    title: 'Product Design',
    description:
      'Designing digital products from early concepts to polished interfaces, balancing usability, functionality, and visual clarity.',
  },
];

export default function Services() {
  return (
    <section className="services">
      <div className="services-header">
        <span className="services-badge">What I Do</span>
        <p className="services-subtitle">
          An overview of the design services I offer, focused on creating
          clear, useful, and engaging digital experiences.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard 
            key={service.title}
            tag={service.tag}
            title={service.title}
            description={service.description}
          />
        ))}

        <ServiceCtaCard 
          label="Ready to Start?"
          buttonText="Contact Me!"
        />
      </div>
    </section>
  );
}
