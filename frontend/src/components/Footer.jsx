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
            <img 
              src="https://customer-assets.emergentagent.com/job_family-beauty-hub/artifacts/hddpbwqx_image.png"
              alt="Wow Care Family Salon Logo"
              className="h-24 w-auto object-contain mb-4"
            />
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
                <a
                  href="mailto:wowcare.co.in@gmail.com"
                  className="text-gray-300 hover:text-rose-400 transition-colors"
                >
                  wowcare.co.in@gmail.com
                </a>
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
                  href="https://www.facebook.com/share/1BqzGAGyFP/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-rose-500 p-2 rounded-full transition-colors"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/wowcare_beauty?igsh=MXY2amlqOXJoNjAybg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-rose-500 p-2 rounded-full transition-colors"
                  aria-label="Visit our Instagram page"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/919341343216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-rose-500 p-2 rounded-full transition-colors"
                  aria-label="Chat on WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
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
              <p className="text-gray-500 text-xs mt-1">
                Developed by <span className="text-rose-400 font-semibold">Praveen Chandra</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
