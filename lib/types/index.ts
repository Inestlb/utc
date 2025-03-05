export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  specifications: Record<string, string>;
  image: string;
  featured?: boolean;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ProductFilterOptions {
  category?: string;
  subcategory?: string;
  search?: string;
  page?: number;
}
