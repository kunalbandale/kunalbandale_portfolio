import React, { useState, useRef } from 'react';
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    try {
      setStatus('loading');
      
      // TODO: Replace with your EmailJS credentials
      // 1. Sign up at https://www.emailjs.com/
      // 2. Create a new email service (e.g., Gmail)
      // 3. Create an email template with template variables: {{name}}, {{email}}, {{message}}
      // 4. Add your credentials below:
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Email service ID
        'YOUR_TEMPLATE_ID', // Email template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Public key
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      
      // Reset error status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfo
              icon={<Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
              title="Email"
              content="bandalekunal@gmail.com"
            />
            <ContactInfo
              icon={<MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
              title="Let's Talk"
              content="I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
            />
          </div>
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg text-white transform hover:scale-105 transition-all duration-200 ${
                status === 'loading' 
                  ? 'bg-purple-400 cursor-not-allowed' 
                  : 'bg-purple-600 hover:bg-purple-700'
              }`}
            >
              {status === 'loading' ? (
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {/* Status messages */}
            {status === 'success' && (
              <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span>Message sent successfully!</span>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center space-x-2 text-red-600 dark:text-red-400">
                <AlertCircle className="w-5 h-5" />
                <span>Failed to send message. Please try again.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({
  icon,
  title,
  content
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  </div>
);

export default Contact;