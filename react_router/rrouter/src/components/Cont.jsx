import React from 'react';

const Cont = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Contact Us</h1>

        <p className="text-lg text-gray-600 mb-6">
          We would love to hear from you! If you have any questions, feedback, or need assistance, feel free to reach out using the form below.
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="john.doe@example.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              rows="5"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>

          <div className="text-center">
            <button 
              type="submit" 
              className="bg-cyan-600 text-white px-6 py-3 rounded-full hover:bg-cyan-700 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Office</h2>
          <p className="text-lg text-gray-600">
            Feel free to visit us at our office or reach out via the contact form above.
          </p>
          <div className="mt-4 text-lg text-gray-600">
            <p>📍 1234 Main St, Suite 100, City, State 12345</p>
            <p>📞 Phone: (xxx) xxx-xxxx</p>
            <p>✉️ Email: contact@ourcompany.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cont;
