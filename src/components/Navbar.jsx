import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Basti_Logo from '../assets/Basti_Logo.png';
import facebook from '../assets/icon/facebook.svg';
import instagram from '../assets/icon/instagram.svg';
import linkedin from '../assets/icon/linkedin.svg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Auto-close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/AboutUs' },
    { name: 'Volunteer', path: '/VolunteerForm' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center">
            <img className="h-10 w-auto" src={Basti_Logo} alt="Basti Ki Pathshala Logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-300 ${
                    isActive ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex space-x-4 items-center">
            <img src={facebook} alt="Facebook" className="h-5 w-5 hover:scale-110 transition-transform" />
            <img src={instagram} alt="Instagram" className="h-5 w-5 hover:scale-110 transition-transform" />
            <img src={linkedin} alt="LinkedIn" className="h-5 w-5 hover:scale-110 transition-transform" />
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-3xl focus:outline-none z-50"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-white shadow-md rounded p-4 space-y-4 animate-fade-in-down">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 font-medium hover:text-green-600"
              >
                {link.name}
              </NavLink>
            ))}

            <div className="flex space-x-4 pt-2 border-t mt-4">
              <img src={facebook} alt="Facebook" className="h-5 w-5 hover:scale-110 transition-transform" />
              <img src={instagram} alt="Instagram" className="h-5 w-5 hover:scale-110 transition-transform" />
              <img src={linkedin} alt="LinkedIn" className="h-5 w-5 hover:scale-110 transition-transform" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
