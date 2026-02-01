import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Project } from '../types';
import { MapPin, Calendar, Building2, CheckCircle } from 'lucide-react';
import Gallery3DCarousel from '../components/Gallery3DCarousel';
import GalleryMasonry from '../components/GalleryMasonry';

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

export default function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState(true);
  const [galleryView, setGalleryView] = useState<'3d' | 'masonry'>('3d');

  // Your HVAC field work photos - stored in public/images/gallery/
  const galleryImages = [
    '/images/gallery/field-work-1.jpg',
    '/images/gallery/field-work-2.jpg',
    '/images/gallery/field-work-3.jpg',
    '/images/gallery/field-work-4.jpg',
    '/images/gallery/field-work-5.jpg',
    '/images/gallery/field-work-6.jpg',
    '/images/gallery/field-work-7.jpg',
    '/images/gallery/field-work-8.jpg',
  ];

  const galleryCaptions = [
    'Commercial HVAC Installation - Gurgaon',
    'Client Site Meeting - Delhi',
    'BMS Control Panel Setup',
    'Rooftop Unit Installation',
    'Ductwork Installation Progress',
    'VRF System Commissioning',
    'Team at Project Site',
    'Completed Chiller Installation',
  ];

  // Second project gallery
  const gallery2Images = [
    '/images/gallery/project2-1.jpg',
    '/images/gallery/project2-2.jpg',
    '/images/gallery/project2-3.jpg',
    '/images/gallery/project2-4.jpg',
    '/images/gallery/project2-5.jpg',
    '/images/gallery/project2-6.jpg',
    '/images/gallery/project2-7.jpg',
    '/images/gallery/project2-8.jpg',
    '/images/gallery/project2-9.jpg',
    '/images/gallery/project2-10.jpg',
    '/images/gallery/project2-11.jpg',
  ];

  const gallery2Captions = [
    'Project Site Overview',
    'Equipment Installation',
    'Technical Team at Work',
    'System Installation Progress',
    'Detailed Installation Work',
    'Equipment Setup',
    'Installation Process',
    'Technical Implementation',
    'Team Collaboration',
    'Project Execution',
    'Final Setup Phase',
  ];

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('published', true)
      .order('completion_date', { ascending: false });

    if (data && !error) {
      setProjects(data);
    }
    setLoading(false);
  };

  const categories = [
    'All',
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
  };

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Projects</h1>
          <p className="text-xl md:text-2xl text-cyan-400 max-w-3xl mx-auto">
            Explore our portfolio of successful HVAC and BMS installations across Delhi NCR
          </p>
        </div>
      </section>

      {/* Field Work Gallery Section */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Our Work in Action
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              From site meetings to installations, see our team delivering excellence
            </p>
            
            {/* Gallery View Toggle */}
            <div className="flex justify-center gap-3 mb-8">
              <button
                onClick={() => setGalleryView('3d')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  galleryView === '3d'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'glass-card text-gray-300 hover:bg-dark-800/50'
                }`}
              >
                3D Carousel
              </button>
              <button
                onClick={() => setGalleryView('masonry')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  galleryView === 'masonry'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'glass-card text-gray-300 hover:bg-dark-800/50'
                }`}
              >
                Grid View
              </button>
            </div>
          </div>

          {galleryView === '3d' ? (
            <Gallery3DCarousel images={galleryImages} autoRotate={true} rotationSpeed={5000} />
          ) : (
            <GalleryMasonry images={galleryImages} captions={galleryCaptions} />
          )}
        </div>
      </section>

      {/* Second Project Gallery Section */}
      <section className="py-16 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Recent Installation Project
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Professional HVAC system installation and commissioning
            </p>
            
            {/* Gallery View Toggle */}
            <div className="flex justify-center gap-3 mb-8">
              <button
                onClick={() => setGalleryView('3d')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  galleryView === '3d'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'glass-card text-gray-300 hover:bg-dark-800/50'
                }`}
              >
                3D Carousel
              </button>
              <button
                onClick={() => setGalleryView('masonry')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  galleryView === 'masonry'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'glass-card text-gray-300 hover:bg-dark-800/50'
                }`}
              >
                Grid View
              </button>
            </div>
          </div>

          {galleryView === '3d' ? (
            <Gallery3DCarousel images={gallery2Images} autoRotate={true} rotationSpeed={5000} />
          ) : (
            <GalleryMasonry images={gallery2Images} captions={gallery2Captions} />
          )}
        </div>
      </section>

      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'glass-card text-gray-300 hover:bg-dark-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
              <p className="mt-4 text-gray-300">Loading projects...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="modern-card overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64 bg-dark-700 overflow-hidden">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-cyan-400" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-cyan-400" />
                        <span>Completed: {formatDate(project.completion_date)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <Building2 className="mx-auto text-gray-500 mb-4" size={48} />
              <p className="text-gray-400">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                  Our Project Process
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  From initial consultation to final commissioning, we follow a systematic
                  approach to ensure project success and client satisfaction.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-white">Site Assessment</div>
                      <div className="text-sm text-gray-400">
                        Detailed evaluation and requirement analysis
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-white">Design & Engineering</div>
                      <div className="text-sm text-gray-400">
                        Custom system design with energy optimization
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-white">Installation</div>
                      <div className="text-sm text-gray-400">
                        Professional installation by certified technicians
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-white">Testing & Commissioning</div>
                      <div className="text-sm text-gray-400">
                        Rigorous testing and system optimization
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-white">Training & Support</div>
                      <div className="text-sm text-gray-400">
                        Staff training and ongoing maintenance support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Project Statistics
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-cyan-400 mb-1">500+</div>
                    <div className="text-gray-300">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-cyan-400 mb-1">98%</div>
                    <div className="text-gray-300">Client Satisfaction Rate</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-cyan-400 mb-1">15M+</div>
                    <div className="text-gray-300">Sq Ft Area Covered</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-cyan-400 mb-1">300+</div>
                    <div className="text-gray-300">Active AMC Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Project Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your HVAC and BMS requirements and create a customized solution
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
