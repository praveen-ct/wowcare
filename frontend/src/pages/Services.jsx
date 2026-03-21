import React from 'react';
import { Scissors, Palette, Sparkles, Zap, Crown, Package } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const serviceCategories = [
    {
      icon: Scissors,
      title: "Haircuts & Styling",
      image: "https://images.unsplash.com/photo-1560869713-7d0a29430803",
      services: [
        { name: "Women's Haircut", price: "Starting from ₹300" },
        { name: "Men's Haircut", price: "Starting from ₹150" },
        { name: "Kids Haircut", price: "Starting from ₹100" },
        { name: "Hair Styling", price: "Starting from ₹250" },
        { name: "Blow Dry", price: "Starting from ₹200" }
      ]
    },
    {
      icon: Palette,
      title: "Hair Coloring",
      image: "https://images.pexels.com/photos/7440054/pexels-photo-7440054.jpeg",
      services: [
        { name: "Global Hair Color", price: "Starting from ₹1500" },
        { name: "Highlights", price: "Starting from ₹2000" },
        { name: "Balayage", price: "Starting from ₹3000" },
        { name: "Root Touch-up", price: "Starting from ₹800" },
        { name: "Fashion Colors", price: "Starting from ₹2500" }
      ]
    },
    {
      icon: Sparkles,
      title: "Facials & Skin Care",
      image: "https://images.unsplash.com/photo-1643684391140-c5056cfd3436",
      services: [
        { name: "Classic Facial", price: "Starting from ₹600" },
        { name: "Gold Facial", price: "Starting from ₹1200" },
        { name: "Anti-Aging Facial", price: "Starting from ₹1500" },
        { name: "Skin Polishing", price: "Starting from ₹800" },
        { name: "De-Tan Treatment", price: "Starting from ₹500" }
      ]
    },
    {
      icon: Zap,
      title: "Laser Hair Removal",
      image: "https://images.pexels.com/photos/4586726/pexels-photo-4586726.jpeg",
      featured: true,
      services: [
        { name: "Face (Full)", price: "Starting from ₹1000" },
        { name: "Underarms", price: "Starting from ₹800" },
        { name: "Arms (Full)", price: "Starting from ₹2500" },
        { name: "Legs (Full)", price: "Starting from ₹4000" },
        { name: "Bikini Line", price: "Starting from ₹1500" }
      ]
    },
    {
      icon: Crown,
      title: "Bridal & Party Makeup",
      image: "https://images.pexels.com/photos/34362514/pexels-photo-34362514.jpeg",
      services: [
        { name: "Bridal Makeup", price: "Starting from ₹8000" },
        { name: "Engagement Makeup", price: "Starting from ₹5000" },
        { name: "Party Makeup", price: "Starting from ₹2500" },
        { name: "Pre-Bridal Package", price: "Custom Pricing" },
        { name: "Bridal Hair Styling", price: "Starting from ₹2000" }
      ]
    },
    {
      icon: Package,
      title: "Special Packages",
      image: "https://images.pexels.com/photos/5659012/pexels-photo-5659012.jpeg",
      services: [
        { name: "Monthly Beauty Package", price: "Starting from ₹2500" },
        { name: "Family Package", price: "Starting from ₹3000" },
        { name: "Spa Day Package", price: "Starting from ₹3500" },
        { name: "Student Special", price: "15% Off" },
        { name: "Weekend Combo", price: "Starting from ₹2000" }
      ]
    }
  ];

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
          <h1 className="text-6xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-2xl text-rose-100">Comprehensive beauty solutions for everyone</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index}
                  className={`overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 ${
                    category.featured ? 'ring-4 ring-rose-500' : ''
                  }`}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3">
                        <div className="bg-rose-500 p-3 rounded-full">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                      </div>
                      {category.featured && (
                        <span className="inline-block mt-2 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          ⭐ Specialty Service
                        </span>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-8 bg-white">
                    <ul className="space-y-4">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex justify-between items-center">
                          <span className="text-neutral-700 font-medium">{service.name}</span>
                          <span className="text-rose-600 font-semibold">{service.price}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Additional Services</h2>
            <p className="text-xl text-neutral-600">More ways to pamper yourself</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Waxing & Threading", desc: "Smooth, hair-free skin" },
              { title: "Manicure & Pedicure", desc: "Beautiful hands and feet" },
              { title: "Hair Treatments", desc: "Deep conditioning & spa" },
              { title: "Body Massage", desc: "Relaxation therapy" },
              { title: "Eyebrow & Lash", desc: "Shaping and tinting" },
              { title: "Henna & Mehendi", desc: "Traditional art" }
            ].map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{service.title}</h3>
                  <p className="text-neutral-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-neutral-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Service?</h2>
          <p className="text-xl text-gray-300 mb-8">
            All services are performed by trained professionals using premium products
          </p>
          <Button 
            onClick={() => navigate('/contact')}
            size="lg"
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg transition-transform hover:scale-105"
          >
            Book Appointment Now
          </Button>
          <p className="mt-6 text-gray-400">
            * Prices may vary based on hair length and treatment requirements
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
