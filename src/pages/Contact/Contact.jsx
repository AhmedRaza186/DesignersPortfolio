import React from 'react';
import ContactInfo from '../../components/contact/ContactInfo';
import ContactForm from '../../components/contact/ContactForm';

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2 className="contact-title">Contact Me!</h2>
        <p className="contact-subtitle">
          Have a project in mind or just want to say hello? Feel free to reach out.
        </p>
      </div>

      <div className="contact-content">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
