import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = ({isDark}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const service_id = import.meta.env.VITE_YOUR_SERVICE_ID;
    const template_id = import.meta.env.VITE_YOUR_TEMPLATE_ID;
    const public_id = import.meta.env.VITE_YOUR_PUBLIC_KEY;

    emailjs
      .sendForm(service_id, template_id, form.current, {
        publicKey: public_id,
      })
      .then(
        () => {
          alert('Sent');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className={`w-full ${isDark ? 'bg-slate-800' : 'bg-sky-50'} p-8 rounded-xl`}>
      <div className="space-y-6">
        <h1 className={`text-3xl font-bold ${isDark ? 'text-white-300' : 'text-black-50'}`}>
          Connect with me
        </h1>
        <p className={`mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
        Share your name and email, and I'll follow up with you.
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="space-y-2">
            <label className={`block text-sm font-medium ${isDark ? 'text-white-300' : 'text-slate-700'}`}>
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="w-full h-10 bg-white-300 text-black rounded-md px-4 outline-none focus:ring-2 focus:ring-[#22c55e] transition duration-200"
              required
            />
          </div>

          <div className="space-y-2">
            <label className={`block text-sm font-medium ${isDark ? 'text-white-300' : 'text-slate-700'}`}>
              Email
            </label>
            <input
              type="email"
              name="user_email"
              className="w-full h-10 bg-white-300 text-black rounded-md px-4 outline-none focus:ring-2 focus:ring-[#22c55e] transition duration-200"
              required
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#22c55e] hover:bg-[#1ea350] text-white py-3 rounded-md transition duration-200 font-medium"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;