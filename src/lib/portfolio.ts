import editorial from '@/assets/influencer-editorial.jpg';
import bag from '@/assets/campaign-bag.jpg';
import travel from '@/assets/campaign-travel.jpg';
export { editorial };
export const projects = [
 { title: 'The art of everyday', brand: 'FASHION · EDITORIAL', image: bag, description: 'An exploration of considered details, quiet confidence, and a wardrobe that tells a story.' },
 { title: 'Somewhere by the sea', brand: 'TRAVEL · LIFESTYLE', image: travel, description: 'A sun-drenched visual diary celebrating slow mornings and a different kind of escape.' },
 { title: 'A new perspective', brand: 'STYLE · CREATIVE DIRECTION', image: editorial, description: 'Modern tailoring meets Mediterranean architecture in an editorial about making your own rules.' },
];
export function pageHead(title: string, description: string) {
 return { meta: [{ title: `${title} — Elena Rose` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} — Elena Rose` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
export function downloadText(text: string, filename: string) {
 const url = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
 const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url);
}
