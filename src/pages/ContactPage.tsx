import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Contact Us</h1>
          <p className="text-xl md:text-2xl text-cyan-400 max-w-3xl mx-auto">
            Get in touch with our HVAC experts for consultations, quotes, or support
          </p>
        </div>
      </section>

      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold gradient-text mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours.
                For urgent matters, please call us directly.
              </p>
              <div className="modern-card p-6">
                <ContactForm />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold gradient-text mb-6">
                Contact Information
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-dark-800 p-3 rounded-lg">
                    <MapPin className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Office Address</h3>
                    <p className="text-gray-300">
                      6/2 Pratap Enclave, Mohan Garden<br />
                      Ground Floor, Gurudwara Road<br />
                      New Delhi, West Delhi - 110058<br />
                      India
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      GSTIN: 07CXGPS0897E1Z3
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-dark-800 p-3 rounded-lg">
                    <Phone className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone Numbers</h3>
                    <p className="text-gray-300">
                      <a href="tel:+919990911982" className="hover:text-cyan-400">
                        +91 9990911982
                      </a>
                      <br />
                      <a href="tel:+911206673172" className="hover:text-cyan-400">
                        +911 206673172
                      </a>
                    </p>
                    <p className="text-sm text-gray-400 mt-1">Mobile & Landline</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-dark-800 p-3 rounded-lg">
                    <Mail className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email Addresses</h3>
                    <p className="text-gray-300">
                      <a href="mailto:info@hbtechs.in" className="hover:text-cyan-400">
                        info@hbtechs.in
                      </a>
                      <br />
                      <a href="mailto:support@hbtechs.in" className="hover:text-cyan-400">
                        support@hbtechs.in
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-dark-800 p-3 rounded-lg">
                    <Clock className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Business Hours</h3>
                    <p className="text-gray-300">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                    <p className="text-sm text-cyan-400 mt-1 font-medium">
                      Emergency services available 24/7
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 border-l-4 border-cyan-500">
                <h3 className="font-semibold text-white mb-2">Service Areas</h3>
                <p className="text-gray-300">
                  We provide HVAC and BMS services across Delhi NCR including:
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-300">
                  <div>• Delhi</div>
                  <div>• Gurgaon</div>
                  <div>• Noida</div>
                  <div>• Greater Noida</div>
                  <div>• Faridabad</div>
                  <div>• Ghaziabad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold gradient-text mb-8 text-center">
            Find Us on Map
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3858772588394!2d77.05861931508236!3d28.619054982422554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1e1e1e1e1f%3A0x1e1e1e1e1e1e1e1e!2sMohan%20Garden%2C%20Uttam%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110059!5e0!3m2!1sen!2sin!4v1706745600000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="HBTechs Office Location - Mohan Garden, New Delhi"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-8">
            For emergency HVAC services, call our 24/7 hotline
          </p>
          <a
            href="tel:+919990911982"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            <Phone size={24} />
            +91 9990911982
          </a>
        </div>
      </section>
    </div>
  );
}
