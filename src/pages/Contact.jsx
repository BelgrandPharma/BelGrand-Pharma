import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      // EmailJS configuration
      const serviceID = 'your_service_id'; // Replace with your EmailJS Service ID
      const templateID = 'your_template_id'; // Replace with your EmailJS Template ID
      const publicKey = 'your_public_key_here'; // Replace with your EmailJS Public Key

      if (!publicKey) {
        console.error('EmailJS Public Key is missing.');
        setIsSubmitting(false);
        setErrors({ submit: 'Configuration error: EmailJS Public Key is missing.' });
        return;
      }

      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject,
        message: formData.message
      };

      // Send email via EmailJS
      emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then((response) => {
          console.log('Email sent successfully:', response.status, response.text);
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
          
          // Reset success message after 5 seconds
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 5000);
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
          setIsSubmitting(false);
          setErrors({ submit: 'Failed to send message. Please try again later.' });
        });
    }
  };

  return (
    <div className="pt-16">
      {/* Contact Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contact Belgrand Pharmaceuticals</h1>
            <p className="text-xl text-gray-600 mb-8">
              Reach out to discuss our products like Bel Vit, Oacal, Rabe Bel DSR, or Collarich Forte, or inquire about our services and partnerships.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Contact Belgrand Pharmaceuticals for inquiries about our products like Bel Vit or Oacal, or to explore partnership opportunities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                    <MapPin className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Our Location</h3>
                    <p className="text-gray-600"> H NO 42-748, SP NAGAR, B 61, MOULALI NEAR TO SP NAGAR BUS STOP BACK S IDE , HYDERABAD, Telangana, India - 500040</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                    <Phone className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+918985383540" className="hover:text-primary transition-colors">+91 89853 83540</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                    <Mail className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:belgrandpharma@gmail.com" className="hover:text-primary transition-colors">belgrandpharma@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Business Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  {/* <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </li> */}
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-gray-50 rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                
                {submitSuccess && (
                  <div className="bg-secondary/20 text-secondary font-medium p-4 rounded-md mb-6 flex items-center">
                    <CheckCircle size={20} className="mr-2" />
                    Your message has been sent successfully. We'll respond soon!
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`form-input ${errors.subject ? 'border-red-500' : ''}`}
                        placeholder="E.g., Product inquiry for Bel Vit"
                      />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`form-input ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Your message, e.g., questions about Oacal or partnership proposals"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary w-full md:w-auto flex items-center justify-center"
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
                      <span className="inline-flex items-center">
                        <Send size={18} className="mr-2" />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Located in Hyderabad, Belgrand Pharmaceuticals welcomes you to discuss products like Rabe Bel DSR or Collarich Forte.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.233152939528!2d78.56159871487794!3d17.466576205627936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b887ba458c1%3A0x325c98c6e69f9f40!2sBelgrand%20Pharmaceuticals%20Private%20Limited!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Belgrand Pharmaceuticals Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Departments Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Departments</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Reach the right team at Belgrand Pharmaceuticals for inquiries about our products, partnerships, or careers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
            <div className="bg-gray-50 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sales & Distribution</h3>
              <p className="text-gray-600 mb-4">Inquire about Belgrand products like Bel Vit, Oacal, or Rabe Bel DSR.</p>
              <p className="text-gray-800 font-medium">
                <a href="mailto:belgrandpharma@gmail.com" className="hover:text-primary transition-colors">belgrandpharma@gmail.com</a>
              </p>
              <p className="text-gray-800 font-medium">
                <a href="tel:+918985383540" className="hover:text-primary transition-colors">+91 89853 83540</a>
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Marketing</h3>
              <p className="text-gray-600 mb-4">Discuss campaigns for Belgrand products like Rabe Bel DSR or Collarich Forte.</p>
              <p className="text-gray-800 font-medium">
                <a href="mailto:belgrandpharma@gmail.com" className="hover:text-primary transition-colors">belgrandpharma@gmail.com</a>
              </p>
              <p className="text-gray-800 font-medium">
                <a href="tel:+918985383540" className="hover:text-primary transition-colors">+91 89853 83540</a>
              </p>
            </div>
            
            {/* Uncomment if needed */}
            {/* <div className="bg-gray-50 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Customer Support</h3>
              <p className="text-gray-600 mb-4">Get help with product queries or feedback for Collarich Forte or Bel Vit.</p>
              <p className="text-gray-800 font-medium">
                <a href="mailto:belgrandpharma@gmail.com" className="hover:text-primary transition-colors">belgrandpharma@gmail.com</a>
              </p>
              <p className="text-gray-800 font-medium">
                <a href="tel:+918985383540" className="hover:text-primary transition-colors">+91 89853 83540</a>
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;