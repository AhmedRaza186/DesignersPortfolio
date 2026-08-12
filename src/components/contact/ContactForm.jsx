import React, { useState } from 'react';
import { WEB3FORMS_ACCESS_KEY } from '../../config/contact';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // '' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
    if (status) setStatus('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please enter your message.');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Project Inquiry from ${formData.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(result.message || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Failed to send the message. Please try again.');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name"
        className="form-field" 
        placeholder="Your Name" 
        value={formData.name}
        onChange={handleChange}
        disabled={status === 'loading'}
      />
      <input 
        type="email" 
        name="email"
        className="form-field" 
        placeholder="Your Email" 
        value={formData.email}
        onChange={handleChange}
        disabled={status === 'loading'}
      />
      <textarea 
        name="message"
        className="form-field form-message" 
        placeholder="Tell me about your project..." 
        value={formData.message}
        onChange={handleChange}
        disabled={status === 'loading'}
      />
      
      {errorMsg && <p className="form-error" style={{ color: '#d32f2f', fontSize: '14px', margin: 0 }}>{errorMsg}</p>}
      {status === 'success' && <p className="form-success" style={{ color: '#2e7d32', fontSize: '14px', margin: 0 }}>Message sent successfully!</p>}
      
      <button type="submit" className="btn btn-dark form-submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Take the First Step'}
      </button>
      <p className="form-consent">By submitting, you consent to being contacted about your inquiry.</p>
    </form>
  );
}
