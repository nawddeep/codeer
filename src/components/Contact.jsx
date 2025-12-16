import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram, Github, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { companyInfo, services } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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
  const [submitStatus, setSubmitStatus] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
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
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
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

  const inputClass = (error) => `w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-900 border ${error ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-800'} text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-violet-500 transition-colors`;

  return (
    <section id="contact" className="py-24 bg-zinc-50/50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-violet-600 dark:text-violet-400 font-medium mb-3 text-sm tracking-wide uppercase">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Get in touch
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-lg">
            Have a project in mind? We would love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitStatus === 'success' ? (
              <div className="p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Message sent!</h3>
                <p className="text-zinc-500">We will get back to you within 24 hours.</p>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-center">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Something went wrong</h3>
                <button onClick={() => setSubmitStatus(null)} className="text-violet-600 dark:text-violet-400 font-medium">
                  Try again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name *" className={inputClass(errors.name)} />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email *" className={inputClass(errors.email)} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone (optional)" className={inputClass()} />
                  <select name="service" value={formData.service} onChange={handleChange} className={inputClass()}>
                    <option value="">Select service</option>
                    {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                  </select>
                </div>
                
                <div>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell us about your project *" className={inputClass(errors.message) + ' resize-none'} />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors disabled:opacity-60"
                >
                  {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                <Mail className="w-5 h-5" />
                {companyInfo.email}
              </a>
              <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                <Phone className="w-5 h-5" />
                {companyInfo.phone}
              </a>
              <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                <MapPin className="w-5 h-5" />
                {companyInfo.address}
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <p className="text-sm text-zinc-500 mb-4">Follow us</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
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
