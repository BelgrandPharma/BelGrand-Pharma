import React from 'react';
import { Award, Shield, TestTube, Microscope, HeartPulse, Globe } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-8 w-8 text-secondary" />,
    title: 'Uncompromising Quality',
    description: 'Our tablets and medications undergo stringent quality checks to ensure safety, efficacy, and reliability for patients worldwide.'
  },
  {
    icon: <TestTube className="h-8 w-8 text-secondary" />,
    title: 'Innovative Formulations',
    description: 'We invest in cutting-edge research to develop advanced tablet formulations that address diverse healthcare needs.'
  },
  {
    icon: <Award className="h-8 w-8 text-secondary" />,
    title: 'Trusted Certifications',
    description: 'Our manufacturing adheres to global regulatory standards, earning certifications from leading health authorities.'
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-secondary" />,
    title: 'Patient Accessibility',
    description: 'We prioritize affordability and availability, ensuring our medications reach patients in need across the globe.'
  },
  {
    icon: <Microscope className="h-8 w-8 text-secondary" />,
    title: 'Marketing Excellence',
    description: 'Our strategic marketing ensures healthcare providers and patients are informed about our life-changing pharmaceutical solutions.'
  },
  {
    icon: <Globe className="h-8 w-8 text-secondary" />,
    title: 'Global Supply Chain',
    description: 'With a robust distribution network, we deliver high-quality pharmaceuticals to markets across multiple continents.'
  }
];

const FeatureSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Belgrand Pharmaceuticals Stands Out
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Belgrand Pharmaceuticals leads the way in pharmaceutical innovation, delivering high-quality tablets and medications, such as Bel Vit, Oacal, and Bel Nerve Tablet, through expertise, accessibility, and global outreach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
            >
              <div className="bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;