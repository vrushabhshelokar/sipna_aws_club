import { useEffect } from 'react';

/**
 * Reusable SEO Component.
 * Dynamically updates document.title, Meta descriptions, Open Graph tags,
 * and Twitter Card metadata without external heavy dependencies.
 * Strictly adheres to Rules.md Section 12 & Architecture.md Section 15.
 */
function SEO({
  title = 'Sipna AWS Club | Official Website',
  description = 'Official website of Sipna AWS Club at Sipna College of Engineering & Technology, Amravati. Empowering students with cloud computing and AWS technical skills.',
  image = '/og-image.png',
  url,
  type = 'website'
}) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector, attribute, attributeValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content || '');
    };

    const currentUrl = url || window.location.href;

    // 2. Standard Meta Tags
    updateMetaTag('meta[name="description"]', 'name', 'description', description);

    // 3. Open Graph Metadata
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', type);
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', image);

    // 4. Twitter Card Metadata
    updateMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', image);

  }, [title, description, image, url, type]);

  return null;
}

export default SEO;
