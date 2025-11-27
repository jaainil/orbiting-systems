import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  name?: string;
  image?: string;
  keywords?: string[];
  noindex?: boolean;
  author?: string;
  twitterCreator?: string;
  structuredData?: Record<string, unknown>;
  date?: string;
}

export const SEO = ({
  title,
  description,
  canonical,
  type = "website",
  name = "Aexaware Infotech",
  image = "/og-image.png",
  keywords = [],
  noindex = false,
  author = "Aexaware Infotech",
  twitterCreator = "@Aexaware",
  structuredData,
  schemaType,
  date,
}: SEOProps & { schemaType?: "article" | "website" | "local-business" | "organization" }) => {
  const siteUrl = "https://aexaware.com";
  const fullUrl = canonical ? (canonical.startsWith("http") ? canonical : `${siteUrl}${canonical}`) : siteUrl;
  
  // Ensure image path is clean
  const effectiveImage = image || "/og-image.png";
  const cleanImage = effectiveImage.startsWith("/") ? effectiveImage : `/${effectiveImage}`;
  const fullImage = effectiveImage.startsWith("http") ? effectiveImage : `${siteUrl}${cleanImage}`;

  // Base Schema
  const baseSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "Aexaware Infotech",
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/logo.png`, // Assuming logo exists or using a placeholder
          "width": 112,
          "height": 112
        },
        "description": "Aexaware Infotech is a full-service digital agency based in Anand, Gujarat, India. We build scalable web, mobile, AI/ML, and cloud solutions for startups and enterprises worldwide.",
        "email": "info@aexaware.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office no 13, 3rd Floor Aarya’s landmark, Canal Ring Road, Sevasi",
          "addressLocality": "Vadodara",
          "addressRegion": "Gujarat",
          "postalCode": "391101",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-81407-34392",
          "contactType": "customer service",
          "areaServed": "Worldwide",
          "availableLanguage": ["English", "Hindi", "Gujarati"]
        },
        "sameAs": [
          "https://www.linkedin.com/company/aexaware",
          "https://twitter.com/aexaware",
          "https://github.com/aexaware"
        ]
      }
    ]
  };

  // Local Business Schema
  if (schemaType === "local-business") {
    baseSchema["@graph"].push({
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#local-business`,
      "name": "Aexaware Infotech",
      "image": fullImage,
      "url": fullUrl,
      "telephone": "+91-81407-34392",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office no 13, 3rd Floor Aarya’s landmark, Canal Ring Road, Sevasi",
        "addressLocality": "Vadodara",
        "addressRegion": "Gujarat",
        "postalCode": "391101",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 22.310696,
        "longitude": 73.121132
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      ]
    });
  }

  // Article Schema
  if (schemaType === "article") {
    baseSchema["@graph"].push({
      "@type": "BlogPosting",
      "@id": `${fullUrl}#article`,
      "headline": title,
      "description": description,
      "image": fullImage,
      "datePublished": date || new Date().toISOString(),
      "dateModified": date || new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": author
      },
      "publisher": {
        "@id": `${siteUrl}/#organization`
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": fullUrl
      }
    });
  }

  // Merge custom structured data
  if (structuredData) {
    baseSchema["@graph"].push(structuredData);
  }

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterCreator} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(baseSchema)}
      </script>
    </Helmet>
  );
};

