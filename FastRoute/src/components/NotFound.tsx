import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-primary-red mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-primary-black dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-neutral-gray dark:text-dark-secondary mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary-red text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}