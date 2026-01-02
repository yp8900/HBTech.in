/*
  # Create HVAC Website Database Schema

  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key)
      - `customer_name` (text) - Name of the customer
      - `company` (text) - Company name
      - `review` (text) - Review content
      - `rating` (integer) - Rating out of 5
      - `location` (text) - Customer location
      - `created_at` (timestamptz)
      - `published` (boolean) - Whether to show on website
    
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text) - Project title
      - `description` (text) - Project description
      - `category` (text) - HVAC, BMS, etc.
      - `location` (text) - Project location
      - `image_url` (text) - Main project image
      - `completion_date` (date) - When project was completed
      - `created_at` (timestamptz)
      - `published` (boolean)
    
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text) - Blog post title
      - `slug` (text, unique) - URL-friendly slug
      - `content` (text) - Full blog content
      - `excerpt` (text) - Short excerpt
      - `image_url` (text) - Featured image
      - `author` (text) - Author name
      - `created_at` (timestamptz)
      - `published` (boolean)
    
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text) - Contact name
      - `email` (text) - Contact email
      - `phone` (text) - Contact phone
      - `service` (text) - Service interested in
      - `message` (text) - Message content
      - `created_at` (timestamptz)
      - `status` (text) - new, contacted, closed
    
    - `service_requests`
      - `id` (uuid, primary key)
      - `name` (text) - Customer name
      - `email` (text) - Customer email
      - `phone` (text) - Customer phone
      - `service_type` (text) - Type of service requested
      - `preferred_date` (date) - Preferred service date
      - `message` (text) - Additional details
      - `created_at` (timestamptz)
      - `status` (text) - pending, scheduled, completed

  2. Security
    - Enable RLS on all tables
    - Public read access for published content (testimonials, projects, blog_posts)
    - No public access to submissions (contact_submissions, service_requests)
*/

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  company text DEFAULT '',
  review text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  location text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  published boolean DEFAULT true
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  location text NOT NULL,
  image_url text DEFAULT '',
  completion_date date DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now(),
  published boolean DEFAULT true
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text NOT NULL,
  image_url text DEFAULT '',
  author text DEFAULT 'HBTechs Team',
  created_at timestamptz DEFAULT now(),
  published boolean DEFAULT true
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

-- Create service_requests table
CREATE TABLE IF NOT EXISTS service_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service_type text NOT NULL,
  preferred_date date,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Enable RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_requests ENABLE ROW LEVEL SECURITY;

-- Policies for testimonials (public read for published)
CREATE POLICY "Anyone can view published testimonials"
  ON testimonials FOR SELECT
  USING (published = true);

-- Policies for projects (public read for published)
CREATE POLICY "Anyone can view published projects"
  ON projects FOR SELECT
  USING (published = true);

-- Policies for blog_posts (public read for published)
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  USING (published = true);

-- Policies for contact_submissions (public insert only)
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

-- Policies for service_requests (public insert only)
CREATE POLICY "Anyone can submit service requests"
  ON service_requests FOR INSERT
  WITH CHECK (true);

-- Insert sample testimonials
INSERT INTO testimonials (customer_name, company, review, rating, location, published) VALUES
('Rajesh Kumar', 'Tech Park Industries', 'HBTechs provided excellent HVAC installation for our 50,000 sq ft facility. Their team was professional, timely, and the system works flawlessly. Highly recommended!', 5, 'Delhi NCR', true),
('Priya Sharma', 'Green Valley Resort', 'We have been using HBTechs for AMC services for 3 years. Their preventive maintenance has saved us from costly breakdowns. Great service!', 5, 'Gurgaon', true),
('Amit Patel', 'Metro Hospital', 'The BMS integration done by HBTechs has improved our energy efficiency by 30%. Professional team with deep technical knowledge.', 5, 'Noida', true),
('Sunita Mehta', 'Corporate Tower Ltd', 'Quick response time for emergency repairs. HBTechs team is available 24/7 and always delivers quality service.', 4, 'Delhi', true);

