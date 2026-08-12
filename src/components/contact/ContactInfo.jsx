import React from 'react';
import { CONTACT_EMAIL } from '../../config/contact';
import ChatButton from './ChatButton';

const contactDetails = [
  { label: 'Email', value: CONTACT_EMAIL },
  { label: 'Phone', value: '+92 334 7394996' },
  { label: 'Location', value: 'Karachi, Pakistan' },
  { label: 'Availability', value: 'Available for freelance projects' },
];

export default function ContactInfo() {
  return (
    <div className="contact-card">
      <div className="contact-photo">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a62f673a394d4d22f64567c4979af11f87454db7?width=510"
          alt="Aun Uddin Ahmed"
        />
      </div>
      <div className="contact-info">
        {contactDetails.map(({ label, value }) => (
          <div className="contact-info-item" key={label}>
            <p className="contact-info-label">{label}</p>
            <p className="contact-info-value">{value}</p>
          </div>
        ))}
        <div style={{ marginTop: '16px' }}>
          <ChatButton />
        </div>
      </div>
    </div>
  );
}
