import { motion } from 'framer-motion';
import { Truck, Package, Clock, Shield, Box, Warehouse } from 'lucide-react';

const services = [
  {
    icon: <Truck className="w-12 h-12" />,
    title: "Truck Loading Services",
    description: "Professional loading and unloading services with careful handling of your cargo"
  },
  {
    icon: <Box className="w-12 h-12" />,
    title: "Freight Transportation",
    description: "Safe and efficient transportation solutions across the country"
  },
  {
    icon: <Warehouse className="w-12 h-12" />,
    title: "Warehousing",
    description: "Secure storage solutions with modern facility management"
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: "Express Delivery",
    description: "Time-critical shipping services for urgent freight needs"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-neutral-white dark:bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-black dark:text-white mb-4 font-montserrat">
            Our Services
          </h2>
          <p className="text-xl text-neutral-gray dark:text-dark-secondary font-roboto max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-dark-secondary p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-primary-red mb-6 transform group-hover:rotate-6 transition-transform"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-primary-black dark:text-white mb-4 font-montserrat">
                {service.title}
              </h3>
              <p className="text-neutral-gray dark:text-dark-secondary font-roboto">
                {service.description}
              </p>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-primary-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                initial={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}