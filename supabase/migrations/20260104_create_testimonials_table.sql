-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  service_type VARCHAR(255),
  review_text TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  approved BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0
);

-- Create index on approved and display_order for efficient querying
CREATE INDEX idx_testimonials_approved ON testimonials(approved, display_order DESC);

-- Create index on created_at for sorting
CREATE INDEX idx_testimonials_created_at ON testimonials(created_at DESC);

-- Enable Row Level Security
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can submit a testimonial (insert)
CREATE POLICY "Anyone can submit testimonials"
  ON testimonials
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policy: Only approved testimonials can be read by public
CREATE POLICY "Public can view approved testimonials"
  ON testimonials
  FOR SELECT
  TO public
  USING (approved = true);

-- Add comment
COMMENT ON TABLE testimonials IS 'Customer testimonials and reviews with star ratings';
