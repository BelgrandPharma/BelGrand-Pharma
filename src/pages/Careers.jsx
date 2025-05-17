import React, { useState } from 'react';
import { Briefcase as BriefcaseMedical, Users, GraduationCap, HeartHandshake, Search, MapPin } from 'lucide-react';

const jobOpenings = [
  {
    id: 4,
    title: 'Marketing Manager - Prescription Products',
    department: 'Marketing',
    location: 'Mumbai, India',
    type: 'Full-time',
    description: 'Develop and implement marketing strategies for prescription pharmaceutical products like Rabe Bel DSR and Pregowell M to healthcare professionals.',
    responsibilities: [
      'Create and execute marketing plans for Belgrand’s prescription portfolio',
      'Collaborate with sales teams to align strategies for products like Bel Met 500',
      'Develop educational materials for healthcare professionals on supplements like Bel Nerve',
      'Analyze market trends and competitive landscape for Belgrand’s offerings',
      'Track and report on marketing effectiveness metrics'
    ],
    requirements: [
      'MBA with specialization in Marketing or Pharmaceutical Management',
      'Minimum 5 years of experience in pharmaceutical marketing',
      'Understanding of regulatory requirements for marketing drugs like Defalac-6',
      'Experience with healthcare professional engagement for products like Fertirich',
      'Strong analytical and strategic thinking skills'
    ]
  },
  {
    id: 6,
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Bangalore, India',
    type: 'Full-time',
    description: 'Drive digital campaigns to promote Belgrand’s OTC and prescription products like Bel Vit and Oacal across online platforms.',
    responsibilities: [
      'Plan and execute SEO/SEM campaigns for products like Collarich Forte',
      'Manage social media presence to highlight Belgrand’s initiatives',
      'Create content for blogs and videos on health topics like bone health with Oacal',
      'Analyze digital campaign performance to optimize reach',
      'Collaborate with e-pharmacies for online product visibility'
    ],
    requirements: [
      'Bachelor’s degree in Marketing, Digital Media, or related field',
      'Minimum 3 years of experience in digital marketing, preferably in pharmaceuticals',
      'Proficiency in tools like Google Analytics, AdWords, and social media platforms',
      'Knowledge of pharmaceutical marketing regulations',
      'Creative and data-driven mindset'
    ]
  }
];

