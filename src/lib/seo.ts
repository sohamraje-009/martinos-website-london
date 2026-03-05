import { siteConfig, testimonials } from "@/content/site";

export function getRestaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    description: siteConfig.description,
    servesCuisine: "Italian",
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "14 Mayfair Lane",
      addressLocality: "London",
      postalCode: "W1K 6JP",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    url: siteConfig.url,
    hasMap: siteConfig.googleMapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "12:00",
        closes: "23:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "128",
    },
    review: testimonials.map((review) => ({
      "@type": "Review",
      author: review.name,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.quote,
    })),
  };
}
