'use client';
import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  // 🔹 Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //  Strong validation
  const validate = () => {
    const newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Phone (Bangladesh + general)
    const phoneRegex = /^(?:\+8801|01)[3-9]\d{8}$/;
    if (!formData.phone) {
      newErrors.phone = 'Phone number required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  //  Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setSuccess('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setSuccess('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white"
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white"
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone No"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white"
          />
          {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Message */}
        <div>
          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white"
          />
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 rounded-2xl"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {/* Success */}
        {success && <p className="text-green-400 text-center">{success}</p>}
      </form>
    </div>
  );
}

export default Form;