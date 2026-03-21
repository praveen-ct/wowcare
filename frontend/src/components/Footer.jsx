import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ];

  const popularServices = [
    'Haircut & Styling',
    'Laser Hair Removal',
    'Bridal Makeup',
    'Facials',
    'Hair Coloring',
    'Special Packages'
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-rose-400">Wow Care Family Salon</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Women-owned beauty salon in Basavanagudi, Bengaluru. Providing professional care and beautiful results since years.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <span className="font-semibold">4.9 / 5</span>
            </div>
            <p className="text-sm text-gray-400">Based on 91+ reviews</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-rose-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-rose-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-rose-400">Popular Services</h3>
            <ul className="space-y-3">
              {popularServices.map((service, index) => (
                <li key={index} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-rose-400">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">
                  No 47/1/23, 2nd Main Road, Krishna Rajendra Road, Basavanagudi, Bengaluru - 560004
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a
                  href="tel:+919341343216"
                  className="text-gray-300 hover:text-rose-400 transition-colors"
                >
                  +91 93413 43216
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <span className="text-gray-300">wowcare.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <span className="text-gray-300">Open Daily • Closes at 10 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Follow Us:</span>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-rose-500 p-2 rounded-full transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-rose-500 p-2 rounded-full transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-rose-500 p-2 rounded-full transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Wow Care Family Salon. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Proudly Women-Owned Business
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
