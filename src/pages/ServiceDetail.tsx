import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import cadImage from '../Images/bike.png';
import dcadImage from '../Images/2dcad.png';


const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  // Sample list of services (replace with dynamic data or API calls)
  const detailedServices = [
    {
      id: '1',
      title: '2D CAD Drafting',
      description: 'In-depth details about 2D CAD Drafting services can be edited or custom contains ',
      moreInfo: 'Additional info for 2D CAD Drafting...',
      imageUrl: cadImage, // Add an image URL for the service
    },
    {
      id: '2',
      title: '3D Modeling',
      description: 'Details about 3D Modeling services...',
      moreInfo: 'Additional info for 3D Modeling...',
      imageUrl: dcadImage, // Add an image URL for the service
    },
    // Add more services as necessary...
  ];

  // Find the service based on the serviceId
  const service = detailedServices.find((s) => s.id === serviceId);

  if (!service) {
    return <div>Service not found.</div>;
  }

  // Handle back navigation
  const handleBackClick = () => {
    navigate('/services');
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-12 container mx-auto px-4 py-16">
      {/* Left Section (Text and Details) */}
      <div className="flex flex-col">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-10 pt-9 sm:pt-8 md:pt-10 text-center mx-auto md:text-left">
      {service.title}
     </h2>
     
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 text-center">{service.description}</p>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">{service.moreInfo}</p>
      </div>

      {/* Right Section (Image) */}
      <div className="flex justify-center items-start pt-10"> {/* Flexbox centering with padding */}
        <img
          src={service.imageUrl}
          alt={service.title}
          className="rounded-lg shadow-lg max-w-full h-auto transition-transform transform hover:scale-105 duration-300 mt-10"
        />
      </div>
      {/* Back to Services button */}
      <button
          onClick={handleBackClick}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          More Services
        </button>
    </div>
  );
};

export default ServiceDetail;
