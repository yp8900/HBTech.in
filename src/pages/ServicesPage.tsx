import { useState } from 'react';
import {
  Wind,
  Settings,
  Wrench,
  Shield,
  Clock,
  Zap,
  Building,
  Thermometer,
  CheckCircle,
  ChevronDown,
  PhoneCall,
  Snowflake,
  Flame,
  Gauge,
  Radio,
  Cpu,
  Activity,
  Fan,
  Layers,
  ClipboardCheck,
  Tool,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const serviceCategories = [
    {
      image: 'https://images.unsplash.com/photo-1631545806609-8c7fb3879d2e?w=800&h=600&fit=crop&auto=format',
      title: 'HVAC System Design',
      description: 'Custom engineered solutions for optimal comfort'
    },
    {
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop&auto=format',
      title: 'Installation Services',
      description: 'Professional installation and commissioning'
    },
    {
      image: 'https://images.unsplash.com/photo-1635699288863-f4c2c8b8e1e3?w=800&h=600&fit=crop&auto=format',
      title: 'BMS Integration',
      description: 'Smart building automation systems'
    }
  ];

  const services = [
    {
      icon: Wind,
      title: 'HVAC System Design & Engineering',
      description:
        'Complete HVAC system design tailored to your facility requirements. Our engineers conduct load calculations, duct design, and equipment selection to ensure optimal performance and energy efficiency.',
      features: [
        'Load calculation and system sizing',
        'Energy efficiency analysis',
        '3D modeling and visualization',
        'Compliance with building codes',
      ],
    },
    {
      icon: Building,
      title: 'HVAC Installation & Commissioning',
      description:
        'Professional installation of all types of HVAC systems including central AC, VRF/VRV, ducted systems, and more. Complete commissioning to ensure systems operate at peak efficiency.',
      features: [
        'Turnkey installation services',
        'Quality testing and commissioning',
        'System balancing and optimization',
        'Staff training and handover',
      ],
    },
    {
      icon: Settings,
      title: 'Building Management Systems (BMS)',
      description:
        'Advanced BMS solutions that integrate HVAC, lighting, security, and other building systems for centralized monitoring and control. Reduce energy costs by up to 30%.',
      features: [
        'System integration and automation',
        'Real-time monitoring and alerts',
        'Energy management and reporting',
        'Remote access and control',
      ],
    },
    {
      icon: Wrench,
      title: 'Annual Maintenance Contracts (AMC)',
      description:
        'Comprehensive preventive maintenance packages to keep your HVAC systems running efficiently. Reduce downtime, extend equipment life, and maintain optimal performance.',
      features: [
        'Scheduled preventive maintenance',
        'Priority emergency response',
        'Replacement parts included',
        'Performance monitoring reports',
      ],
    },
    {
      icon: Shield,
      title: 'Equipment Sales & Supply',
      description:
        'Authorized dealer and supplier of premium HVAC equipment from leading brands. We offer chillers, VRF/VRV systems, AHUs, FCUs, ducted AC units, and all accessories.',
      features: [
        'Genuine branded equipment',
        'Competitive pricing',
        'Warranty and support',
        'Technical consultation',
      ],
    },
    {
      icon: Clock,
      title: '24/7 Emergency Services',
      description:
        'Round-the-clock emergency repair and support services. Our rapid response team is available 24/7 to address critical HVAC failures and minimize downtime.',
      features: [
        'Emergency response within 2 hours',
        'Expert troubleshooting',
        'On-site repairs',
        'Temporary cooling solutions',
      ],
    },
    {
      icon: Zap,
      title: 'System Upgrades & Retrofits',
      description:
        'Modernize your existing HVAC systems with energy-efficient upgrades. Improve performance, reduce energy costs, and extend equipment lifespan.',
      features: [
        'Energy audit and assessment',
        'Cost-benefit analysis',
        'Phased upgrade planning',
        'Minimal operational disruption',
      ],
    },
    {
      icon: Thermometer,
      title: 'Specialized HVAC Solutions',
      description:
        'Custom HVAC solutions for specialized environments including clean rooms, server rooms, hospitals, and industrial facilities requiring precise climate control.',
      features: [
        'Precision air conditioning',
        'Cleanroom HVAC systems',
        'Industrial ventilation',
        'Custom climate control',
      ],
    },
  ];

  const faqs = [
    {
      question: 'What types of HVAC systems do you install?',
      answer:
        'We install all types of HVAC systems including central air conditioning, VRF/VRV systems, ducted split AC, cassette AC, chiller plants, AHUs, FCUs, and precision air conditioning for specialized environments.',
    },
    {
      question: 'What is included in your AMC packages?',
      answer:
        'Our AMC packages include scheduled preventive maintenance visits, cleaning and servicing of all components, replacement of filters and consumables, priority emergency support, performance monitoring, and detailed service reports.',
    },
    {
      question: 'How quickly can you respond to emergency breakdowns?',
      answer:
        'Our emergency response team is available 24/7 and typically responds within 2 hours for critical breakdowns in Delhi NCR. We maintain a fleet of service vehicles and spare parts inventory for rapid repairs.',
    },
    {
      question: 'Do you provide warranties on installations?',
      answer:
        'Yes, we provide comprehensive warranties on all installations. Equipment comes with manufacturer warranties, and our installation work is backed by our service guarantee. Specific warranty terms depend on the type of system and components.',
    },
    {
      question: 'Can you help with energy cost reduction?',
      answer:
        'Absolutely. Through BMS integration, system optimization, and energy-efficient upgrades, we regularly help clients reduce energy costs by 20-40%. We conduct energy audits to identify savings opportunities.',
    },
  ];

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Hero Section with Animated Background */}
      <section className="relative bg-gradient-to-br from-dark-900 via-blue-950 to-dark-900 text-white py-20 overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20 animate-gradient"></div>
        
        {/* Particle Effect Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&h=600&fit=crop&auto=format"
            alt="HVAC Services"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Services</h1>
          <p className="text-xl md:text-2xl text-cyan-400 max-w-3xl mx-auto">
            Comprehensive HVAC and BMS solutions for commercial and industrial facilities
          </p>
        </div>
      </section>

      {/* Service Categories with Images */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {serviceCategories.map((category, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/50 to-transparent flex items-end">
                  <div className="p-6 text-white w-full">
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-blue-100">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="modern-card hover:shadow-xl transition-shadow"
              >
                <service.icon className="text-cyan-400 mb-4" size={48} />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle
                          className="text-green-400 flex-shrink-0 mt-1"
                          size={16}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-cyan-400 font-semibold hover:text-cyan-300 inline-flex items-center gap-2"
                >
                  Get a Quote
                  <PhoneCall size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-cyan-400">
              Common questions about our HVAC and BMS services
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between glass-card hover:bg-dark-800/50 transition-colors"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <ChevronDown
                    className={`text-cyan-400 transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-dark-800/50 border-t border-gray-700">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and customized quote for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              <PhoneCall size={20} />
              Contact Us
            </button>
            <a
              href="tel:+919999999999"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center justify-center gap-2"
            >
              <PhoneCall size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
