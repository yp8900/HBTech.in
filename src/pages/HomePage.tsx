import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Testimonial } from '../types';
import ServiceRequestForm from '../components/ServiceRequestForm';
import {
  Wind,
  Settings,
  Wrench,
  Shield,
  Clock,
  PhoneCall,
  Star,
  Award,
  CheckCircle,
  Zap,
  TrendingUp,
  Snowflake,
  Flame,
  Gauge,
  Radio,
  Cpu,
  Fan,
  Building2,
  Sparkles,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(3);

    if (data && !error) {
      setTestimonials(data);
    }
  };

  const services = [
    {
      icon: Wind,
      title: 'HVAC Design & Installation',
      description: 'Complete HVAC solutions from design to commissioning for commercial and industrial facilities.',
    },
    {
      icon: Cpu,
      title: 'BMS Integration',
      description: 'Smart building management systems for energy efficiency and automated control.',
    },
    {
      icon: Wrench,
      title: 'Annual Maintenance Contracts',
      description: 'Comprehensive AMC packages to keep your systems running at peak performance.',
    },
    {
      icon: Snowflake,
      title: 'Cooling Systems',
      description: 'Premium chillers, VRF/VRV systems, and central AC solutions for optimal comfort.',
    },
    {
      icon: Clock,
      title: 'Emergency Services',
      description: '24/7 emergency repair services with rapid response times across Delhi NCR.',
    },
    {
      icon: Gauge,
      title: 'Energy Monitoring',
      description: 'Real-time monitoring and optimization for reduced energy costs and peak performance.',
    },
  ];

  const certifications = [
    'MSME Registered',
    'Licensed HVAC Contractor',
    'BMS Integration Specialists',
    'Industry Trusted Partner',
  ];

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Hero Section with Modern Dark Design */}
      <section className="relative bg-gradient-to-br from-dark-900 via-blue-950 to-dark-900 text-white py-20 md:py-32 overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20 animate-gradient"></div>
        
        {/* Particle Effect Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&h=1080&fit=crop&auto=format"
            alt="Industrial HVAC Systems"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/50">
                  Industry Trusted Partner
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Trusted HVAC</span>
                <br />
                <span className="text-white">& BMS Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-cyan-400 font-semibold">
                Design, Installation, AMC & Maintenance
              </p>
              <p className="text-lg mb-8 text-gray-300">
                Delivering excellence in heating, ventilation, and air conditioning services across Delhi NCR for over 10 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    const form = document.getElementById('service-request-form');
                    form?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-neon inline-flex items-center justify-center gap-2"
                >
                  <PhoneCall size={20} />
                  Book Service Now
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="glass-card text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2 border-2 border-cyan-500/50 hover:border-cyan-400"
                >
                  Explore Services
                  <TrendingUp size={20} />
                </button>
              </div>
            </div>
            <div className="hidden md:block animate-fade-in">
              <div className="glass-card p-8 pulse-glow rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Why Choose HBTechs?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 group">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-1">
                      <CheckCircle className="flex-shrink-0 text-white" size={20} />
                    </div>
                    <span className="text-gray-200 group-hover:text-white transition-colors">10+ Years of Industry Experience</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-1">
                      <CheckCircle className="flex-shrink-0 text-white" size={20} />
                    </div>
                    <span className="text-gray-200 group-hover:text-white transition-colors">500+ Successful Projects Completed</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-1">
                      <CheckCircle className="flex-shrink-0 text-white" size={20} />
                    </div>
                    <span className="text-gray-200 group-hover:text-white transition-colors">24/7 Emergency Support Available</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-1">
                      <CheckCircle className="flex-shrink-0 text-white" size={20} />
                    </div>
                    <span className="text-gray-200 group-hover:text-white transition-colors">MSME Registered & Quality Assured</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section with Modern Dark Design */}
      <section className="py-20 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 relative">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="gradient-text">HVAC & BMS</span> Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Complete range of commercial and industrial air conditioning systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1631545806609-8c7fb3879d2e?w=600&h=400&fit=crop&auto=format"
                alt="Commercial HVAC"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent flex items-end">
                <div className="p-8 text-white w-full">
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">Commercial Air-Conditioning</h3>
                  <p className="text-gray-300 mb-4 text-lg">VRV/VRF Systems • Chillers • AHU</p>
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-4 transition-all">
                    Explore <TrendingUp size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Premium
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 animate-scale-in"
                 style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&auto=format"
                alt="Light Commercial"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent flex items-end">
                <div className="p-8 text-white w-full">
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">Light Commercial</h3>
                  <p className="text-gray-300 mb-4 text-lg">Ductable AC • Cassette AC • Packaged AC</p>
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-4 transition-all">
                    Explore <TrendingUp size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Popular
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 animate-scale-in"
                 style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1635699288863-f4c2c8b8e1e3?w=600&h=400&fit=crop&auto=format"
                alt="BMS Solutions"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent flex items-end">
                <div className="p-8 text-white w-full">
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">Building Management Systems</h3>
                  <p className="text-gray-300 mb-4 text-lg">Smart Controls • Automation • Monitoring</p>
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-4 transition-all">
                    Explore <TrendingUp size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Advanced
              </div>
            </div>
          </div>

          <div className="text-center mb-12 mt-20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Our <span className="gradient-text">Core Services</span>
            </h3>
            <p className="text-gray-400 text-lg">Comprehensive solutions tailored to your needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="modern-card cursor-pointer group animate-fade-in"
                onClick={() => onNavigate('services')}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/50">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <button className="text-cyan-400 font-medium hover:text-cyan-300 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <TrendingUp size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Gallery Section with Dark Modern Design */}
      <section className="py-20 bg-dark-900 relative overflow-hidden">
        {/* Animated Background Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Premium <span className="gradient-text">HVAC Equipment</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Authorized dealer for leading brands and latest HVAC technology
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { img: '/images/vrv-vrf.jpg', title: 'VRV/VRF System', subtitle: 'Multi-split AC' },
              { img: '/images/chiller.jpg', title: 'Chiller', subtitle: 'Air/Water Cooled' },
              { img: '/images/ahu.jpg', title: 'Air Handling Unit', subtitle: 'AHU Systems' },
              { img: '/images/ductable-ac.jpg', title: 'Ductable AC', subtitle: 'Concealed Units' },
              { img: '/images/cassette-ac.jpg', title: 'Cassette AC', subtitle: 'Ceiling Mounted' },
              { img: '/images/packaged-ac.jpg', title: 'Packaged AC', subtitle: 'Commercial Units' },
              { img: '/images/fcu.jpg', title: 'Fan Coil Unit (FCU)', subtitle: 'Individual Control' },
              { img: '/images/cooling-tower.jpg', title: 'Cooling Tower', subtitle: 'Heat Rejection' },
            ].map((item, index) => (
              <div 
                key={index}
                className="group modern-card cursor-pointer overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-square mb-4 overflow-hidden rounded-xl relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold text-white text-center group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-400 text-center mt-1">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Support Vendors Section with Marquee Animation */}
      <section className="py-20 bg-dark-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              We Service & Support <span className="gradient-text">Premium Brands</span>
            </h2>
            <p className="text-xl text-gray-400">
              Expert maintenance, repair, and AMC services for world's leading HVAC equipment
            </p>
          </div>
        </div>
        
        {/* Infinite Scrolling Marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-950 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-950 to-transparent z-10"></div>
          
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee gap-8 py-8">
              {['Daikin', 'Carrier', 'Trane', 'Johnson Controls', 'Siemens', 'Honeywell', 'Schneider Electric', 'ABB', 'Mitsubishi Electric', 'LG HVAC', 'Hitachi', 'Toshiba', 'Bosch', 'Danfoss'].map((vendor, index) => (
                <div 
                  key={`vendor-1-${index}`}
                  className="glass-card px-10 py-6 rounded-xl flex items-center justify-center min-w-[200px] group cursor-pointer hover:bg-white/15 transition-all"
                >
                  <span className="text-gray-300 group-hover:text-cyan-400 font-bold text-xl transition-colors whitespace-nowrap">{vendor}</span>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex animate-marquee gap-8 py-8" aria-hidden="true">
              {['Daikin', 'Carrier', 'Trane', 'Johnson Controls', 'Siemens', 'Honeywell', 'Schneider Electric', 'ABB', 'Mitsubishi Electric', 'LG HVAC', 'Hitachi', 'Toshiba', 'Bosch', 'Danfoss'].map((vendor, index) => (
                <div 
                  key={`vendor-2-${index}`}
                  className="glass-card px-10 py-6 rounded-xl flex items-center justify-center min-w-[200px] group cursor-pointer hover:bg-white/15 transition-all"
                >
                  <span className="text-gray-300 group-hover:text-cyan-400 font-bold text-xl transition-colors whitespace-nowrap">{vendor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-dark-950 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-400">
              Trusted by leading businesses across Delhi NCR
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="glass-card p-8 hover:bg-white/10 transition-all group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current group-hover:scale-110 transition-transform" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.review}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-semibold text-white text-lg group-hover:text-cyan-400 transition-colors">{testimonial.customer_name}</p>
                  <p className="text-sm text-cyan-400 font-medium">{testimonial.company}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-dark-900 via-blue-950/30 to-dark-900 text-white relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl mb-6 animate-pulse-glow">
              <Award className="text-white" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Certifications & <span className="gradient-text">Accreditations</span>
            </h2>
            <p className="text-xl text-gray-400">
              Maintaining the highest industry standards
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card p-8 text-center hover:bg-white/10 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform" size={40} />
                <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="service-request-form" className="py-20 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Request a <span className="gradient-text">Service</span>
            </h2>
            <p className="text-xl text-gray-400">
              Get expert HVAC solutions tailored to your needs
            </p>
          </div>
          <div className="glass-card p-8">
            <ServiceRequestForm />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            Our team is available 24/7 for emergency HVAC services
          </p>
          <a
            href="tel:+911206673172"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            <PhoneCall size={24} />
            +911 206673172
          </a>
        </div>
      </section>
    </div>
  );
}
