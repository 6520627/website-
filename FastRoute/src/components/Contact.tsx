import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { EMAILJS_CONFIG, COMPANY_INFO } from '../config/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
        throw new Error('EmailJS configuration is missing');
      }

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: COMPANY_INFO.email
        },
        EMAILJS_CONFIG.publicKey
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-black dark:text-white mb-4 font-montserrat">Contact Us</h2>
          <p className="text-xl text-neutral-gray dark:text-dark-secondary font-roboto">
            Get in touch with our team for any inquiries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-dark-secondary p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-primary-black dark:text-white mb-2 font-montserrat">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent bg-white dark:bg-dark-primary text-primary-black dark:text-white font-roboto disabled:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-primary-black dark:text-white mb-2 font-montserrat">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent bg-white dark:bg-dark-primary text-primary-black dark:text-white font-roboto disabled:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-primary-black dark:text-white mb-2 font-montserrat">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent bg-white dark:bg-dark-primary text-primary-black dark:text-white font-roboto disabled:opacity-50"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-red text-white px-6 py-3 rounded-lg font-montserrat disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg transition-all"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary-red mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-primary-black dark:text-white mb-2 font-montserrat">Location</h3>
                <p className="text-neutral-gray dark:text-dark-secondary font-roboto">{COMPANY_INFO.address}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary-red mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-primary-black dark:text-white mb-2 font-montserrat">Phone</h3>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-neutral-gray dark:text-dark-secondary hover:text-primary-red dark:hover:text-primary-red transition-colors font-roboto"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-primary-red mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-primary-black dark:text-white mb-2 font-montserrat">Email</h3>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-neutral-gray dark:text-dark-secondary hover:text-primary-red dark:hover:text-primary-red transition-colors font-roboto"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}