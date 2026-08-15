import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MessageSquare, Send, CheckCircle2, AlertCircle, MapPin, ExternalLink, Sparkles, Clock } from 'lucide-react';

export default function Contact() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });
  const formRef = useRef();

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_001';
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_002';
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'FayRCqz_WNOmgstrV';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const [validationError, setValidationError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (validationError) setValidationError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Field validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.title.trim() || !formData.message.trim()) {
      setValidationError('All fields are required. Please fill in all details.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    setValidationError('');
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        { publicKey: PUBLIC_KEY }
      );

      if (result.status === 200 || result.text === 'OK') {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', title: '', message: '' });
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        setStatus({
          submitting: false,
          submitted: false,
          error: 'Sorry, your message could not be sent. Please try again.'
        });
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Sorry, your message could not be sent. Please try again.'
      });
    }
  };

  const whatsappMessageText = "Hello Hilal, I found your portfolio and would like to discuss an opportunity.";
  const whatsappUrl = `https://wa.me/923259397651?text=${encodeURIComponent(whatsappMessageText)}`;

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-slate-100/70 dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 reveal-item ${isVisible ? 'is-revealed' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Work Together
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Have an internship opportunity, project, or question? Feel free to reach out.
          </p>
          <div className="mt-3 h-1 w-16 bg-sky-600 dark:bg-sky-400 mx-auto rounded-full" />
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: WhatsApp Card & Direct Details */}
          <div 
            style={{ transitionDelay: '150ms' }}
            className={`lg:col-span-5 space-y-6 reveal-item ${isVisible ? 'is-revealed' : ''}`}
          >
            {/* WhatsApp Contact Card */}
            <div className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 group text-left">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 dark:bg-emerald-950/90 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Instant Response</span>
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                WhatsApp
              </h3>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                Direct Instant Messaging
              </p>

              <div className="my-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                  Phone Number
                </span>
                <span className="text-lg font-bold text-slate-900 dark:text-white tracking-wide">
                  +92 325 9397651
                </span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all duration-200 flex items-center justify-center space-x-2 group/btn hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-200" />
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-4 h-4 opacity-75 group-hover/btn:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Quick Context & Location Box */}
            <div className="p-6 rounded-3xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-xs space-y-4 text-left">
              <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-sky-50 dark:bg-sky-950/70 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{personalInfo.location}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Availability</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{personalInfo.availability}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Response Time</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Within 24 Hours via Email / Instant on WhatsApp</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form Powered by EmailJS */}
          <div 
            style={{ transitionDelay: '300ms' }}
            className={`lg:col-span-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-10 shadow-lg text-left reveal-item ${
              isVisible ? 'is-revealed' : ''
            }`}
          >
            <div className="mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Send Me a Message
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                Fill out the form below to send an email directly to my inbox.
              </p>
            </div>

            {/* Validation Error Alert */}
            {validationError && (
              <div className="mb-6 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 flex items-center space-x-3 text-sm font-medium">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {/* Success State Notification */}
            {status.submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-center space-x-3 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Message sent successfully! Thank you for contacting me.</span>
              </div>
            )}

            {/* Error State Notification */}
            {status.error && (
              <div className="mb-6 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/70 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 flex items-center space-x-3 text-sm font-medium">
                <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
                <span>{status.error}</span>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
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
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
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
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="title" className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Flutter Developer Opportunity / Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
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
                  placeholder="Hello Hilal, I found your portfolio and would like to discuss an opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full py-4 rounded-2xl bg-sky-600 hover:bg-sky-500 disabled:bg-sky-400 text-white font-bold text-base shadow-lg shadow-sky-600/25 transition-all flex items-center justify-center space-x-2 hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:cursor-not-allowed"
              >
                <Send className={`w-5 h-5 ${status.submitting ? 'animate-bounce' : ''}`} />
                <span>{status.submitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
