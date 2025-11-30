/**
 * JSON-LD Schema.org structured data utilities
 * Used for SEO and rich results in Google Search
 */

export interface OrganizationSchema {
    name: string;
    url: string;
    logo: string;
    description?: string;
    sameAs?: string[];
    contactPoint?: {
        telephone: string;
        contactType: string;
        email?: string;
    };
    address?: {
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
    };
}

export interface WebSiteSchema {
    name: string;
    url: string;
    description?: string;
    potentialAction?: {
        target: string;
        queryInput: string;
    };
}

export interface ArticleSchema {
    headline: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified: string;
    author: {
        name: string;
    };
    publisher: {
        name: string;
        logo: string;
    };
}

export interface BreadcrumbSchema {
    itemListElement: Array<{
        position: number;
        name: string;
        item?: string;
    }>;
}

/**
 * Generate Organization JSON-LD schema
 */
export function generateOrganizationSchema(
    data: OrganizationSchema
): string {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: data.name,
        url: data.url,
        logo: data.logo,
        ...(data.description && { description: data.description }),
        ...(data.sameAs && { sameAs: data.sameAs }),
        ...(data.contactPoint && {
            contactPoint: {
                "@type": "ContactPoint",
                telephone: data.contactPoint.telephone,
                contactType: data.contactPoint.contactType,
                ...(data.contactPoint.email && { email: data.contactPoint.email }),
            },
        }),
        ...(data.address && {
            address: {
                "@type": "PostalAddress",
                streetAddress: data.address.streetAddress,
                addressLocality: data.address.addressLocality,
                addressRegion: data.address.addressRegion,
                postalCode: data.address.postalCode,
                addressCountry: data.address.addressCountry,
            },
        }),
    };

    return JSON.stringify(schema);
}

/**
 * Generate WebSite JSON-LD schema
 */
export function generateWebSiteSchema(data: WebSiteSchema): string {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: data.name,
        url: data.url,
        ...(data.description && { description: data.description }),
        ...(data.potentialAction && {
            potentialAction: {
                "@type": "SearchAction",
                target: data.potentialAction.target,
                "query-input": data.potentialAction.queryInput,
            },
        }),
    };

    return JSON.stringify(schema);
}

/**
 * Generate Article JSON-LD schema
 */
export function generateArticleSchema(data: ArticleSchema): string {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data.headline,
        description: data.description,
        image: data.image,
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        author: {
            "@type": "Person",
            name: data.author.name,
        },
        publisher: {
            "@type": "Organization",
            name: data.publisher.name,
            logo: {
                "@type": "ImageObject",
                url: data.publisher.logo,
            },
        },
    };

    return JSON.stringify(schema);
}

/**
 * Generate Breadcrumb JSON-LD schema
 */
export function generateBreadcrumbSchema(data: BreadcrumbSchema): string {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: data.itemListElement.map((item) => ({
            "@type": "ListItem",
            position: item.position,
            name: item.name,
            ...(item.item && { item: item.item }),
        })),
    };

    return JSON.stringify(schema);
}

/**
 * Generate LocalBusiness JSON-LD schema
 */
export function generateLocalBusinessSchema(data: {
    name: string;
    url: string;
    telephone: string;
    email: string;
    address: {
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
    };
    geo?: {
        latitude: number;
        longitude: number;
    };
    openingHours?: string[];
}): string {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: data.name,
        url: data.url,
        telephone: data.telephone,
        email: data.email,
        address: {
            "@type": "PostalAddress",
            streetAddress: data.address.streetAddress,
            addressLocality: data.address.addressLocality,
            addressRegion: data.address.addressRegion,
            postalCode: data.address.postalCode,
            addressCountry: data.address.addressCountry,
        },
        ...(data.geo && {
            geo: {
                "@type": "GeoCoordinates",
                latitude: data.geo.latitude,
                longitude: data.geo.longitude,
            },
        }),
        ...(data.openingHours && { openingHours: data.openingHours }),
    };

    return JSON.stringify(schema);
}
