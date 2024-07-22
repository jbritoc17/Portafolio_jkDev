import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      message: message,
    };

    fetch('http://localhost:5000/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.text())
    .then(data => {
      console.log('Success:', data);
      alert('Mensaje enviado correctamente');
      setFirstname('');
      setLastname('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error al enviar el mensaje');
    });
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <input 
            type="text" 
            name="firstname" 
            placeholder="First Name" 
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input 
            type="text" 
            name="lastname" 
            placeholder="Last Name" 
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <input 
          type="text" 
          name="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">SEND</button>
      </form>
      
    </div>
  );
};

export default ContactForm;
