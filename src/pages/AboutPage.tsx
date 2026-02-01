import {
  Target,
  Users,
  Award,
  TrendingUp,
  Shield,
  Clock,
  ThumbsUp,
  Zap,
  CheckCircle,
  Sparkles,
  Building2,
  Handshake,
  Lightbulb,
  Heart,
  Gauge,
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'ISO 9001:2015 certified processes ensuring the highest standards in every project.',
      color: 'blue',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Committed to meeting deadlines without compromising on quality or safety.',
      color: 'cyan',
    },
    {
      icon: Heart,
      title: 'Customer Satisfaction',
      description: '98% customer satisfaction rate with long-term client relationships.',
      color: 'green',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Leveraging cutting-edge HVAC and BMS technologies for optimal solutions.',
      color: 'purple',
    },
    {
      icon: Handshake,
      title: 'Trusted Partnership',
      description: 'Building lasting relationships through transparency and reliability.',
      color: 'orange',
    },
    {
      icon: Sparkles,
      title: 'Excellence',
      description: 'Pursuing excellence in every aspect of our service delivery.',
      color: 'pink',
    },
  ];

  const whyChooseUs = [
    'Over 10 years of industry experience',
    '500+ successful projects completed',
    'Team of 50+ certified technicians and engineers',
    'ISO 9001:2015 certified company',
    'Authorized dealer for leading HVAC brands',
    '24/7 emergency support services',
    'Customized solutions for every client',
    'Competitive pricing with transparent quotes',
  ];

  return (
    <div className="min-h-screen bg-dark-950">
      <section className="relative bg-gradient-to-br from-dark-900 via-blue-950 to-dark-900 text-white py-20 overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20 animate-gradient"></div>
        
        {/* Particle Effect Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">HVAC BMS TECHNOLOGIES</span>
            <br />
            <span className="text-white">SERVICES</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 max-w-3xl mx-auto">
            Leading HVAC & BMS solutions provider in Delhi NCR, committed to excellence since 2014
          </p>
        </div>
      </section>

      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Founded in 2014, HBTechs.in has grown from a small HVAC service provider to one of Delhi NCR's most trusted names in heating, ventilation, air conditioning, and building management systems.
                </p>
                <p>
                  Our journey began with a simple mission: to provide reliable, efficient, and cost-effective HVAC solutions to businesses across the region. Today, we proudly serve over 300 commercial and industrial clients, managing facilities ranging from corporate offices to manufacturing plants.
                </p>
                <p>
                  With a team of 50+ certified engineers and technicians, we bring deep technical expertise and a customer-first approach to every project. Our ISO 9001:2015 certification reflects our commitment to maintaining the highest quality standards.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="modern-card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                <div className="text-gray-300 font-medium">Years Experience</div>
              </div>
              <div className="modern-card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-300 font-medium">Projects Completed</div>
              </div>
              <div className="modern-card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">300+</div>
                <div className="text-gray-300 font-medium">Active Clients</div>
              </div>
              <div className="modern-card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-300 font-medium">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="modern-card">
              <Target className="text-cyan-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold gradient-text mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To deliver innovative, energy-efficient HVAC and BMS solutions that enhance comfort, reduce operational costs, and contribute to sustainable building practices. We strive to be the preferred partner for businesses seeking reliable climate control systems.
              </p>
            </div>
            <div className="modern-card">
              <TrendingUp className="text-cyan-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold gradient-text mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be recognized as the leading HVAC and BMS solutions provider in India, known for technical excellence, customer service, and commitment to environmental sustainability. We aim to set industry standards through continuous innovation and professional development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-cyan-400">
              The principles that guide every project we undertake
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const colorClasses = {
                blue: 'text-blue-600 bg-blue-50 hover:bg-blue-100',
                cyan: 'text-cyan-600 bg-cyan-50 hover:bg-cyan-100',
                green: 'text-green-600 bg-green-50 hover:bg-green-100',
                purple: 'text-purple-600 bg-purple-50 hover:bg-purple-100',
                orange: 'text-orange-600 bg-orange-50 hover:bg-orange-100',
                pink: 'text-pink-600 bg-pink-50 hover:bg-pink-100',
              };
              
              return (
                <div
                  key={index}
                  className={`${colorClasses[value.color as keyof typeof colorClasses] || 'bg-gray-50'} rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-4">
                    <value.icon className={colorClasses[value.color as keyof typeof colorClasses]?.split(' ')[0]} size={40} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="mx-auto mb-4 text-cyan-400" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose HBTechs?
            </h2>
            <p className="text-xl text-gray-300">
              Industry-leading expertise and customer-focused service
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-gray-800 rounded-lg p-4 border border-gray-700"
              >
                <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-200">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Users className="mb-4" size={48} />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Expert Team
              </h2>
              <p className="text-xl text-blue-100 mb-6">
                Our strength lies in our people. Every team member at HBTechs brings specialized expertise and a commitment to excellence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>Certified HVAC engineers and technicians</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>Specialized BMS integration experts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>24/7 emergency response team</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>Continuous training on latest technologies</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Certifications & Partnerships</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-semibold mb-1">ISO 9001:2015</div>
                  <div className="text-sm text-blue-100">Quality Management System</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-semibold mb-1">Licensed HVAC Contractor</div>
                  <div className="text-sm text-blue-100">Government Approved</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-semibold mb-1">Authorized Service Partner</div>
                  <div className="text-sm text-blue-100">Leading HVAC Brands</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
