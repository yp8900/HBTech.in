import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Project } from '../types';
import { MapPin, Calendar, Building2, CheckCircle } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

export default function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState(true);

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
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Explore our portfolio of successful HVAC and BMS installations across Delhi NCR
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Loading projects...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-blue-600" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-blue-600" />
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
              <Building2 className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Project Process
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  From initial consultation to final commissioning, we follow a systematic
                  approach to ensure project success and client satisfaction.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Site Assessment</div>
                      <div className="text-sm text-gray-600">
                        Detailed evaluation and requirement analysis
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Design & Engineering</div>
                      <div className="text-sm text-gray-600">
                        Custom system design with energy optimization
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Installation</div>
                      <div className="text-sm text-gray-600">
                        Professional installation by certified technicians
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Testing & Commissioning</div>
                      <div className="text-sm text-gray-600">
                        Rigorous testing and system optimization
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-semibold text-gray-900">Training & Support</div>
                      <div className="text-sm text-gray-600">
                        Staff training and ongoing maintenance support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Project Statistics
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-1">500+</div>
                    <div className="text-gray-700">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-1">98%</div>
                    <div className="text-gray-700">Client Satisfaction Rate</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-1">15M+</div>
                    <div className="text-gray-700">Sq Ft Area Covered</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-1">300+</div>
                    <div className="text-gray-700">Active AMC Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
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
