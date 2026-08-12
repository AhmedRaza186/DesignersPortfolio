import React from 'react';

export default function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="faq-item">
      <button
        type="button"
        className="faq-question"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        {question}
        <span className={`faq-icon ${isOpen ? 'faq-icon--open' : ''}`}>+</span>
      </button>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
}
