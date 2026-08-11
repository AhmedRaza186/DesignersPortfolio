import React from 'react';

const contactLinks = [
  { label: 'Email', value: 'aunuddinahmed25@mail.com' },
  { label: 'X (Twitter)', value: '@lukaswieslek' },
  { label: 'Instagram', value: '@syed_.oun' },
  { label: 'Dribbble', value: '@wieslekdesign' },
];

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
        <div className="contact-card">
          <div className="contact-photo">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a62f673a394d4d22f64567c4979af11f87454db7?width=510"
              alt="Aun Uddin Ahmed"
            />
          </div>
          <div className="contact-info">
            {contactLinks.map(({ label, value }) => (
              <div className="contact-info-item" key={label}>
                <p className="contact-info-label">{label}</p>
                <p className="contact-info-value">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="contact-form">
          <input type="text" className="form-field" placeholder="Your Name*" />
          <input type="email" className="form-field" placeholder="Email*" />
          <textarea className="form-field form-message" placeholder="Message" />
          <button type="submit" className="btn btn-dark form-submit">
            Take the First Step
          </button>
          <p className="form-consent">By submitting, you consent to being contacted about your inquiry.</p>
        </form>
      </div>
    </section>
  );
}
