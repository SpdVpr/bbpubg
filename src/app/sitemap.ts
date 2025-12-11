import { MetadataRoute } from 'next';
import { posts } from '@/data/posts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://bbpubg.com';

    // Static routes
    const routes = [
        '',
        '/news',
        '/armory',
        '/intel',
        '/loadout',
        '/game-info',
        '/about',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic blog routes
    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/news/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...routes, ...blogRoutes];
}
