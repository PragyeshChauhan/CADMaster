import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, Phone, Info, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', text: 'Home', icon: Home },
    { path: '/services', text: 'Services', icon: Briefcase },
    { path: '/about', text: 'About', icon: Info },
    { path: '/contact', text: 'Contact', icon: Phone },
  ];

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-lg dark:shadow-slate-800/50 fixed w-full z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              <span className="text-blue-600">CAD</span>Master
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `inline-flex items-center px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out
                    ${
                      isActive
                        ? 'text-blue-600 scale-110 transform'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.text}
                </NavLink>
              );
            })}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-slate-900 shadow-lg dark:shadow-slate-800/50">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-blue-600 bg-gray-100 dark:bg-slate-800'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-800'
                  }`
                }
              >
                <div className="flex items-center">
                  <Icon className="w-4 h-4 mr-2" />
                  {item.text}
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;