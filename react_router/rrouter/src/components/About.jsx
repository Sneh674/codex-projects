import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">About This Application</h1>
        
        <p className="text-lg text-gray-600 mb-4">
          This is a simple React application demonstrating the use of React Router, dynamic routing, and Tailwind CSS for styling. The application includes several pages that can be navigated through a responsive navbar.
        </p>

        <p className="text-lg text-gray-600 mb-4">
          We aim to create an intuitive, clean, and modern web app. The project features:
        </p>

        <ul className="list-disc list-inside text-gray-600 mt-4">
          <li>Simple navigation through React Router.</li>
          <li>Responsive design using Tailwind CSS.</li>
          <li>Reusable components for a scalable application.</li>
          <li>Dynamic routes for editing and deleting books.</li>
        </ul>

        <div className="bg-cyan-500 text-white p-4 rounded-md shadow-md mt-6">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-lg">
            Our mission is to provide an easy-to-use and feature-rich platform for managing your book collection.
          </p>
        </div>

        <div className="mt-6 text-center">
          <button className="bg-cyan-600 text-white px-6 py-2 rounded-full hover:bg-cyan-700 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
