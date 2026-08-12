import React from 'react';
import { WHATSAPP_NUMBER } from '../../config/contact';

export default function ChatButton() {
  const handleChat = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <button 
      type="button" 
      className="btn btn-dark chat-btn" 
      onClick={handleChat}
    >
      Chat With Me
    </button>
  );
}
