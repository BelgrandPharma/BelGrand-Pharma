import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, CheckCircle } from 'lucide-react';

const CtaSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setErrors({});

      try {
        const response = await fetch('http://127.0.0.1:8000/api/send-email/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Email sent successfully:', data.message);
          setSubmitSuccess(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          });

          // Reset success message after 5 seconds
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 5000);
        } else {
          throw new Error(data.error || 'Failed to send email');
        }
      } catch (error) {
        console.error('Error:', error);
        setErrors({ submit: error.message || 'Failed to send message. Please try again later.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 h-full w-1/2 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <path fill="#ffffff" d="M47.1,-57.8C60.9,-46.4,71.9,-31.8,77.4,-14.4C82.9,3,82.8,23.2,73.8,37.1C64.7,51,46.6,58.5,29.9,62.3C13.2,66.1,-2.2,66.1,-19.2,63.5C-36.2,60.9,-54.8,55.6,-66.1,42.8C-77.5,30,-81.5,9.7,-77.2,-7.6C-72.9,-24.9,-60.3,-39.2,-45.8,-50.8C-31.3,-62.4,-15.7,-71.4,0.9,-72.5C17.5,-73.6,35,-69.1,47.1,-57.8Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Partner with Belgrand?</h2>
              <p className="text-white/90 text-lg mb-6">
                Connect with us to discuss products like Bel Vit, Oacal, or Rabe Bel DSR, or explore partnership opportunities with Belgrand Pharmaceuticals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+918985383540" 
                  className="btn bg-white text-primary hover:bg-gray-100 flex items-center justify-center"
                >
                  <PhoneCall size={18} className="mr-2" />
                  Call Us
                </a>
                <Link 
                  to="/contact" 
                  className="btn btn-secondary flex items-center justify-center"
                >
                  <Mail size={18} className="mr-2" />
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Schedule a Consultation</h3>
              
              {submitSuccess && (
                <div className="bg-secondary/20 text-secondary font-medium p-4 rounded-md mb-6 flex items-center">
                  <CheckCircle size={20} className="mr-2" />
                  Your request has been sent successfully. We'll respond soon!
                </div>
              )}
              
              {errors.submit && (
                <div className="bg-red-100 text-red-700 font-medium p-4 rounded-md mb-6 flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  {errors.submit}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
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
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+91 xxxxxxxxxx"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      className={`form-input ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="E.g., Questions about Bel Vit, Oacal, or Bel Nerve Tablet, or partnership proposals"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Submit Request'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;