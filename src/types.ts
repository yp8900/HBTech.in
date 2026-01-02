export interface Testimonial {
  id: string;
  customer_name: string;
  company: string;
  review: string;
  rating: number;
  location: string;
  created_at: string;
  published: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  image_url: string;
  completion_date: string;
  created_at: string;
  published: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image_url: string;
  author: string;
  created_at: string;
  published: boolean;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface ServiceRequest {
  name: string;
  email: string;
  phone: string;
  service_type: string;
  preferred_date: string;
  message: string;
}
