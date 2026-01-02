# HBTechs.in - Professional HVAC & BMS Services Website

A modern, responsive website for HVAC and Building Management Systems (BMS) services, built with React, TypeScript, Tailwind CSS, and Supabase.

## Features

- **Multi-page website** with clean navigation
  - Homepage with hero section, services, and testimonials
  - About Us page with company information and values
  - Services page with detailed HVAC/BMS offerings
  - Projects portfolio with case studies
  - Blog/Resources section with SEO-optimized articles
  - Contact page with form and map integration

- **Professional Design**
  - Corporate blue and white theme
  - Mobile-responsive design
  - Smooth animations and transitions
  - SEO-optimized with meta tags

- **Dynamic Content**
  - Supabase database integration
  - Customer testimonials
  - Project showcase
  - Blog posts
  - Contact form submissions
  - Service request forms

- **Key Features**
  - Sticky navigation with click-to-call
  - Multiple CTAs throughout
  - Trust signals and certifications
  - Customer reviews
  - 24/7 emergency service highlighting
  - Google Maps integration

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Update the `.env` file with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Database Setup

The database schema has been automatically created with the following tables:
- `testimonials` - Customer reviews and ratings
- `projects` - Portfolio of completed projects
- `blog_posts` - Blog articles and resources
- `contact_submissions` - Contact form submissions
- `service_requests` - Service booking requests

Sample data has been pre-populated for testing.

### 4. Run Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx       # Sticky navigation with mobile menu
│   ├── Footer.tsx          # Footer with links and contact info
│   ├── ServiceRequestForm.tsx  # Service booking form
│   └── ContactForm.tsx     # Contact submission form
├── pages/
│   ├── HomePage.tsx        # Landing page
│   ├── AboutPage.tsx       # About us
│   ├── ServicesPage.tsx    # Services details
│   ├── ProjectsPage.tsx    # Portfolio showcase
│   ├── BlogPage.tsx        # Blog listing and detail views
│   └── ContactPage.tsx     # Contact page with map
├── lib/
│   └── supabase.ts         # Supabase client configuration
├── types.ts                # TypeScript interfaces
├── App.tsx                 # Main app with routing
└── main.tsx               # Entry point
```

## Key Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Supabase** - Backend and database
- **Vite** - Build tool
- **Lucide React** - Icons

## SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Descriptive page titles
- Keyword-rich content
- Fast loading performance
- Mobile-responsive design
- Local SEO for Delhi NCR

## Customization

### Update Contact Information

Edit the following files to update contact details:
- `src/components/Navigation.tsx` - Phone number in header
- `src/components/Footer.tsx` - Address, phone, email
- `src/pages/ContactPage.tsx` - All contact information

### Add New Services

Update `src/pages/HomePage.tsx` and `src/pages/ServicesPage.tsx` to add or modify service offerings.

### Modify Color Theme

The website uses a blue theme defined in Tailwind classes. To change colors, update the `blue-*` classes throughout the components.

## Database Access

All database tables use Row Level Security (RLS):
- Public can read published content (testimonials, projects, blog posts)
- Public can submit forms (contact submissions, service requests)
- Admin access required to manage content

## Support

For questions or support, contact the development team.

## License

Proprietary - All rights reserved by HBTechs.in
