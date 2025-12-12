// api/generate-campaign.js
// Safe handler: returns a sample campaign on GET or when body missing.
// Won't crash if req.body is undefined.

export default function handler(req, res) {
  try {
    // Accept GET for quick tests (returns sample), POST for real requests
    const defaultSample = {
      listing: {
        id: "sample-1",
        address: "123 Sample Street",
        bedrooms: 3,
        features: "Open-plan kitchen, pool, large garden",
        description: "A bright family home near schools and shops."
      },
      targetAudience: "Home Buyers"
    };

    // If method is GET, use the sample (so browser works)
    const payload = req.method === "GET" ? defaultSample : (req.body || defaultSample);

    const { listing, targetAudience } = payload;

    // If something is missing, return a helpful response rather than crash
    if (!listing) {
      return res.status(200).json({
        ok: true,
        note: "No listing provided — returning sample",
        sample: defaultSample
      });
    }

    // Build a simple campaign object (safe references)
    const campaign = {
      headline: `Discover ${listing.bedrooms || "a"}-Bedroom Living Near ${listing.address || "this area"}`,
      audience: targetAudience || "Home Buyers",
      primaryText: `Explore this property: ${listing.features || listing.description || "Great features!"}`,
      callToAction: "Learn More",
      platformCopy: {
        facebook: "Your dream home is only one click away!",
        instagram: "Step into luxury living. Tap to explore!",
        linkedin: "A premium listing opportunity for serious buyers."
      },
      listingMeta: {
        id: listing.id || null,
        address: listing.address || null,
        bedrooms: listing.bedrooms || null
      }
    };

    return res.status(200).json({ ok: true, campaign });
  } catch (err) {
    // Log error so we can see details in Vercel runtime logs
    console.error("generate-campaign error:", err);
    return res.status(500).json({ ok: false, error: err?.message || "unknown error" });
  }
}
