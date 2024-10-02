import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import process from 'process';
import './Contact.css'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Email sent successfully');
      }, (error) => {
        console.log('FAILED...', error);
        setStatus('Error sending email');
      });
  };

  return (
    <>
      <div className='bg-black h-20'></div>
      <div className="flex flex-col items-center min-h-screen p-6 pt-8 bg-black text-white">
      <h2 className="text-2xl font-bold text-center mb-6">We love hearing from you!</h2>
      <p className='textWrapperContent'>Whether you have questions, feedback, or just want to say hello, we’re here for you. Your thoughts and ideas are what drive us forward.
        <br/>
        Please fill out the form below, and our team will get back to you as <strong>soon</strong> as possible:</p>


        <div className="w-full max-w-md bg-gray-800 p-8  shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border text-black border-gray-700 rounded"
              onChange={handleChange}
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border text-black border-gray-700 rounded"
              onChange={handleChange}
            />
            <textarea
              id="message"
              name="message"
              placeholder="What's on your mind?"
              rows="5"
              required
              className="w-full p-3 border text-black border-gray-700 rounded"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full p-3 bg-blue-700 text-white rounded hover:bg-blue-800"
            >
              Shoot..! 
            </button>
          </form>
          {status && <p className="text-center mt-4">{status}</p>}
        </div>
      </div>
    </>
  );
};

export default Contact;
