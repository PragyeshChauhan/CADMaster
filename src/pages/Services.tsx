import React from 'react';
import { Link } from 'react-router-dom';
import { Ruler, Cuboid as Cube, Building, Compass, Layers, Pencil, FileCheck, Workflow } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: '1',
      icon: Ruler,
      title: '2D CAD Drafting',
      description: 'Professional 2D drawings with precise measurements and detailed annotations.',
    },
    {
      id: '2',
      icon: Cube,
      title: '3D Modeling',
      description: 'Photorealistic 3D models for visualization and manufacturing.',
    },
    {
      id: '3',
      icon: Building,
      title: 'Architectural Design',
      description: 'Complete architectural plans and elevation drawings.',
    },
    {
      id: '4',
      icon: Compass,
      title: 'Mechanical Design',
      description: 'Detailed mechanical parts and assembly drawings.',
    },
    {
      id: '5',
      icon: Layers,
      title: 'BIM Services',
      description: 'Building Information Modeling for construction projects.',
    },
    {
      id: '6',
      icon: Pencil,
      title: 'Custom Design',
      description: 'Tailored design solutions for unique project requirements.',
    },
    {
      id: '7',
      icon: FileCheck,
      title: 'Documentation',
      description: 'Comprehensive technical documentation and specifications.',
    },
    {
      id: '8',
      icon: Workflow,
      title: 'Workflow Optimization',
      description: 'CAD process automation and workflow improvements.',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] pt-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-slideDown">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive CAD design solutions tailored to your specific needs.
            From concept to completion, we ensure precision and excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeIn">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id} // Use the service.id for the key
                className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 dark:hover:bg-slate-700"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  <Icon size={40} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  <Link to={`/services/${service.id}`}>{service.title}</Link> {/* Link to the detail page */}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
