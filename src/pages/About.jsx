import React, { useEffect } from 'react';
import { ShieldCheck, Award, Microscope, Globe, Users, Clock } from 'lucide-react';

const About = () => {
  useEffect(() => {
    console.log('About component rendered');
  }, []);

  const stats = [
    { label: 'Years of Excellence', value: '4+' },
    { label: 'Countries Served', value: '2+' },
    { label: 'Patents Held', value: '10000+' },
    // { label: 'Clinical Trials', value: '300+' },
  ];

  const values = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-secondary" />,
      title: 'Quality Assurance',
      description: 'We adhere to the highest standards in pharmaceutical manufacturing to ensure product safety.',
    },
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: 'Ethical Integrity',
      description: 'Our operations are guided by unwavering ethical principles and transparency.',
    },
    {
      icon: <Microscope className="h-8 w-8 text-secondary" />,
      title: 'Medical Innovation',
      description: 'We drive advancements in healthcare through rigorous research and development.',
    },
    {
      icon: <Globe className="h-8 w-8 text-secondary" />,
      title: 'Global Impact',
      description: 'We address diverse healthcare needs to improve health outcomes.',
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: 'Patient-First Approach',
      description: 'Every decision prioritizes the well-being and needs of patients.',
    },
    {
      icon: <Clock className="h-8 w-8 text-secondary" />,
      title: 'Long-Term Commitment',
      description: 'We focus on sustainable solutions to meet current and future healthcare challenges.',
    },
  ];

  const teamMembers = [
    {
      name: 'Ranjith Kumar Rupureddy',
      position: 'Director',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Ranjith Kumar Rupureddy leads Belgrand Pharmaceuticals with a vision to deliver high-quality chemical products.',
    },
    {
      name: 'Sravanthi Rupureddy',
      position: 'Director',
      image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Sravanthi Rupureddy oversees strategic initiatives, ensuring operational excellence and compliance.',
    },
  ];

  const handleLearnMore = () => {
    console.log('Learn More button clicked');
    // Add navigation or action here if needed
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About Belgrand Pharmaceuticals
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2021, Belgrand Pharmaceuticals Private Limited is a Hyderabad-based company dedicated to manufacturing high-quality chemical products for healthcare.
              </p>
              <p className="text-lg text-gray-600">
                Registered with the Registrar of Companies, Hyderabad, we operate with a commitment to innovation, safety, and accessibility. Our mission is to address critical medical needs through excellence in pharmaceutical manufacturing.
              </p>
              <button
                className="mt-6 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition"
                onClick={handleLearnMore}
              >
                Learn More
              </button>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/src/images/BelGrand Pharma LOGO.png"
                  alt="Modern pharmaceutical laboratory"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary flex justify-center">
        <div className="container mx-auto px-4">
          <div className="grid-cols-2 md:grid-cols-3 gap-8 flex justify-evenly">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-sm md:text-base text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Belgrand Pharmaceuticals, these values shape our commitment to healthcare excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
              >
                <div className="bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team (Commented Out) */}
      {/*
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the directors driving Belgrand Pharmaceuticals’ mission to advance healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* History Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From our founding to becoming a trusted name in pharmaceutical manufacturing.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-primary pl-10 pb-6">
              <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-secondary"></div>
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">2021: Founded</h3>
                <p className="text-gray-600">
                  Belgrand Pharmaceuticals Private Limited was incorporated on January 30, 2021, in Hyderabad by Ranjith Kumar Rupureddy and Sravanthi Rupureddy.
                </p>
              </div>
            </div>

            <div className="relative border-l-4 border-primary pl-10 pb-6">
              <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-secondary"></div>
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">2022: Operations Begin</h3>
                <p className="text-gray-600">
                  Established manufacturing operations at SP Nagar, Hyderabad, focusing on high-quality chemical products.
                </p>
              </div>
            </div>

            <div className="relative border-l-4 border-primary pl-10 pb-6">
              <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-secondary"></div>
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">2023: Financial Reporting</h3>
                <p className="text-gray-600">
                  Filed first balance sheet on March 31, 2023, and held Annual General Meeting on December 30, 2023, marking operational stability.
                </p>
              </div>
            </div>

            <div className="relative border-l-4 border-primary pl-10 pb-6">
              <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-secondary"></div>
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">2024: Continued Growth</h3>
                <p className="text-gray-600">
                  Strengthened manufacturing capabilities, maintaining active status as of June 2024, with a focus on quality and innovation.
                </p>
              </div>
            </div>

            <div className="relative pl-10">
              <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-secondary"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Today: Growing Presence</h3>
                <p className="text-gray-600">
                  Belgrand Pharmaceuticals continues to expand its manufacturing capabilities, delivering innovative chemical products for healthcare needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;