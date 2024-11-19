import React from 'react';

const CTScanBrochure = () => {
  // List of brochure filenames or URLs
  const brochures = [
    { name: 'Philips CT Scanner', file: '/brochures/ct-6000-ict.pdf' },
    { name: 'Ingenuity Core Ct Scanner', file: '/brochures/incisive-ct-ct-scanner.pdf' },
    { name: 'Svity Scan CT 6000 ICT', file: '/brochures/ingenuity-core-ct-scanner.pdf' },
  ];

  // Function to handle brochure download
  const handleDownload = (fileUrl) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.split('/').pop(); // This gets the filename from the URL
    link.click();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className=" font-sans-bold text-center text-4xl text-gray-400 mb-5">CTScan Brochure</h2>
      <ul className="space-y-4">
        {brochures.map((brochure, index) => (
          <li key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <span className="text-lg font-medium">{brochure.name}</span>
            <button
              onClick={() => handleDownload(brochure.file)}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
            >
              Download
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CTScanBrochure;
