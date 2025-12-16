/**
 * Contact Section Component
 * Features EmailJS integration for real form submissions
 * 
 * To enable EmailJS:
 * 1. Create account at https://www.emailjs.com/
 * 2. Create email service and template
 * 3. Add your credentials to .env file:
 *    VITE_EMAILJS_SERVICE_ID=your_service_id
 *    VITE_EMAILJS_TEMPLATE_ID=your_template_id
 *    VITE_EMAILJS_PUBLIC_KEY=your_public_key
 */

import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram, Github, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { companyInfo, services } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// EmailJS configuration - replace with your credentials or use env variables
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'demo_service',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'demo_template',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'demo_key'
};

const Contact = () => {
  const formRef = useRef(null);
  const [ref, isVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Check if EmailJS is configured (not demo values)
      if (EMAILJS_CONFIG.serviceId !== 'demo_service') {
        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone || 'Not provided',
            service: formData.service || 'Not specified',
            message: formData.message,
            to_name: companyInfo.name
          },
          EMAILJS_CONFIG.publicKey
        );
      } else {
        // Demo mode - simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Demo mode: Form data would be sent:', formData);
      }
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const socialLinks = [
    { icon: Linkedin, href: companyInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: companyInfo.social.twitter, label: 'Twitter' },
    { icon: Instagram, href: companyInfo.social.instagram, label: 'Instagram' },
    { icon: Github, href: companyInfo.social.github, label: 'GitHub' }
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900/50 dark:to-slate-900 transition-colors duration-300" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-indigo-600 dark:text-indigo-400 font-medium mb-4 block">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="glass-card rounded-2xl p-8">
            {submitStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400">We'll get back to you within 24 hours.</p>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                  <AlertCircle className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Something went wrong</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">Please try again or email us directly.</p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name *</label>
                    <input
                      type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800/50 border ${errors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email *</label>
                    <input
                      type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800/50 border ${errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone</label>
                    <input
                      type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Service</label>
                    <select
                      id="service" name="service" value={formData.service} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message *</label>
                  <textarea
                    id="message" name="message" value={formData.message} onChange={handleChange} rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800/50 border ${errors.message ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <button
                  type="submit" disabled={isSubmitting}
                  className="w-full btn-primary py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-5 h-5" /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
                    <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Email</div>
                    <div>{companyInfo.email}</div>
                  </div>
                </a>
                <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
                    <Phone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Phone</div>
                    <div>{companyInfo.phone}</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Address</div>
                    <div>{companyInfo.address}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
