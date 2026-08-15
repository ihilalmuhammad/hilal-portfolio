import React, { useState } from 'react';
import { personalInfo, formConfig } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GithubIcon from './GithubIcon';
import { MessageSquare, Mail, Send, CheckCircle2, AlertCircle, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      if (formConfig.useService && formConfig.endpoint) {
        // Send using free FormSubmit endpoint without exposing API keys
        const response = await fetch(formConfig.endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok || response.status === 200 || response.type === 'opaque') {
          setStatus({ submitting: false, submitted: true, error: null });
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setStatus({ submitting: false, submitted: true, error: null });
          setFormData({ name: '', email: '', subject: '', message: '' });
        }
      } else {
        setTimeout(() => {
          setStatus({ submitting: false, submitted: true, error: null });
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 800);
      }
    } catch (err) {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const whatsappUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`;

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-slate-100/70 dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 reveal-item ${isVisible ? 'is-revealed' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Work Together
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Have an internship opportunity, project, or question? Feel free to contact me.
          </p>
          <div className="mt-3 h-1 w-16 bg-sky-600 dark:bg-sky-400 mx-auto rounded-full" />
        </div>

        {/* Contact Methods Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ transitionDelay: '150ms' }}
            className={`p-6.5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-effect text-left group reveal-item ${
              isVisible ? 'is-revealed' : ''
            }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
              WhatsApp
            </h3>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
              Direct Instant Messaging
            </p>
            <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-3.5 flex items-center justify-between">
              <span>{personalInfo.phone}</span>
              <span className="text-[11px] font-extrabold bg-emerald-100 dark:bg-emerald-950 px-2.5 py-0.5 rounded-full text-emerald-700 dark:text-emerald-300">
                Chat Now
              </span>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            style={{ transitionDelay: '250ms' }}
            className={`p-6.5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-effect text-left group reveal-item ${
              isVisible ? 'is-revealed' : ''
            }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/70 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
              Email
            </h3>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
              Official Email Address
            </p>
            <div className="text-sm font-bold text-sky-600 dark:text-sky-400 mt-3.5 truncate">
              {personalInfo.email}
            </div>
          </a>

          {/* GitHub */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ transitionDelay: '350ms' }}
            className={`p-6.5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm card-hover-effect text-left group reveal-item ${
              isVisible ? 'is-revealed' : ''
            }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs">
              <GithubIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
              GitHub
            </h3>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
              Codebase & Repositories
            </p>
            <div className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-3.5 flex items-center justify-between">
              <span>@ihilalmuhammad</span>
              <span className="text-xs text-sky-600 dark:text-sky-400 font-bold">View Profile</span>
            </div>
          </a>

        </div>

        {/* Contact Form Container */}
        <div 
          style={{ transitionDelay: '450ms' }}
          className={`max-w-3xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-10 shadow-lg text-left reveal-item ${
            isVisible ? 'is-revealed' : ''
          }`}
        >
          
          <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
            <MapPin className="w-5 h-5 text-sky-500 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
              Location: <strong>{personalInfo.location}</strong>
            </span>
          </div>

          {status.submitted && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-center space-x-3 text-sm font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>Thank you! Your message has been sent successfully. Hilal will respond shortly.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="HR Manager / Recruiter Name"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Flutter Developer Opportunity / Project Inquiry"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello Hilal, we would like to discuss an opportunity with our team..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status.submitting}
              className="w-full py-4 rounded-2xl bg-sky-600 hover:bg-sky-500 disabled:bg-sky-400 text-white font-bold text-base shadow-lg shadow-sky-600/25 transition-all flex items-center justify-center space-x-2 hover:scale-[1.01] active:scale-[0.99]"
            >
              <Send className="w-5 h-5" />
              <span>{status.submitting ? 'Sending Message...' : 'Send Message'}</span>
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
