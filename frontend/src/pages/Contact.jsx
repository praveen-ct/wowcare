import React, { useState } from 'react';
import { Phone, MapPin, Clock, Mail, Send } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.phone) {
      toast.error('Please fill in your name and phone number');
      return;
    }

    // Success message
    toast.success('Appointment request received! We will call you shortly to confirm.');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
  };

  const handleCall = () => {
    window.location.href = 'tel:+919341343216';
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi! I would like to book an appointment at Wow Care Family Salon.');
    window.open(`https://wa.me/919341343216?text=${message}`, '_blank');
  };

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
          <h1 className="text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-2xl text-rose-100">Get in touch to book your appointment</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                  <Phone className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Call Us</h3>
                <a 
                  href="tel:+919341343216"
                  className="text-lg text-rose-600 hover:text-rose-700 font-semibold"
                >
                  +91 93413 43216
                </a>
                <p className="text-neutral-600 mt-2">Available Daily</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                  <Clock className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Working Hours</h3>
                <p className="text-lg text-neutral-700 font-semibold">Open Daily</p>
                <p className="text-neutral-600 mt-2">Closes at 10:00 PM</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Visit Us</h3>
                <p className="text-neutral-700">Basavanagudi</p>
                <p className="text-neutral-600 mt-2">Bengaluru, Karnataka</p>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <Card className="border-none shadow-2xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Book Your Appointment</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Email (Optional)
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Select Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    >
                      <option value="">Choose a service</option>
                      <option value="haircut">Haircut & Styling</option>
                      <option value="coloring">Hair Coloring</option>
                      <option value="facial">Facial & Skin Care</option>
                      <option value="laser">Laser Hair Removal</option>
                      <option value="bridal">Bridal Makeup</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Preferred Date
                      </label>
                      <Input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Preferred Time
                      </label>
                      <Input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Additional Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any special requests or questions?"
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-rose-500 hover:bg-rose-600 text-white py-6 text-lg font-semibold transition-transform hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Request Appointment
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-center text-neutral-600 mb-4">Or reach us directly</p>
                  <div className="flex gap-4">
                    <Button
                      onClick={handleCall}
                      variant="outline"
                      className="flex-1 border-2 border-rose-500 text-rose-500 hover:bg-rose-50 py-6"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                    <Button
                      onClick={handleWhatsApp}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white py-6"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map & Address */}
            <div className="space-y-8">
              <Card className="border-none shadow-2xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">Visit Our Salon</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-neutral-900 mb-2">Address</h3>
                        <p className="text-neutral-700 leading-relaxed">
                          Maruthi Court, Bus Stand<br />
                          No 47/1/23, 2nd Main Road<br />
                          Krishna Rajendra Road<br />
                          Near Tata Silk Farm<br />
                          Basavanagudi, Bengaluru<br />
                          Karnataka - 560004
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-neutral-900 mb-2">Phone</h3>
                        <a 
                          href="tel:+919341343216"
                          className="text-rose-600 hover:text-rose-700 font-semibold"
                        >
                          +91 93413 43216
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-neutral-900 mb-2">Website</h3>
                        <p className="text-neutral-700">wowcare.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Map */}
              <Card className="border-none shadow-2xl overflow-hidden">
                <div className="h-96 w-full">
                  <iframe
                    title="Wow Care Family Salon Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6947!2d77.5745!3d12.9437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c!2sBasavanagudi%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
