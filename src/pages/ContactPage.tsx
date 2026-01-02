import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our HVAC experts for consultations, quotes, or support
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours.
                For urgent matters, please call us directly.
              </p>
              <div className="bg-white rounded-lg shadow-md p-6">
                <ContactForm />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-700">
                      123 Business Park, Sector 18<br />
                      Gurgaon, Haryana 122015<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone Numbers</h3>
                    <p className="text-gray-700">
                      <a href="tel:+919999999999" className="hover:text-blue-600">
                        +91 99999 99999
                      </a>
                      <br />
                      <a href="tel:+911244567890" className="hover:text-blue-600">
                        +91 124 456 7890
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">24/7 Emergency Hotline</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Addresses</h3>
                    <p className="text-gray-700">
                      <a href="mailto:info@hbtechs.in" className="hover:text-blue-600">
                        info@hbtechs.in
                      </a>
                      <br />
                      <a href="mailto:support@hbtechs.in" className="hover:text-blue-600">
                        support@hbtechs.in
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                    <p className="text-sm text-blue-600 mt-1 font-medium">
                      Emergency services available 24/7
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                <h3 className="font-semibold text-gray-900 mb-2">Service Areas</h3>
                <p className="text-gray-700">
                  We provide HVAC and BMS services across Delhi NCR including:
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-700">
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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Find Us on Map
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.48596931558!2d76.87492995!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurgaon%2C%20Haryana!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="HBTechs Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            For emergency HVAC services, call our 24/7 hotline
          </p>
          <a
            href="tel:+919999999999"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
          >
            <Phone size={24} />
            +91 99999 99999
          </a>
        </div>
      </section>
    </div>
  );
}
