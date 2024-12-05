import { motion } from 'framer-motion';
import { Shield, Clock, Award, Users } from 'lucide-react';

const benefits = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Reliable Service",
    description: "State-of-the-art fleet and professional team committed to excellence",
    stat: "100% Commitment"
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: "Fast Response",
    description: "Quick quotes and immediate dispatch for your urgent needs",
    stat: "24/7 Available"
  },
  {
    icon: <Award className="w-12 h-12" />,
    title: "Quality Guarantee",
    description: "Modern equipment and certified professionals for superior service",
    stat: "Premium Service"
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Customer Focus",
    description: "Dedicated support team ready to assist you anytime",
    stat: "Personal Care"
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50 dark:bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-black dark:text-white mb-4 font-montserrat">
            Why Choose Us
          </h2>
          <p className="text-xl text-neutral-gray dark:text-dark-secondary font-roboto max-w-2xl mx-auto">
            Setting new standards in freight services with innovation and dedication
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-primary p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-primary-red mb-6"
              >
                {benefit.icon}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold text-primary-red mb-4 font-montserrat"
              >
                {benefit.stat}
              </motion.div>

              <h3 className="text-xl font-semibold text-primary-black dark:text-white mb-4 font-montserrat">
                {benefit.title}
              </h3>
              
              <p className="text-neutral-gray dark:text-dark-secondary font-roboto">
                {benefit.description}
              </p>

              <motion.div
                className="w-16 h-1 bg-primary-red mt-6"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}