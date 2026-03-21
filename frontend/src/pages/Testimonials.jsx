import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const Testimonials = () => {
  const [expandedReview, setExpandedReview] = useState(null);

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      date: "2 weeks ago",
      service: "Laser Hair Removal",
      text: "Excellent laser treatment results at affordable price. The staff was very professional and made me feel comfortable throughout the procedure. I've seen amazing results after just a few sessions. Highly recommend Wow Care!",
      avatar: "PS"
    },
    {
      name: "Anjali Reddy",
      rating: 5,
      date: "1 month ago",
      service: "Monthly Package",
      text: "Friendly professionals and budget-friendly services. Best salon in Basavanagudi! I've been coming here for over a year now and the quality is always consistent. The team treats everyone like family.",
      avatar: "AR"
    },
    {
      name: "Meera Kumar",
      rating: 5,
      date: "3 weeks ago",
      service: "Haircut & Styling",
      text: "Amazing haircut experience and great team. Will definitely come back! The stylist listened to exactly what I wanted and delivered perfectly. The salon is clean and has a great ambiance.",
      avatar: "MK"
    },
    {
      name: "Deepa Iyer",
      rating: 5,
      date: "1 week ago",
      service: "Bridal Makeup",
      text: "I got my bridal makeup done here and I looked absolutely stunning! The makeup artist was so patient and skilled. All my wedding photos came out beautifully. Thank you Wow Care team!",
      avatar: "DI"
    },
    {
      name: "Sunita Rao",
      rating: 5,
      date: "2 months ago",
      service: "Facial",
      text: "The facial treatments here are top-notch. My skin has never looked better! The products they use are of premium quality and the therapist was very knowledgeable about skincare.",
      avatar: "SR"
    },
    {
      name: "Kavya Nair",
      rating: 5,
      date: "3 weeks ago",
      service: "Hair Coloring",
      text: "Got my hair colored and I absolutely love it! The color came out exactly as I wanted. The stylist gave great advice on maintenance too. Very happy with the service.",
      avatar: "KN"
    },
    {
      name: "Lakshmi Venkat",
      rating: 5,
      date: "1 month ago",
      service: "General Visit",
      text: "Women-owned and women-friendly! The entire team is so welcoming and professional. Prices are very reasonable compared to other salons in the area. My go-to place for all beauty needs.",
      avatar: "LV"
    },
    {
      name: "Divya Prasad",
      rating: 5,
      date: "2 weeks ago",
      service: "Hair Treatment",
      text: "The hair spa treatment was so relaxing and effective. My hair feels so soft and manageable now. The salon has a peaceful atmosphere and the staff is very attentive.",
      avatar: "DP"
    },
    {
      name: "Rekha Srinivas",
      rating: 4,
      date: "1 month ago",
      service: "Pedicure",
      text: "Great pedicure service! Very hygienic and thorough. The only reason I'm giving 4 stars instead of 5 is that sometimes there's a wait during weekends, but it's worth it!",
      avatar: "RS"
    },
    {
      name: "Pooja Malhotra",
      rating: 5,
      date: "3 days ago",
      service: "Party Makeup",
      text: "Did my party makeup and received so many compliments! The makeup stayed perfect all evening. Will definitely book again for my next event. Highly professional service!",
      avatar: "PM"
    },
    {
      name: "Shreya Agarwal",
      rating: 5,
      date: "1 week ago",
      service: "Haircut",
      text: "Best haircut I've had in years! The stylist really understood what would suit my face shape. Also, the prices are very reasonable. This is now my regular salon!",
      avatar: "SA"
    },
    {
      name: "Nandini Bhat",
      rating: 5,
      date: "2 months ago",
      service: "Laser Treatment",
      text: "The laser hair removal service is excellent and affordable. I was nervous at first but the technician explained everything clearly and was very gentle. Seeing great results!",
      avatar: "NB"
    }
  ];

  const averageRating = (testimonials.reduce((acc, curr) => acc + curr.rating, 0) / testimonials.length).toFixed(1);
  const ratingDistribution = {
    5: testimonials.filter(t => t.rating === 5).length,
    4: testimonials.filter(t => t.rating === 4).length,
    3: testimonials.filter(t => t.rating === 3).length,
    2: testimonials.filter(t => t.rating === 2).length,
    1: testimonials.filter(t => t.rating === 1).length
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1579047917338-a6a69144fe63')`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold text-white mb-4">Customer Reviews</h1>
          <p className="text-2xl text-rose-100">See what our happy customers say</p>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="border-none shadow-2xl bg-white">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Overall Rating */}
                <div className="text-center md:text-left">
                  <div className="text-7xl font-bold text-neutral-900 mb-4">{averageRating}</div>
                  <div className="flex gap-1 justify-center md:justify-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xl text-neutral-600">Based on {testimonials.length} reviews</p>
                  <p className="text-lg text-neutral-500 mt-2">Verified Customer Reviews</p>
                </div>

                {/* Rating Distribution */}
                <div className="space-y-3">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center gap-4">
                      <span className="text-sm font-semibold text-neutral-700 w-8">{rating} ★</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-yellow-400 h-full rounded-full transition-all duration-500"
                          style={{ width: `${(ratingDistribution[rating] / testimonials.length) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-neutral-600 w-12">{ratingDistribution[rating]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-neutral-900 text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-neutral-500">{testimonial.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="mb-3">
                    <span className="inline-block bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {testimonial.service}
                    </span>
                  </div>
                  
                  <p className="text-neutral-700 leading-relaxed">
                    {expandedReview === index || testimonial.text.length < 150
                      ? testimonial.text
                      : `${testimonial.text.substring(0, 150)}...`}
                  </p>
                  
                  {testimonial.text.length > 150 && (
                    <button
                      onClick={() => setExpandedReview(expandedReview === index ? null : index)}
                      className="text-rose-600 font-semibold mt-2 hover:text-rose-700 transition-colors"
                    >
                      {expandedReview === index ? 'Show less' : 'Read more'}
                    </button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-neutral-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Happy Customers</h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the Wow Care difference and see why we're rated 4.9/5
          </p>
          <a href="/contact">
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-transform hover:scale-105">
              Book Your Appointment
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
