import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram, Github, CheckCircle, Loader2 } from 'lucide-react';
import { companyInfo, services } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
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
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/50 to-slate-900" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-indigo-400 font-medium mb-4 block">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="glass-card rounded-2xl p-8">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name *</label>
                    <input
                      type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border ${errors.name ? 'border-red-500' : 'border-slate-700'} text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                    <input
                      type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border ${errors.email ? 'border-red-500' : 'border-slate-700'} text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Phone</label>
                    <input
                      type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">Service</label>
                    <select
                      id="service" name="service" value={formData.service} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message *</label>
                  <textarea
                    id="message" name="message" value={formData.message} onChange={handleChange} rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border ${errors.message ? 'border-red-500' : 'border-slate-700'} text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
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
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Email</div>
                    <div>{companyInfo.email}</div>
                  </div>
                </a>
                <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
                    <Phone className="w-5 h-5 text-indigo-400" />
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
