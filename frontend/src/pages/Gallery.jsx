import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      url: "https://images.pexels.com/photos/3993308/pexels-photo-3993308.jpeg",
      category: "Salon Interior",
      title: "Modern Styling Area"
    },
    {
      url: "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg",
      category: "Salon Interior",
      title: "Professional Setup"
    },
    {
      url: "https://images.unsplash.com/photo-1560869713-7d0a29430803",
      category: "Hair Styling",
      title: "Expert Hair Curling"
    },
    {
      url: "https://images.pexels.com/photos/7440054/pexels-photo-7440054.jpeg",
      category: "Hair Styling",
      title: "Professional Styling"
    },
    {
      url: "https://images.pexels.com/photos/7755512/pexels-photo-7755512.jpeg",
      category: "Hair Care",
      title: "Premium Tools"
    },
    {
      url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
      category: "Hair Styling",
      title: "Blow Dry Service"
    },
    {
      url: "https://images.unsplash.com/photo-1643684391140-c5056cfd3436",
      category: "Facials",
      title: "Relaxing Facial Treatment"
    },
    {
      url: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9",
      category: "Facials",
      title: "Face Mask Application"
    },
    {
      url: "https://images.pexels.com/photos/5659012/pexels-photo-5659012.jpeg",
      category: "Spa",
      title: "Spa Treatment Setup"
    },
    {
      url: "https://images.pexels.com/photos/4586726/pexels-photo-4586726.jpeg",
      category: "Laser Treatment",
      title: "Advanced Laser Therapy"
    },
    {
      url: "https://images.pexels.com/photos/5069508/pexels-photo-5069508.jpeg",
      category: "Laser Treatment",
      title: "Professional Equipment"
    },
    {
      url: "https://images.unsplash.com/photo-1700760933941-3a06a28fbf47",
      category: "Laser Treatment",
      title: "Laser Hair Removal"
    },
    {
      url: "https://images.pexels.com/photos/34362514/pexels-photo-34362514.jpeg",
      category: "Bridal Makeup",
      title: "Bridal Beauty"
    },
    {
      url: "https://images.pexels.com/photos/11742213/pexels-photo-11742213.jpeg",
      category: "Bridal Makeup",
      title: "Wedding Makeup Service"
    },
    {
      url: "https://images.unsplash.com/photo-1579047917338-a6a69144fe63",
      category: "Happy Customers",
      title: "Satisfied Client"
    }
  ];

  const categories = ["All", ...new Set(galleryImages.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6')`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-2xl text-rose-100">See our work and beautiful transformations</p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 px-4 sticky top-0 bg-white/80 backdrop-blur-md z-40 border-b border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-rose-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-neutral-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-square"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-semibold text-rose-300 mb-1">{image.category}</p>
                    <p className="text-xl font-bold">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 text-white hover:text-rose-400 transition-colors"
          >
            <X className="w-10 h-10" />
          </button>
          <div className="max-w-6xl max-h-[90vh] flex flex-col items-center">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center text-white">
              <p className="text-rose-400 font-semibold mb-2">{selectedImage.category}</p>
              <p className="text-2xl font-bold">{selectedImage.title}</p>
            </div>
          </div>
        </div>
      )}

      {/* Instagram CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-neutral-900 mb-6">Follow Us on Instagram</h2>
          <p className="text-xl text-neutral-600 mb-8">
            See more of our work and stay updated with latest trends
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @wowcaresalon
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
