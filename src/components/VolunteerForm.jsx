import { useState } from 'react';

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // API submission logic goes here
  };

  return (
    <div className="bg-gray-50 py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Info Section */}
        <div>
          <h1 className="text-4xl font-bold text-green-700 mb-4">Be the Change</h1>
          <p className="text-gray-700 text-lg mb-4">
            Basti Ki Pathshala believes sustainable change comes from **active community involvement**. Our volunteers are the backbone of our mission — spreading awareness, love, and learning.
          </p>
          <p className="text-gray-600 mb-4">
            Whether you’re a student, professional, homemaker, or retiree — **your time and skills can make a huge difference.** Join us in empowering children and reshaping futures.
          </p>
          <ul className="list-disc ml-6 text-gray-600 space-y-1">
            <li>Teach or assist in classes</li>
            <li>Help with events and workshops</li>
            <li>Spread awareness online or in your community</li>
            <li>Support with creative content, logistics, or fundraising</li>
          </ul>
        </div>

        {/* Volunteer Form */}
        <div className="bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Volunteer With Us</h2>
          
          {submitted ? (
            <div className="text-center text-green-600 font-medium">
              🎉 Thank you for your interest! We’ll be in touch shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <textarea
                name="message"
                placeholder="Why do you want to volunteer?"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 font-semibold rounded-md hover:bg-green-700 transition duration-300"
              >
                🚀 Submit Application
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
