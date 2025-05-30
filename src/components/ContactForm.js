import React, { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      message: ''
    };

    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(form);
      // Reset form after submission
      setForm({
        name: '',
        message: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
        <input 
          id="name" 
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text" 
          className="w-full px-3 py-2 border border-[#e3e3e0] rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-[#3E3E3A] dark:bg-[#1C1C1A] dark:focus:ring-emerald-600"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
        <textarea 
          id="message" 
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="5" 
          className="w-full px-3 py-2 border border-[#e3e3e0] rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-[#3E3E3A] dark:bg-[#1C1C1A] dark:focus:ring-emerald-600"
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>
      
      <button 
        type="submit" 
        className="w-full py-2 px-4 bg-emerald-600 text-white justify-center rounded-md hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors shadow-sm"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm; 