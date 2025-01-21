import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Sliders} from 'lucide-react';
const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  // Sample list of services (replace with dynamic data or API calls)
  const detailedServices = [
    {
      id: '1',
      title: '2D CAD Drafting',
      description: 'In-depth details about 2D CAD Drafting services...',
      moreInfo: 'Additional info for 2D CAD Drafting...',
    },
    {
      id: '2',
      title: '3D Modeling',
      description: 'Details about 3D Modeling services...',
      moreInfo: 'Additional info for 3D Modeling...',
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
    <div className="min-h-screen grid place-items-center">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h2>
        <p className="mt-6 dark:text-gray-100">{service.description}</p>
        <p className="mt-6 text-gray-600 dark:text-gray-300">{service.moreInfo}</p>
        
        {/* Back to Services button */}
        <button 
          onClick={handleBackClick} 
          className="mt-10 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
           More Services
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
