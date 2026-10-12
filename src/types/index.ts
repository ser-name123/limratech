export interface Lead {
  id?: string;
  created_at?: string;
  full_name: string;
  email: string;
  phone?: string;
  service_needed?: string;
  budget?: string;
  message?: string;
  source_page?: string;
  status?: 'new' | 'contacted' | 'qualified' | 'closed' | 'archived';
}

export interface ContactInquiry {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  status?: 'unread' | 'in_progress' | 'resolved';
}

export interface NewsletterSubscriber {
  id?: string;
  created_at?: string;
  email: string;
  is_active?: boolean;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  full_description: string;
  icon: string;
  features: string[];
  tech_stack: string[];
  order_index?: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  category: string;
  tag: string;
  image_url: string;
  description: string;
  results?: string;
  client?: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  company_or_role: string;
  avatar: string;
  review: string;
  rating: number;
  platform: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  author: string;
  date: string;
  category: string;
  read_time: string;
  comments_count?: number;
}
