import { MessageCircleHeart, Award, Users, TrendingUp } from 'lucide-react';
import TestimonialForm from '../components/TestimonialForm';
import TestimonialsDisplay from '../components/TestimonialsDisplay';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-900 via-blue-950 to-dark-900 py-20">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-20 -left-20 animate-float"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-40 -right-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-20 left-1/2 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20 animate-gradient"></div>

          <div className="text-center max-w-3xl mx-auto relative">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 px-4 py-2 rounded-full mb-6 border border-cyan-500/20">
              <MessageCircleHeart className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Customer Reviews</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="gradient-text">What Our Clients Say</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Real experiences from real customers. Read their stories and share yours!
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-dark-800/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">4.8/5</div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-2">
                <MessageCircleHeart className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">350+</div>
              <div className="text-sm text-gray-400">Reviews</div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-gray-400">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Display Section */}
      <section className="py-16 bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Customer Testimonials
            </h2>
            <p className="text-gray-400 text-lg">
              Hear what our valued clients have to say about their experience
            </p>
          </div>

          <TestimonialsDisplay />
        </div>
      </section>

      {/* Review Form Section */}
      <section className="py-16 bg-gradient-to-br from-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Share Your Experience
              </h2>
              <p className="text-gray-400 text-lg">
                Your feedback helps us improve and helps others make informed decisions
              </p>
            </div>

            <TestimonialForm />
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 bg-dark-800/30">
        <div className="container-custom">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-6">Why Choose Us</h3>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <div className="glass-card px-6 py-3">
                <span className="text-cyan-400 font-semibold">Licensed & Insured</span>
              </div>
              <div className="glass-card px-6 py-3">
                <span className="text-cyan-400 font-semibold">Expert Technicians</span>
              </div>
              <div className="glass-card px-6 py-3">
                <span className="text-cyan-400 font-semibold">Quality Guaranteed</span>
              </div>
              <div className="glass-card px-6 py-3">
                <span className="text-cyan-400 font-semibold">15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