-- Insert sample projects
INSERT INTO projects (title, description, category, location, image_url, completion_date, published) VALUES
('Corporate Office HVAC Installation', 'Complete HVAC system design and installation for 100,000 sq ft corporate office including VRF systems, ducting, and BMS integration.', 'HVAC Installation', 'Cyber City, Gurgaon', 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800', '2025-11-15', true),
('Industrial Chiller Plant Setup', 'Installation of 500 TR chiller plant with cooling towers, pumps, and complete piping system for manufacturing facility.', 'Chiller Systems', 'Greater Noida', 'https://images.pexels.com/photos/1537008/pexels-photo-1537008.jpeg?auto=compress&cs=tinysrgb&w=800', '2025-09-20', true),
('Hotel Central AC System', 'VRV system installation for 150-room hotel with individual room controls and central BMS monitoring.', 'VRV/VRF Systems', 'Aerocity, Delhi', 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800', '2025-08-10', true),
('Hospital HVAC Upgrade', 'Complete HVAC system upgrade including AHUs, FCUs, and precision air conditioning for critical areas.', 'HVAC Upgrade', 'South Delhi', 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800', '2025-10-05', true);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, content, excerpt, image_url, author, published) VALUES
('Top 5 Signs Your HVAC System Needs Maintenance', 'top-5-signs-hvac-needs-maintenance', 'Regular HVAC maintenance is crucial for optimal performance and longevity. Here are the top 5 signs that indicate your system needs immediate attention:\n\n1. Unusual Noises: Grinding, squealing, or banging sounds indicate mechanical issues.\n2. Reduced Airflow: Weak airflow suggests duct blockages or compressor problems.\n3. Rising Energy Bills: Inefficient systems consume more power.\n4. Inconsistent Temperatures: Hot and cold spots indicate distribution issues.\n5. Bad Odors: Musty smells suggest mold or duct contamination.\n\nContact HBTechs for professional HVAC inspection and maintenance services.', 'Is your HVAC system showing signs of trouble? Learn the top 5 warning signs that indicate your system needs professional maintenance.', 'https://images.pexels.com/photos/5691608/pexels-photo-5691608.jpeg?auto=compress&cs=tinysrgb&w=800', 'HBTechs Technical Team', true),
('Understanding BMS: Building Management Systems Explained', 'understanding-bms-building-management-systems', 'Building Management Systems (BMS) are the backbone of modern commercial buildings. A BMS integrates and controls various building systems including HVAC, lighting, security, and fire safety.\n\nKey Benefits:\n- Energy Efficiency: Optimize energy consumption by 20-40%\n- Remote Monitoring: Control systems from anywhere\n- Predictive Maintenance: Identify issues before breakdowns\n- Improved Comfort: Automated climate control\n\nHBTechs specializes in BMS design, installation, and integration for commercial and industrial facilities.', 'Learn how Building Management Systems can transform your facility operations and reduce energy costs significantly.', 'https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=800', 'HBTechs Engineering Team', true),
('VRF vs VRV Systems: Which is Right for Your Building?', 'vrf-vs-vrv-systems-comparison', 'Variable Refrigerant Flow (VRF) and Variable Refrigerant Volume (VRV) systems are advanced HVAC solutions offering superior efficiency and flexibility.\n\nKey Advantages:\n- Individual zone control\n- Energy savings up to 30%\n- Quiet operation\n- Flexible installation\n- Heat recovery options\n\nIdeal for: Hotels, offices, hospitals, retail spaces\n\nHBTechs is an authorized dealer and installer of leading VRF/VRV brands. Contact us for customized solutions.', 'Comparing VRF and VRV systems to help you choose the best HVAC solution for your commercial building.', 'https://images.pexels.com/photos/8961337/pexels-photo-8961337.jpeg?auto=compress&cs=tinysrgb&w=800', 'HBTechs HVAC Specialists', true);
