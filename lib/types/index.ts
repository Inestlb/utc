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
  brand?: string;
}

// Types pour les catégories de produits IFM
export type IFMCategory = 
  | 'Capteurs'
  | 'Traitement d\'images'
  | 'Technologies de sécurité'
  | 'IO-Link'
  | 'Interface de câblage capteurs/actionneurs'
  | 'Technologies de connexion'
  | 'Alimentation en tension'
  | 'Accessoires';

export const IFM_CATEGORIES: Record<IFMCategory, string> = {
  'Capteurs': 'Capteurs',
  'Traitement d\'images': 'Traitement d\'images',
  'Technologies de sécurité': 'Technologies de sécurité',
  'IO-Link': 'IO-Link',
  'Interface de câblage capteurs/actionneurs': 'Interface de câblage capteurs/actionneurs',
  'Technologies de connexion': 'Technologies de connexion',
  'Alimentation en tension': 'Alimentation en tension',
  'Accessoires': 'Accessoires'
};

// Types pour les catégories de produits Lenze
export type LenzeCategory = 
  | 'Variateurs et servovariateurs'
  | 'Moteurs'
  | 'Motoréducteurs'
  | 'Réducteurs'
  | 'Solutions et passerelles llot'
  | 'Accessoires'
  | 'Software';

export const LENZE_CATEGORIES: Record<LenzeCategory, string> = {
  'Variateurs et servovariateurs': 'Variateurs et servovariateurs',
  'Moteurs': 'Moteurs',
  'Motoréducteurs': 'Motoréducteurs',
  'Réducteurs': 'Réducteurs',
  'Solutions et passerelles llot': 'Solutions et passerelles llot',
  'Accessoires': 'Accessoires',
  'Software': 'Software'
};

// Types pour les catégories de produits WAGO
export type WAGOCategory = 
  | 'Technologies de raccordement électriques'
  | 'Interfaces électroniques'
  | 'Techniques d\'automatisation';

export const WAGO_CATEGORIES: Record<WAGOCategory, string> = {
  'Technologies de raccordement électriques': 'Technologies de raccordement électriques',
  'Interfaces électroniques': 'Interfaces électroniques',
  'Techniques d\'automatisation': 'Techniques d\'automatisation'
};

// Types pour les sous-catégories de Variateurs et servovariateurs Lenze
export type LenzeVariateurSubCategory = 
  | 'Variateurs de vitesse'
  | 'Servovariateurs'
  | 'Produits antèrieurs - Variateurs de vitesse';

export const LENZE_VARIATEUR_SUBCATEGORIES: Record<LenzeVariateurSubCategory, string> = {
  'Variateurs de vitesse': 'Variateurs de vitesse',
  'Servovariateurs': 'Servovariateurs',
  'Produits antèrieurs - Variateurs de vitesse': 'Produits antèrieurs - Variateurs de vitesse'
};
