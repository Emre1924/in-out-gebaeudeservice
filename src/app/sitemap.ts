import type { MetadataRoute } from 'next';
import { services, site } from '@/lib/site';

export default function sitemap():MetadataRoute.Sitemap { const routes=['','/leistungen','/ueber-uns','/einsatzgebiet','/kontakt'];return [...routes.map(route=>({url:`${site.url}${route}`,changeFrequency:'monthly' as const,priority:route===''?1:0.7})),...services.map(s=>({url:`${site.url}/leistungen/${s.slug}`,changeFrequency:'monthly' as const,priority:0.6}))]; }
