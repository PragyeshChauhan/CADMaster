import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] pt-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-slideDown">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let's discuss your CAD design needs. Our team is ready to help bring
            your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fadeIn">
          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-lg rounded-xl shadow-xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg px-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg px-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg px-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
                  placeholder="Project Discussion"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg px-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '+1 (555) 123-4567',
                  subContent: 'Mon-Fri 9am-6pm',
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'contact@cadmaster.com',
                  subContent: '24/7 Support',
                },
                {
                  icon: MapPin,
                  title: 'Office',
                  content: '123 Design Street',
                  subContent: 'New York, NY 10001',
                },
                {
                  icon: Clock,
                  title: 'Working Hours',
                  content: 'Monday - Friday',
                  subContent: '9:00 AM - 6:00 PM',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800/50 backdrop-blur-lg p-6 rounded-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-blue-600 dark:text-blue-400 mb-4">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.content}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {item.subContent}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Additional Information */}
            <div className="bg-white dark:bg-slate-800/50 backdrop-blur-lg p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <span>Expert CAD designers with 10+ years experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <span>Quick turnaround time for all projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <span>Competitive pricing with no hidden fees</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <span>24/7 customer support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
