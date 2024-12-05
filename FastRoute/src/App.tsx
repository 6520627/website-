import './index.css'
import { useEffect, Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ErrorFallback from './components/ErrorFallback'
import NotFound from './components/NotFound'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    document.querySelectorAll('.section-fade').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const MainContent = () => (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Contact />
    </>
  );

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <ScrollToTop />
          <Toaster position="top-right" />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;