import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-2 leading-tight">
              HVAC BMS TECHNOLOGIES<br/>SERVICE PVT LTD.
            </h3>
            <p className="text-sm text-cyan-400 font-semibold mb-4">
              HBTechs.in
            </p>
            <p className="text-sm mb-4">
              Leading provider of HVAC & BMS solutions in Delhi NCR. Trusted by businesses for over a decade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavigate('home')} className="hover:text-blue-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('about')} className="hover:text-blue-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('services')} className="hover:text-blue-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('projects')} className="hover:text-blue-400 transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('blog')} className="hover:text-blue-400 transition-colors">
                  Blog
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>HVAC Design & Installation</li>
              <li>BMS Integration</li>
              <li>Annual Maintenance Contracts</li>
              <li>Chiller Systems</li>
              <li>VRF/VRV Systems</li>
              <li>Emergency Services</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>123 Business Park, Sector 18, Gurgaon, Haryana 122015</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+919999999999" className="hover:text-blue-400">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:info@hbtechs.in" className="hover:text-blue-400">
                  info@hbtechs.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} HVAC BMS Technologies Service Pvt Ltd (HBTechs.in). All rights reserved.</p>
          <p className="mt-2">
            ISO 9001:2015 Certified | Licensed HVAC Contractor | Serving Delhi NCR
          </p>
        </div>
      </div>
    </footer>
  );
}
