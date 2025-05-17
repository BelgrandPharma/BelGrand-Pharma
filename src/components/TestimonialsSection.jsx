import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Belgrand Pharmaceuticals has been an invaluable partner to our hospital. Their products, like Bel Vit and Oacal, consistently meet the highest standards of quality and effectiveness.",
    name: "Dr. Anjali Sharma",
    title: "Chief of Medicine, City General Hospital",
    image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    quote: "We've been distributing Belgrand's products, such as Bel Nerve and Rabe Bel DSR, for over 5 years, and their commitment to innovation and quality has never wavered. A truly reliable pharmaceutical partner.",
    name: "Rajesh Patel",
    title: "CEO, Pharmaceutical Distributor",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    quote: "The research collaboration with Belgrand Pharmaceuticals on products like Bel Met 500 has been transformative for our institute. Their scientific rigor and dedication to advancing healthcare is commendable.",
    name: "Dr. Priya Malhotra",
    title: "Research Director, National Medical Institute",
    image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Partners Say About Belgrand Pharmaceuticals</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Belgrand Pharmaceuticals prides itself on building strong, lasting relationships with healthcare providers, distributors, and research institutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-50 rounded-xl p-8 md:p-12 shadow-md">
            <div className="absolute top-6 left-6 md:top-8 md:left-8">
              <Quote size={48} className="text-primary/20" />
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].title}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={prev} 
                className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="text-gray-700" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentIndex === index ? 'bg-primary' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={next} 
                className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;