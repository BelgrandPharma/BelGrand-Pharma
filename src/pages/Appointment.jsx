import React, { useState } from 'react';
import { Calendar, Clock, User, Users, Phone, Mail, MessageSquare, CheckCircle, HelpCircle } from 'lucide-react';

const Appointment = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    appointmentType: '',
    preferredDate: '',
    preferredTime: '',
    productInterest: '',
    hasEngagedBefore: false,
    additionalInfo: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState('');

  const appointmentTypes = [
    {
      id: 'product',
      title: 'Product Inquiry',
      description: 'Discuss products like Bel Vit, Oacal, or Rabe Bel DSR with our experts',
      icon: <MessageSquare className="h-8 w-8 text-secondary" />
    },
    {
      id: 'partnership',
      title: 'Business Partnership',
      description: 'Explore distribution or collaboration opportunities with Belgrand Pharmaceuticals',
      icon: <Users className="h-8 w-8 text-secondary" />
    },
    {
      id: 'general',
      title: 'General Consultation',
      description: 'Learn about Belgrand’s portfolio and services',
      icon: <User className="h-8 w-8 text-secondary" />
    }
  ];

  const availableTimes = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', 
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', 
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const selectAppointmentType = (type) => {
    setFormData(prevData => ({
      ...prevData,
      appointmentType: type
    }));
  };

  const validateStep1 = () => {
    const newErrors = {};
    
    if (!formData.appointmentType) {
      newErrors.appointmentType = 'Please select an appointment type';
    }
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }
    
    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time';
    }
    
    if (!formData.productInterest.trim()) {
      newErrors.productInterest = 'Please specify your product interest or inquiry';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (step === 2 && validateStep2()) {
      submitForm();
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const generateConfirmationNumber = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'BP-';
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const submitForm = () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const confirmation = generateConfirmationNumber();
      setConfirmationNumber(confirmation);
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      appointmentType: '',
      preferredDate: '',
      preferredTime: '',
      productInterest: '',
      hasEngagedBefore: false,
      additionalInfo: ''
    });
    setStep(1);
    setIsSubmitted(false);
    setConfirmationNumber('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const faqs = [
    {
      question: 'What topics can I discuss during a product inquiry appointment?',
      answer: 'You can discuss details about Belgrand products like Bel Vit, Oacal, Rabe Bel DSR, Collarich Forte, or Bel Nerve, including their uses and availability.'
    },
    {
      question: 'How can I reschedule my appointment?',
      answer: 'Contact us at +91 89853 83540 or email appointments@belgrandpharma.com at least 24 hours before your scheduled time to reschedule.'
    },
    {
      question: 'What should I prepare for a partnership discussion?',
      answer: 'Bring details about your organization, proposed collaboration ideas, and any relevant data on distribution networks for partnering with Belgrand Pharmaceuticals.'
    },
    {
      question: 'Are there fees for product inquiry consultations?',
      answer: 'Product inquiries and general consultations are complimentary. Partnership discussions may involve follow-up costs, which will be clarified during scheduling.'
    },
    {
      question: 'Can I request a virtual appointment?',
      answer: 'Yes, virtual appointments are available for product inquiries and general consultations. Specify your preference in the additional information section.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Appointment Hero */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book an Appointment</h1>
            <p className="text-xl opacity-90 mb-8">
              Connect with Belgrand Pharmaceuticals to explore our products like Bel Vit, Oacal, or Collarich Forte, discuss partnerships, or learn about our offerings.
            </p>
            {!isSubmitted && (
              <div className="flex justify-center">
                <div className="bg-white/10 rounded-lg p-4 inline-flex">
                  <div className="flex items-center">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-secondary text-white' : 'bg-white/20'}`}>1</div>
                    <div className={`h-1 w-12 ${step === 2 ? 'bg-secondary' : 'bg-white/20'}`}></div>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-secondary text-white' : 'bg-white/20'}`}>2</div>
                    <div className={`h-1 w-12 ${isSubmitted ? 'bg-secondary' : 'bg-white/20'}`}></div>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${isSubmitted ? 'bg-secondary text-white' : 'bg-white/20'}`}>3</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Appointment Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {isSubmitted ? (
              // Confirmation
              <div className="bg-white rounded-lg shadow-md p-8 md:p-12 text-center">
                <div className="inline-flex items-center justify-center bg-secondary/20 h-20 w-20 rounded-full mb-6">
                  <CheckCircle size={40} className="text-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Appointment Scheduled!</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Your appointment with Belgrand Pharmaceuticals has been successfully scheduled. A confirmation email has been sent to {formData.email}.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Appointment Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div>
                      <p className="text-sm text-gray-500">Confirmation Number</p>
                      <p className="font-semibold text-gray-800">{confirmationNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Appointment Type</p>
                      <p className="font-semibold text-gray-800">
                        {appointmentTypes.find(type => type.id === formData.appointmentType)?.title || formData.appointmentType}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="font-semibold text-gray-800">{formData.firstName} {formData.lastName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Contact</p>
                      <p className="font-semibold text-gray-800">{formData.email}</p>
                      <p className="font-semibold text-gray-800">{formData.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="font-semibold text-gray-800">{formatDate(formData.preferredDate)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Time</p>
                      <p className="font-semibold text-gray-800">{formData.preferredTime}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={resetForm} 
                    className="btn btn-primary"
                  >
                    Book Another Appointment
                  </button>
                  <a 
                    href="/" 
                    className="btn btn-outline"
                  >
                    Return to Home
                  </a>
                </div>
              </div>
            ) : (
              // Form
              <div className="bg-white rounded-lg shadow-md p-8">
                {step === 1 ? (
                  // Step 1: Personal Details
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Step 1: Personal Details</h2>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Appointment Type</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {appointmentTypes.map((type) => (
                          <div 
                            key={type.id}
                            onClick={() => selectAppointmentType(type.id)}
                            className={`cursor-pointer rounded-lg p-6 transition-all duration-300 hover:shadow-md ${
                              formData.appointmentType === type.id 
                                ? 'bg-primary text-white border-2 border-primary' 
                                : 'bg-gray-50 border-2 border-transparent hover:border-gray-200'
                            }`}
                          >
                            <div className={`flex justify-center mb-4 ${formData.appointmentType === type.id ? 'text-white' : ''}`}>
                              {type.icon}
                            </div>
                            <h4 className={`text-center font-semibold mb-2 ${formData.appointmentType === type.id ? 'text-white' : 'text-gray-800'}`}>
                              {type.title}
                            </h4>
                            <p className={`text-center text-sm ${formData.appointmentType === type.id ? 'text-white/90' : 'text-gray-600'}`}>
                              {type.description}
                            </p>
                          </div>
                        ))}
                      </div>
                      {errors.appointmentType && <p className="text-red-500 text-sm mt-2">{errors.appointmentType}</p>}
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`form-input ${errors.firstName ? 'border-red-500' : ''}`}
                            placeholder="Your first name"
                          />
                          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                        </div>
                        
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`form-input ${errors.lastName ? 'border-red-500' : ''}`}
                            placeholder="Your last name"
                          />
                          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                            placeholder="you@example.com"
                          />
                          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                            placeholder="+91 xxxxxxxxxx"
                          />
                          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <button 
                        onClick={nextStep}
                        className="btn btn-primary"
                      >
                        Continue to Step 2
                      </button>
                    </div>
                  </div>
                ) : (
                  // Step 2: Appointment Details
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Step 2: Appointment Details</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar size={18} className="text-gray-400" />
                          </div>
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            className={`form-input pl-10 ${errors.preferredDate ? 'border-red-500' : ''}`}
                          />
                        </div>
                        {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time *</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Clock size={18} className="text-gray-400" />
                          </div>
                          <select
                            id="preferredTime"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className={`form-input pl-10 ${errors.preferredTime ? 'border-red-500' : ''}`}
                          >
                            <option value="">Select a time</option>
                            {availableTimes.map((time) => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>
                        {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-1">Product Interest or Inquiry *</label>
                      <textarea
                        id="productInterest"
                        name="productInterest"
                        rows="3"
                        value={formData.productInterest}
                        onChange={handleChange}
                        className={`form-input ${errors.productInterest ? 'border-red-500' : ''}`}
                        placeholder="Specify products (e.g., Bel Vit, Oacal, Collarich Forte) or details of your inquiry"
                      ></textarea>
                      {errors.productInterest && <p className="text-red-500 text-sm mt-1">{errors.productInterest}</p>}
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="hasEngagedBefore"
                          name="hasEngagedBefore"
                          checked={formData.hasEngagedBefore}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <label htmlFor="hasEngagedBefore" className="ml-2 block text-sm text-gray-700">
                          I have engaged with Belgrand Pharmaceuticals before (e.g., purchased products or partnerships)
                        </label>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">Additional Information (Optional)</label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        rows="3"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Any additional details, such as preferred virtual meeting platforms or specific partnership goals"
                      ></textarea>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                      <button 
                        onClick={prevStep}
                        className="btn btn-outline order-2 sm:order-1"
                      >
                        Back to Step 1
                      </button>
                      <button 
                        onClick={nextStep}
                        className="btn btn-primary order-1 sm:order-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="inline-flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          'Schedule Appointment'
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Appointment Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Appointment Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures you can easily schedule a discussion about Belgrand’s products or partnerships.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform md:translate-x-[-50%] hidden md:block"></div>
              
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row md:items-center mb-12 md:mb-16 relative">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Book Your Appointment</h3>
                  <p className="text-gray-600">
                    Complete our form with your contact details and preferred time. Choose a consultation type, such as product inquiries for Bel Vit or partnerships with Belgrand Pharmaceuticals.
                  </p>
                </div>
                <div className="md:w-12 flex justify-center mb-4 md:mb-0 order-1 md:order-2 relative">
                  <div className="bg-primary text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold z-10">1</div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-3"></div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row md:items-center mb-12 md:mb-16 relative">
                <div className="md:w-1/2 md:pr-12 order-2 md:order-1"></div>
                <div className="md:w-12 flex justify-center mb-4 md:mb-0 order-1 md:order-2 relative">
                  <div className="bg-primary text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold z-10">2</div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left order-3 md:order-3">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Confirmation</h3>
                  <p className="text-gray-600">
                    Receive instant confirmation with a unique number and an email detailing your appointment for products like Rabe Bel DSR or partnership discussions with Belgrand.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row md:items-center mb-12 md:mb-16 relative">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Appointment Reminder</h3>
                  <p className="text-gray-600">
                    Get a reminder 24 hours before your appointment to prepare for discussions about products like Collarich Forte or business opportunities with Belgrand.
                  </p>
                </div>
                <div className="md:w-12 flex justify-center mb-4 md:mb-0 order-1 md:order-2 relative">
                  <div className="bg-primary text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold z-10">3</div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-3"></div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row md:items-center relative">
                <div className="md:w-1/2 md:pr-12 order-2 md:order-1"></div>
                <div className="md:w-12 flex justify-center mb-4 md:mb-0 order-1 md:order-2 relative">
                  <div className="bg-primary text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold z-10">4</div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left order-3 md:order-3">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Your Consultation</h3>
                  <p className="text-gray-600">
                    Meet our team virtually or in-person to discuss products like Bel Nerve, partnership proposals, or Belgrand’s innovative pharmaceutical solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about scheduling appointments with Belgrand Pharmaceuticals.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start mb-3">
                    <HelpCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  </div>
                  <p className="text-gray-600 pl-8">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Need Help */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Scheduling?</h2>
            <p className="text-xl opacity-90 mb-8">
              Our team at Belgrand Pharmaceuticals is ready to assist with scheduling your product inquiry or partnership discussion.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="tel:+918985383540" 
                className="btn bg-white text-primary hover:bg-gray-100 flex items-center justify-center"
              >
                <Phone size={18} className="mr-2" />
                Call Us: +91 89853 83540
              </a>
              <a 
                href="mailto:belgrandpharma@gmail.com" 
                className="btn btn-outline border-white text-white hover:bg-white hover:text-primary flex items-center justify-center"
              >
                <Mail size={18} className="mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;