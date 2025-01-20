import React from 'react';
import { ArrowRight, Ruler, Cuboid as Cube, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
        }}
      />
      <div className="relative z-10 min-h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="animate-fadeIn">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 animate-slideDown">
              Professional
              <span className="text-blue-400"> CAD Design </span>
              Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl animate-slideUp">
              Transform your ideas into precise technical drawings with our expert CAD design services.
              We specialize in bringing architectural and engineering visions to life.
            </p>
            <div className="flex flex-wrap gap-6 mb-16 animate-fadeIn">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slideUp">
            {[
              {
                icon: Ruler,
                title: '2D CAD Drafting',
                description: 'Precise technical drawings and layouts',
              },
              {
                icon: Cube,
                title: '3D Modeling',
                description: 'Detailed 3D models and visualizations',
              },
              {
                icon: Building,
                title: 'Architectural Design',
                description: 'Complete architectural documentation',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <Icon className="h-8 w-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;