import React from 'react';
import { TrendingUp, Heart, Globe, Microscope, Leaf, Shield } from 'lucide-react';

const Mission = () => {
  const pillars = [
    {
      icon: <Heart className="h-10 w-10 text-secondary" />,
      title: 'Improving Lives',
      description: 'We develop medications like Bel Vit and Oacal to enhance patient outcomes and quality of life globally.'
    },
    {
      icon: <Microscope className="h-10 w-10 text-secondary" />,
      title: 'Scientific Excellence',
      description: 'Our R&D drives innovations like Bel Nerve Tablet, adhering to rigorous scientific standards.'
    },
    {
      icon: <Shield className="h-10 w-10 text-secondary" />,
      title: 'Quality & Safety',
      description: 'From Bel Met 500 to Collarich Forte, we ensure top standards in manufacturing and distribution.'
    },
    {
      icon: <Globe className="h-10 w-10 text-secondary" />,
      title: 'Global Healthcare',
      description: 'We make products like Fertirich accessible across diverse regions through strategic partnerships.'
    },
    {
      icon: <Leaf className="h-10 w-10 text-secondary" />,
      title: 'Sustainability',
      description: 'Eco-friendly packaging for products like Bellargi L minimizes our environmental impact.'
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-secondary" />,
      title: 'Continuous Improvement',
      description: 'Feedback drives enhancements in products like Rabe Bel DSR and our processes.'
    }
  ];

  const initiatives = [
    {
      title: 'Rural Healthcare Access Program',
      description: 'Delivering Bel Vit and Oacal to rural communities via mobile clinics and strategic healthcare partnerships.',
      image: 'https://images.pexels.com/photos/3279200/pexels-photo-3279200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Healthcare Provider Education',
      description: 'Training professionals on treatments like Bel Nerve and Pregowell M for neuropathy management.',
      image: 'https://images.pexels.com/photos/7088497/pexels-photo-7088497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Environmental Sustainability Initiative',
      description: 'Using sustainable packaging for BG-D3 Nano Shot and energy-efficient production.',
      image: 'https://images.pexels.com/photos/3850243/pexels-photo-3850243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <div className="pt-16">
      {/* Mission Hero */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Mission</h1>
            <p className="text-xl text-gray-600 mb-10">
              To advance global health with innovative pharmaceuticals like Belgrand’s Bel Vit and Collarich Forte, improving patient outcomes worldwide.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-primary mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To be a trusted global leader at Belgrand Pharmaceuticals, delivering products like Oacal and Fertirich with scientific excellence and accessibility.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission Pillars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">The Pillars of Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our principles guide the development and delivery of Belgrand Pharmaceuticals’ diverse product range.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
              >
                <div className="bg-primary/10 rounded-full h-20 w-20 flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Social Responsibility */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Social Responsibility</h2>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                At Belgrand Pharmaceuticals, we prioritize society alongside our stakeholders.
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4">Affordable Medications</h3>
                  <p className="opacity-90 mb-4">
                    We offer Bel Met 500 and Heamfer XT at accessible prices through patient assistance and tiered pricing.
                  </p>
                  <p className="opacity-90">
                    Our strategic partnerships ensure affordability for all patients.
                  </p>
                </div>
                <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/4270369/pexels-photo-4270369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Patient receiving medication" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4">Ethical Research Practices</h3>
                  <p className="opacity-90 mb-4">
                    Our trials for products like Pregowell M follow transparent, ethical standards with informed consent.
                  </p>
                  <p className="opacity-90">
                    We comply with global guidelines to ensure dignity in all research activities.
                  </p>
                </div>
                <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/8460250/pexels-photo-8460250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Ethical laboratory research" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4">Community Engagement</h3>
                  <p className="opacity-90 mb-4">
                    We educate communities on bone health with Oacal and neuropathy with Bel Nerve through campaigns.
                  </p>
                  <p className="opacity-90">
                    Our partnerships strengthen local healthcare with free screenings and workshops.
                  </p>
                </div>
                <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Community health workshop" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Initiatives */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Key Initiatives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Belgrand Pharmaceuticals implements our mission through programs that deliver real impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={initiative.image} 
                    alt={initiative.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-gray-50">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{initiative.title}</h3>
                  <p className="text-gray-600">{initiative.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Get Involved */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Join Us in Our Mission</h2>
            <p className="text-lg text-gray-600 mb-10">
              Support Belgrand Pharmaceuticals’ mission to deliver products like Bel Vit and Fertirich to those in need.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Partner With Us</h3>
                <p className="text-gray-600 mb-6">
                  Collaborate with Belgrand Pharmaceuticals to distribute products like Rabe Bel DSR or support our rural health programs.
                </p>
                <a href="/contact" className="btn btn-primary">Contact Us</a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Join Our Team</h3>
                <p className="text-gray-600 mb-6">
                  Help Belgrand Pharmaceuticals innovate products like Collarich Forte and improve global healthcare.
                </p>
                <a href="/careers" className="btn btn-primary">View Careers</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;