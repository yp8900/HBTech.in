import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Testimonial {
  id: string;
  name: string;
  rating: number;
  service_type: string | null;
  review_text: string;
  created_at: string;
}

export default function TestimonialsDisplay() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('approved', true)
        .order('display_order', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={20}
            className={`${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
        <p className="text-gray-300 mt-4">Loading testimonials...</p>
      </div>
    );
  }

  if (testimonials.length === 0) {
    return (
      <div className="text-center py-12">
        <Quote className="w-16 h-16 text-gray-600 mx-auto mb-4" />
        <p className="text-gray-400 text-lg">No testimonials yet. Be the first to share your experience!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="modern-card group hover:scale-105 transition-transform duration-300"
        >
          {/* Quote Icon */}
          <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Quote className="w-12 h-12 text-cyan-400" />
          </div>

          {/* Header */}
          <div className="relative">
            <h3 className="text-xl font-bold text-white mb-1">{testimonial.name}</h3>
            {testimonial.service_type && (
              <p className="text-sm text-cyan-400 mb-3">{testimonial.service_type}</p>
            )}
            
            {/* Star Rating */}
            <div className="flex items-center gap-3 mb-4">
              {renderStars(testimonial.rating)}
              <span className="text-sm text-gray-400">
                {testimonial.rating}/5
              </span>
            </div>
          </div>

          {/* Review Text */}
          <p className="text-gray-300 leading-relaxed mb-4 relative z-10">
            "{testimonial.review_text}"
          </p>

          {/* Date */}
          <div className="text-sm text-gray-500 border-t border-gray-700 pt-3">
            {formatDate(testimonial.created_at)}
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
}
