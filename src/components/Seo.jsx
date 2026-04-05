import { useEffect } from 'react';
import { siteConfig } from '../content/site';

const setHeadTag = (selector, createTag) => {
    let tag = document.head.querySelector(selector);

    if (!tag) {
        tag = createTag();
        document.head.appendChild(tag);
    }

    return tag;
};

const Seo = ({ title, description, path = '/' }) => {
    useEffect(() => {
        const pageUrl = new URL(path, `${siteConfig.seo.url}/`).toString().replace(/\/$/, path === '/' ? '' : '/');
        const pageTitle = `${title} | ${siteConfig.brand.name}`;

        document.title = pageTitle;

        setHeadTag('meta[name="description"]', () => {
            const meta = document.createElement('meta');
            meta.name = 'description';
            return meta;
        }).setAttribute('content', description);

        setHeadTag('meta[property="og:title"]', () => {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:title');
            return meta;
        }).setAttribute('content', pageTitle);

        setHeadTag('meta[property="og:description"]', () => {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:description');
            return meta;
        }).setAttribute('content', description);

        setHeadTag('meta[property="og:url"]', () => {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:url');
            return meta;
        }).setAttribute('content', pageUrl);

        setHeadTag('meta[name="twitter:title"]', () => {
            const meta = document.createElement('meta');
            meta.name = 'twitter:title';
            return meta;
        }).setAttribute('content', pageTitle);

        setHeadTag('meta[name="twitter:description"]', () => {
            const meta = document.createElement('meta');
            meta.name = 'twitter:description';
            return meta;
        }).setAttribute('content', description);

        setHeadTag('link[rel="canonical"]', () => {
            const link = document.createElement('link');
            link.rel = 'canonical';
            return link;
        }).setAttribute('href', pageUrl);
    }, [description, path, title]);

    return null;
};

export default Seo;
