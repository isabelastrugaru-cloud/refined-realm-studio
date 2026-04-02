import { site } from '@/config/sites';
import heroInterior from '@/assets/hero-interior.webp';
import luxuryBedroom from '@/assets/luxury-bedroom.webp';
import luxuryKitchen from '@/assets/luxury-kitchen.webp';

export interface ProjectData {
  id: number;
  slug: string;
  translationKey: string;
  category: string;
  area: string;
  year: string;
  location: string;
  image: string;
  sites: string[];
}

export const allProjects: ProjectData[] = [
  {
    id: 1,
    slug: 'penthouse-herastrau',
    translationKey: 'penthouseHerastrau',
    category: 'penthouse',
    area: '280 mp',
    year: '2023',
    location: 'Herăstrău, București',
    image: heroInterior,
    sites: ['bucuresti'],
  },
  {
    id: 2,
    slug: 'villa-pipera',
    translationKey: 'villaPipera',
    category: 'villa',
    area: '450 mp',
    year: '2023',
    location: 'Pipera, București',
    image: luxuryBedroom,
    sites: ['bucuresti'],
  },
  {
    id: 3,
    slug: 'apartament-primaverii',
    translationKey: 'apartamentPrimaverii',
    category: 'residential',
    area: '180 mp',
    year: '2022',
    location: 'Primăverii, București',
    image: luxuryKitchen,
    sites: ['bucuresti'],
  },
];

export const siteProjects = allProjects.filter(p => p.sites.includes(site.id));
