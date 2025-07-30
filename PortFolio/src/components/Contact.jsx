import React, { useState } from 'react';
const Contact = () => {
  const [userName, setUserName] = useState('');
  const [userContact, setUserContact] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const sendWhatsApp = () => {
    if (!userName || !userContact || !userMessage) {
      alert("Please fill out all fields.");
      return;
    }

    const message = `Hello, I am ${userName}. My contact is ${userContact}. Here is my message: ${userMessage}`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '916202216048'; // Replace with your WhatsApp number

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };
  return (
    <>
      <h6 className="about-me">
        <span className="neon-underline">Cont</span>act Me
      </h6>

      <div class="contact-section">

        <div class="contact-buttons">
          <a href="tel:+911234567890" className='none'>
            <button>Phone</button>
          </a>
          <a href="mailto:kk5214662@gmail.com" target="_blank" className='none'>
            <button>Email</button>
          </a>
        </div>

        <div className="contact-form">
          <h3>Send a Message</h3>
          <input
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Contact (Phone or Email)"
            value={userContact}
            onChange={(e) => setUserContact(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <button onClick={sendWhatsApp}>Send via WhatsApp</button>
        </div>
      </div>

    </>
  )
};

export default Contact;