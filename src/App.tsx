import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import TestimonialsPage from './pages/TestimonialsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const hash = window.location.hash.slice(1) || 'home';
    setCurrentPage(hash);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'projects':
        return <ProjectsPage onNavigate={handleNavigate} />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      case 'testimonials':
        return <TestimonialsPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'HBTechs.in - Trusted HVAC & BMS Solutions | Delhi NCR',
      about: 'About Us - HBTechs.in | HVAC & BMS Experts',
      services: 'Our Services - HVAC Installation, BMS, AMC | HBTechs.in',
      projects: 'Our Projects - HVAC Portfolio | HBTechs.in',
      blog: 'HVAC Blog & Resources | HBTechs.in',
      contact: 'Contact Us - HVAC Services Delhi NCR | HBTechs.in',
      testimonials: 'Customer Reviews & Testimonials | HBTechs.in',
    };

    document.title = titles[currentPage] || titles.home;
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
