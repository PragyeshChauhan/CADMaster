import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] pt-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-200 overflow-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Our Company
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We are a team of passionate creators, developers, and innovators
              dedicated to delivering exceptional digital solutions. With years
              of experience and a commitment to excellence, we help businesses
              transform their digital presence and achieve their goals.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-blue-600 dark:text-blue-400 mb-2">
                  <Users className="w-8 h-8 mx-auto" />
                </div>
                <div className="font-bold text-2xl text-gray-900 dark:text-white">
                  50+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Team Members
                </div>
              </div>
              <div className="text-center">
                <div className="text-blue-600 dark:text-blue-400 mb-2">
                  <Target className="w-8 h-8 mx-auto" />
                </div>
                <div className="font-bold text-2xl text-gray-900 dark:text-white">
                  200+
                </div>
                <div className="text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-blue-600 dark:text-blue-400 mb-2">
                  <Award className="w-8 h-8 mx-auto" />
                </div>
                <div className="font-bold text-2xl text-gray-900 dark:text-white">
                  15+
                </div>
                <div className="text-gray-600 dark:text-gray-400">Awards</div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Team working together"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
