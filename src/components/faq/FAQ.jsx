import React, { useState } from 'react';
import FAQItem from './FAQItem';

const faqs = [
  {
    question: 'What does your design process look like?',
    answer:
      'I start with research and understanding the problem, then move into wireframes, prototypes, and finally high-fidelity designs, testing and refining along the way.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes, I work remotely with clients from anywhere in the world and communicate through calls, messages, and shared design files.',
  },
  {
    question: 'What do you need to get started?',
    answer:
      'A clear idea of your goals, target users, and any existing brand or product materials help me get started quickly.',
  },
  {
    question: 'Are you open to full-time opportunities?',
    answer:
      "Yes, I'm open to full-time roles as well as freelance and contract projects.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq">
      <div className="faq-header">
        <span className="faq-badge">FAQ</span>
        <p className="faq-subtitle">
          Here are answers to some common questions about my process,
          availability, and working together.
        </p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>

      <div className="faq-footer">
        <p className="faq-footer-label">Got more questions?</p>
        <button type="button" className="btn btn-dark faq-cta-btn">
          Contact Me!
        </button>
      </div>
    </section>
  );
}
