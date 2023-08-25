import React, { useState } from 'react';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !email || !message) {
      // If any field is empty, display an alert
      alert('Please fill out all form fields.');
    } else {
      
      // If all fields are filled, display a thank you alert
      // Implement logic to send the contact form data
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);

      // Display an alert thanking the user for contacting
      alert('Thank you for contacting us!');
    }
  };

  return (
    <div>
      <h1 className='contact'>Contact Us</h1>
      <form>
        <div id='contact-container'>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} required />
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;
