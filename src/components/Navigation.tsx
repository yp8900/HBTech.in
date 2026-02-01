import { Phone, Menu, X, Home, Info, Briefcase, FolderOpen, FileText, Mail, MessageCircleHeart } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home', icon: Home, color: 'text-orange-400' },
    { name: 'About', path: 'about', icon: Info, color: 'text-blue-400' },
    { name: 'Services', path: 'services', icon: Briefcase, color: 'text-purple-400' },
    { name: 'Projects', path: 'projects', icon: FolderOpen, color: 'text-yellow-400' },
    { name: 'Reviews', path: 'testimonials', icon: MessageCircleHeart, color: 'text-rose-400' },
    { name: 'Blog', path: 'blog', icon: FileText, color: 'text-green-400' },
    { name: 'Contact', path: 'contact', icon: Mail, color: 'text-pink-400' },
  ];

  const handleNavigate = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="glass bg-dark-900/95 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-800/50">
      <div className="w-full px-2 md:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 py-2 md:py-0 md:h-20">
          <div
            className="flex items-center cursor-pointer group w-full md:w-auto justify-center md:justify-start"
            onClick={() => handleNavigate('home')}
          >
            <div className="relative">
              {/* Full Company Name - Show on all screen sizes */}
              <div className="relative leading-none">
                <div className="brand-3d shine-effect group-hover:scale-105 transition-transform text-xs sm:text-sm md:text-xl lg:text-2xl font-black whitespace-nowrap">
                  HVAC BMS TECHNOLOGIES
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-75 transition-opacity pointer-events-none">
                  <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent font-black text-xs sm:text-sm md:text-xl lg:text-2xl whitespace-nowrap">
                    HVAC BMS TECHNOLOGIES
                  </div>
                </div>
              </div>
              
              {/* Website Domain - Show below company name */}
              <div className="mt-0.5 text-center md:text-left">
                <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-cyan-400 tracking-wide">
                  HBTechs.in
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Icons - On new row on mobile, same row on desktop */}
          <div className="flex items-center gap-1 md:gap-2 lg:gap-2 justify-center w-full md:w-auto md:flex-1 md:justify-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.path;
              
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className={`group relative transition-all px-2 md:px-3 lg:px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white shadow-lg shadow-blue-500/50 scale-105'
                      : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-cyan-600/20 hover:scale-105'
                  }`}
                >
                  {/* Animated background shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  
                  <div className="relative flex items-center gap-1 md:gap-2">
                    <Icon 
                      size={18} 
                      className={`${isActive ? 'text-white animate-pulse' : item.color} transition-colors`} 
                    />
                    {/* Hide text on mobile, show on larger screens */}
                    <span className="hidden md:inline text-sm lg:text-base font-semibold">{item.name}</span>
                  </div>
                  
                  {/* Bottom accent line */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
