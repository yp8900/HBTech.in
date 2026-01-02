import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'About Us', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Projects', path: 'projects' },
    { name: 'Blog', path: 'blog' },
    { name: 'Contact', path: 'contact' },
  ];

  const handleNavigate = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="glass bg-dark-900/95 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavigate('home')}
          >
            <div className="flex flex-col">
              <div className="text-3xl font-bold leading-tight">
                <span className="gradient-text group-hover:scale-110 transition-transform inline-block">HBTechs</span>
                <span className="text-cyan-400">.in</span>
              </div>
              <div className="text-xs text-gray-400 font-medium tracking-wider">HVAC SOLUTIONS</div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`text-sm font-medium transition-all px-4 py-2 rounded-lg ${
                  currentPage === item.path
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </button>
            ))}
            <a
              href="tel:+919990911982"
              className="btn-neon ml-4 inline-flex items-center gap-2 text-sm"
            >
              <Phone size={18} />
              <span className="font-medium">+91 99909 11982</span>
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:+919990911982"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-2 rounded-lg shadow-lg shadow-blue-500/50"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-gray-800/50">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                  currentPage === item.path
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-lg'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
