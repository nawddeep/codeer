/**
 * SEO Component
 * Manages meta tags, Open Graph, Twitter Cards, and structured data
 */

import { Helmet } from 'react-helmet-async';
import { companyInfo } from '../data';

const SEO = ({ 
  title = `${companyInfo.name} | Digital Agency`,
  description = companyInfo.description,
  image = '/og-image.jpg',
  url = 'https://codeer.dev',
  type = 'website'
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyInfo.name,
    description: companyInfo.description,
    url: url,
    logo: `${url}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: companyInfo.phone,
      contactType: 'customer service',
      email: companyInfo.email
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Street',
      addressLocality: 'Innovation City',
      addressRegion: 'CA',
      postalCode: '94000',
      addressCountry: 'US'
    },
    sameAs: [
      companyInfo.social.linkedin,
      companyInfo.social.twitter,
      companyInfo.social.instagram,
      companyInfo.social.github
    ],
    foundingDate: companyInfo.founded.toString(),
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 25
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="web development, mobile apps, digital agency, UI/UX design, React, software development, digital transformation" />
      <meta name="author" content={companyInfo.name} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={companyInfo.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@codeer" />

      {/* Additional Meta */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#6366f1" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
