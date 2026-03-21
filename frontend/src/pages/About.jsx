import React from 'react';
import { Award, Heart, Users, Sparkles } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction and comfort are our top priorities"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering exceptional quality in every service"
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Skilled and friendly beauty experts"
    },
    {
      icon: Sparkles,
      title: "Affordable Luxury",
      description: "Premium services at budget-friendly prices"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg')`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold text-white mb-4">About Us</h1>
          <p className="text-2xl text-rose-100">Discover Our Story</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-rose-500" />
              <span className="text-rose-500 font-semibold uppercase tracking-wider">Women-Owned Business</span>
            </div>
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">Our Journey</h2>
            <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
              <p>
                Welcome to <span className="font-semibold text-neutral-900">Wow Care Family Salon</span>, 
                a proud women-owned beauty destination in the heart of Basavanagudi, Bengaluru. 
                Since our inception, we've been committed to providing exceptional beauty services 
                to families across the community.
              </p>
              <p>
                With a stellar <span className="font-semibold text-neutral-900">4.9/5 rating</span> from 
                over 91 satisfied customers, we've built our reputation on trust, quality, and 
                affordability. Our motto, <span className="italic">"Professional Care. Beautiful Results."</span>, 
                reflects our dedication to making everyone who walks through our doors feel special.
              </p>
              <p>
                What sets us apart is our unique blend of traditional expertise and modern techniques. 
                From classic haircuts to advanced laser hair removal treatments, we offer a comprehensive 
                range of services designed to meet every beauty need under one roof.
              </p>
              <p>
                Located conveniently near Tata Silk Farm on Krishna Rajendra Road, we're open daily 
                until 10 PM to serve you at your convenience. Our team of skilled professionals treats 
                each client with warmth, respect, and personalized attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-neutral-900 mb-4">Our Values</h2>
            <p className="text-xl text-neutral-600">What drives us every day</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
                >
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                      <Icon className="w-8 h-8 text-rose-500" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">{value.title}</h3>
                    <p className="text-neutral-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-neutral-900 mb-4">Our Team</h2>
            <p className="text-xl text-neutral-600">Meet the talented professionals behind your beautiful transformations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
                role: "Hair Styling Experts"
              },
              {
                image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9",
                role: "Skincare Specialists"
              },
              {
                image: "https://images.pexels.com/photos/7755512/pexels-photo-7755512.jpeg",
                role: "Beauty Professionals"
              }
            ].map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl">
                <div className="relative h-96">
                  <img 
                    src={member.image}
                    alt={member.role}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xl font-semibold">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-rose-50 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-neutral-900 mb-4">Friendly & Professional</h3>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Our team is carefully selected for their expertise, passion, and commitment to 
              making you feel comfortable and beautiful. Each member brings years of experience 
              and stays updated with the latest beauty trends and techniques to serve you better.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-neutral-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-rose-400 mb-2">4.9</div>
              <div className="text-gray-300">Star Rating</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-rose-400 mb-2">91+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-rose-400 mb-2">10+</div>
              <div className="text-gray-300">Services</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-rose-400 mb-2">100%</div>
              <div className="text-gray-300">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
