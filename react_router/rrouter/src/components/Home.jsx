import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Welcome to the Home Page</h1>
        <p className="text-lg text-gray-600 mb-4">
          This is a sample home page built using React and styled with Tailwind CSS. In this project, you can navigate through various sections like "About", "Contact", and others using the links in the navigation bar above.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          The content here can be customized to suit your needs, and you can add interactive features, dynamic content, or anything you like!
        </p>

        <div className="bg-cyan-500 text-white p-4 rounded-md shadow-md mt-6">
          <h2 className="text-2xl font-semibold">Features</h2>
          <ul className="list-disc list-inside mt-4">
            <li>Navigation between different pages</li>
            <li>Responsive design using Tailwind CSS</li>
            <li>Reusable components for various sections</li>
            <li>Clean and modern UI</li>
          </ul>
        </div>

        <div className="mt-6">
          <button className="bg-cyan-600 text-white px-6 py-2 rounded-full hover:bg-cyan-700 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
