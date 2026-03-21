import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Phone, MapPin, Clock, Award, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const services = [
    {
      title: "Haircuts & Styling",
      description: "Expert cuts and styling for the whole family",
      image: "https://images.unsplash.com/photo-1560869713-7d0a29430803"
    },
    {
      title: "Hair Coloring",
      description: "Professional coloring with premium products",
      image: "https://images.pexels.com/photos/7440054/pexels-photo-7440054.jpeg"
    },
    {
      title: "Facials & Skin Care",
      description: "Rejuvenating treatments for glowing skin",
      image: "https://images.unsplash.com/photo-1643684391140-c5056cfd3436"
    },
    {
      title: "Laser Hair Removal",
      description: "Advanced laser treatments at affordable prices",
      image: "https://images.pexels.com/photos/4586726/pexels-photo-4586726.jpeg"
    },
    {
      title: "Bridal & Party Makeup",
      description: "Look stunning on your special occasions",
      image: "https://images.pexels.com/photos/34362514/pexels-photo-34362514.jpeg"
    },
    {
      title: "Budget Packages",
      description: "Affordable beauty solutions for everyone",
      image: "https://images.pexels.com/photos/5659012/pexels-photo-5659012.jpeg"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Excellent laser treatment results at affordable price. Highly recommend!"
    },
    {
      name: "Anjali Reddy",
      rating: 5,
      text: "Friendly professionals and budget-friendly services. Best salon in Basavanagudi."
    },
    {
      name: "Meera Kumar",
      rating: 5,
      text: "Amazing haircut experience and great team. Will definitely come back!"
    }
  ];

  const handleBooking = () => {
    window.location.href = '/contact';
  };

  const handleCall = () => {
    window.location.href = 'tel:+919341343216';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919341343216', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3993308/pexels-photo-3993308.jpeg')`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-rose-300 mr-2" />
            <span className="text-rose-200 font-medium uppercase tracking-wider text-sm">Women-Owned Business</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Wow Care<br />Family Salon
          </h1>
          <p className="text-2xl text-rose-100 mb-4 font-light">Professional Care. Beautiful Results.</p>
          <div className="flex items-center justify-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-white font-semibold ml-2">4.9 / 5</span>
            <span className="text-rose-200">(91 reviews)</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              onClick={handleBooking}
              size="lg"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg transition-transform hover:scale-105"
            >
              Book Appointment
            </Button>
            <Button 
              onClick={handleCall}
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 px-8 py-6 text-lg transition-transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-neutral-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-6 h-6 text-rose-400" />
              <div>
                <p className="font-semibold">Open Daily</p>
                <p className="text-sm text-gray-300">Closes at 10 PM</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6 text-rose-400" />
              <div>
                <p className="font-semibold">Basavanagudi, Bengaluru</p>
                <p className="text-sm text-gray-300">Near Tata Silk Farm</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Award className="w-6 h-6 text-rose-400" />
              <div>
                <p className="font-semibold">4.9 Star Rated</p>
                <p className="text-sm text-gray-300">91+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-neutral-900 mb-4">Our Services</h2>
            <p className="text-xl text-neutral-600">Comprehensive beauty solutions for the entire family</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{service.title}</h3>
                  <p className="text-neutral-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button 
                size="lg"
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-6 text-lg transition-transform hover:scale-105"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-neutral-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-neutral-600">Real experiences from real people</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-neutral-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-neutral-900">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white px-8 py-6 text-lg transition-all"
              >
                Read More Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-neutral-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Look?</h2>
          <p className="text-xl text-gray-300 mb-8">Book your appointment today and experience the Wow Care difference</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              onClick={handleBooking}
              size="lg"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg transition-transform hover:scale-105"
            >
              Book Appointment
            </Button>
            <Button 
              onClick={handleWhatsApp}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-neutral-900 px-8 py-6 text-lg transition-all"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </button>
    </div>
  );
};

export default Home;
