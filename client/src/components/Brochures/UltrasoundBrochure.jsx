import React from 'react';

const UltraSoundBrochure = () => {
  // List of brochure filenames or URLs
  const brochures = [
    { name: 'ClearVue 350 Ultrasound System', file: '/brochures/clearvue-350-ultrasound-machine.pdf' },
    { name: 'ClearVue 550 Ultrasound System', file: '/brochures/clearvue-550-ultrasound-system.pdf' },
    { name: 'ClearVue 650 Ultrasound System', file: '/brochures/clearvue-650-ultrasound-system.pdf' },
    { name: 'ClearVue 850 Ultrasound System', file: '/brochures/clearvue-850-ultrasound-machine.pdf' },
    { name: 'Affinity 30', file: '/brochures/affiniti-30-ultrasound-system.pdf' },
    { name: 'Affinity 50', file: '/brochures/affinity-50.pdf' },
    { name: 'Affinity 70', file: '/brochures/Affinity70.pdf' },
    { name: 'EPIQ CVXI Ultrasound Machine', file: '/brochures/epiq-cvxi-ultrasound-machine.pdf' },
    { name: 'EPIQ Elite', file: '/brochures/Philips EPIQ Elite.pdf' },
    { name: 'EPIQ CVX Ultrasound', file: '/brochures/epiq-cvx-ultrasound.pdf' },
    { name: 'PHILIPS PALM SIZE ULTRASOUND ON YOUR ANDROID DEVICE LUMIFY', file: '/brochures/philips-palm-size-ultrasound-on-your-android-device-lumify.pdf' },
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
      <h2 className=" font-sans-bold text-center text-4xl text-gray-400 mb-5">UltraSound Brochures</h2>
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

export default UltraSoundBrochure;