const benefits = [
  {
    icon: <BriefcaseMedical className="h-8 w-8 text-secondary" />,
    title: 'Comprehensive Healthcare',
    description: 'Extensive medical, dental, and vision coverage for employees and their families.'
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-secondary" />,
    title: 'Professional Development',
    description: 'Access to marketing certifications and training on Belgrand’s pharmaceutical trends.'
  },
  {
    icon: <Users className="h-8 w-8 text-secondary" />,
    title: 'Work-Life Balance',
    description: 'Flexible work arrangements and generous paid time off.'
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-secondary" />,
    title: 'Retirement & Financial Security',
    description: 'Competitive retirement plans with employer matching.'
  }
];

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);

  const departments = ['All', 'Marketing'];
  const locations = ['All', 'Mumbai, India', 'Bangalore, India'];
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const openJobDetails = (job) => {
    setSelectedJob(job);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeJobDetails = () => {
    setSelectedJob(null);
  };

  return (
    <div className="pt-16">
      {/* Careers Hero */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Marketing Team</h1>
            <p className="text-xl opacity-90 mb-8">
              At Belgrand Pharmaceuticals, we seek creative marketers to promote products like Bel Vit and Rabe Bel DSR, driving health innovation.
            </p>
            <a href="#job-openings" className="btn bg-white text-primary hover:bg-gray-100">
              View Marketing Openings
            </a>
          </div>
        </div>
      </section>
      
      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Join Belgrand’s Marketing Team?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Shape the future of healthcare marketing with impactful campaigns for Belgrand’s products like Oacal and Fertirich.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
              >
                <div className="bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Culture */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Marketing Culture</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our marketing team thrives on creativity and collaboration, promoting Belgrand’s products like Bel Nerve and Collarich with passion and integrity.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Innovation</h4>
                    <p className="text-gray-600">Craft novel campaigns for Belgrand’s products like BG-D3 Nano Shot.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Collaboration</h4>
                    <p className="text-gray-600">Work with sales and R&D for aligned strategies.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Integrity</h4>
                    <p className="text-gray-600">Adhere to ethical marketing for Belgrand’s prescription drugs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Impact</h4>
                    <p className="text-gray-600">Drive awareness for Belgrand’s health solutions like Heamfer XT.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Office environment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team discussion" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Job Openings */}
      {/* <section id="job-openings" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Marketing Openings</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join Belgrand’s team to market transformative products like Bel Vit and Rabe Bel DSR.
            </p>
          </div>
          
          {selectedJob ? (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedJob.title}</h2>
                      <div className="flex flex-wrap items-center text-gray-600 gap-4">
                        <span className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {selectedJob.location}
                        </span>
                        <span>{selectedJob.department}</span>
                        <span>{selectedJob.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Job Description</h3>
                    <p className="text-gray-600 mb-6">{selectedJob.description}</p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Responsibilities</h3>
                    <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                      {selectedJob.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Requirements</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      {selectedJob.requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-4">
                    <button 
                      onClick={closeJobDetails}
                      className="btn btn-outline"
                    >
                      Back to All Jobs
                    </button>
                    <a 
                      href="/contact" 
                      className="btn btn-primary"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div className="relative w-full md:w-auto">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="pl-10 pr-4 py-2 w-full md:w-80 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Search marketing jobs..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
                
                <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
                  <select
                    className="py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                  >
                    {departments.map((department) => (
                      <option key={department} value={department}>
                        {department === 'All' ? 'All Departments' : department}
                      </option>
                    ))}
                  </select>
                  
                  <select
                    className="py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location === 'All' ? 'All Locations' : location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="space-y-6">
                {filteredJobs.map((job) => (
                  <div 
                    key={job.id} 
                    className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg cursor-pointer"
                    onClick={() => openJobDetails(job)}
                  >
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap items-center text-gray-600 gap-4">
                          <span className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            {job.location}
                          </span>
                          <span>{job.department}</span>
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <button 
                        className="md:self-center mt-4 md:mt-0 btn btn-primary-outline py-2 px-4"
                        onClick={(e) => {
                          e.stopPropagation();
                          openJobDetails(job);
                        }}
                      >
                        View Details
                      </button>
                    </div>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                ))}
                
                {filteredJobs.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-600 text-lg">No marketing jobs match your criteria.</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section> */}
      
      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Application Process</h2>
              <p className="text-lg text-gray-600">
                Our hiring process is designed to find the best marketing talent for Belgrand Pharmaceuticals.
              </p>
            </div>
            
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="bg-primary text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">1</div>
                  <h3 className="text-lg font-semibold text-gray-800 text-center">Application</h3>
                </div>
                <div className="md:w-3/4 bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600">
                    Submit your resume and a cover letter detailing your marketing experience with Belgrand’s pharmaceutical products like Bel Vit or Rabe Bel DSR.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="bg-primary text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">2</div>
                  <h3 className="text-lg font-semibold text-gray-800 text-center">Initial Screening</h3>
                </div>
                <div className="md:w-3/4 bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600">
                    Our recruiters will discuss your experience with campaigns for Belgrand’s products like Oacal and your interest in our mission.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="bg-primary text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">3</div>
                  <h3 className="text-lg font-semibold text-gray-800 text-center">Interviews</h3>
                </div>
                <div className="md:w-3/4 bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600">
                    Meet our marketing team to discuss strategies for Belgrand’s products like Collarich and digital campaigns, with possible portfolio reviews.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="bg-primary text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">4</div>
                  <h3 className="text-lg font-semibold text-gray-800 text-center">Offer & Onboarding</h3>
                </div>
                <div className="md:w-3/4 bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600">
                    Successful candidates will join our team to market Belgrand’s innovative products like Bel Nerve, with comprehensive onboarding support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;