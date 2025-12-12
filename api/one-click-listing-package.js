// /api/one-click-listing-package.js
export default function handler(req, res) {
  try {
    // Accept POST body (real use) or use sample data for GET/test
    const sampleListing = {
      id: "sample-1",
      address: "123 Sample Street",
      price: "$420,000",
      bedrooms: 3,
      bathrooms: 2,
      features: ["Open-plan kitchen", "Pool", "Large garden"],
      photos: [
        "https://placehold.co/800x600?text=front",
        "https://placehold.co/800x600?text=lounge",
        "https://placehold.co/800x600?text=kitchen"
      ]
    };

    const listing = (req.method === "POST" && Object.keys(req.body || {}).length > 0)
      ? req.body
      : sampleListing;

    // Build a one-click package
    const packageObj = {
      ok: true,
      listingMeta: {
        id: listing.id || "unknown",
        address: listing.address || "Unknown address",
        price: listing.price || "Price on request",
        bedrooms: listing.bedrooms || 0,
        bathrooms: listing.bathrooms || 0
      },
      images: listing.photos || [],
      brochure: {
        title: `Brochure: ${listing.address || "Property"}`,
        bullets: [
          `${listing.bedrooms || 0} bedrooms • ${listing.bathrooms || 0} bathrooms`,
          listing.features ? listing.features.join(" • ") : "Key features on request",
          listing.price || "Price on request"
        ],
        downloadLink: "https://example.com/brochure/sample-brochure.pdf" // replace with real link when available
      },
      captions: {
        short: `${listing.bedrooms || "A"}-bed • ${listing.bathrooms || ""}bath • ${listing.address || ""} — Click to view!`,
        long: `Discover this ${listing.bedrooms || "spacious"}-bedroom property at ${listing.address || "a great location"}. Features include: ${listing.features ? listing.features.join(", ") : "no features listed"}. Contact us for a viewing.`
      },
      socialPosts: {
        facebook: {
          copy: `Your dream home is here — ${listing.address || ""}. ${listing.price || ""}. View photos & book a viewing.`,
          suggestedImage: (listing.photos && listing.photos[0]) || null,
          cta: "Learn More"
        },
        instagram: {
          copy: `${listing.address || ""} • ${listing.price || ""} • ${listing.features ? listing.features.slice(0,3).join(", ") : ""} — Tap to view the full gallery.`,
          hashtags: ["#newlisting","#dreamhome","#realestate"]
        },
        linkedin: {
          copy: `Premium listing: ${listing.address || ""}. Ideal for buyers and investors. Contact for full details.`,
          audience: "Professionals"
        }
      },
      adCopy: {
        headline: `Discover ${listing.bedrooms || ""}-Bedroom Living Near ${listing.address || ""}`,
        primaryText: `Explore this property: ${listing.features ? listing.features.slice(0,3).join(", ") : listing.bedrooms + " bedrooms"}. Book a viewing today.`,
        cta: "Learn More"
      },
      extras: {
        suggestedPriceStrategy: {
          listPrice: listing.price || "TBD",
          promotionalSuggestion: "Open house weekend discount / price flexibility if sold within 30 days"
        }
      },
      generatedAt: new Date().toISOString()
    };

    return res.status(200).json(packageObj);
  } catch (err) {
    // Helpful error message for troubleshooting
    console.error("one-click package error:", err);
    return res.status(500).json({ ok: false, error: err.message || "Server error" });
  }
}
