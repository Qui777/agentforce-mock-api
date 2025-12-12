export default function handler(req, res) {
  const { listing, targetAudience } = req.body;

  const campaign = {
    headline: `Discover ${listing.bedrooms}-Bedroom Living Near ${listing.address}`,
    audience: targetAudience || "Home Buyers",
    primaryText: `Explore this beautiful property featuring ${listing.features || listing.description}. Book a viewing today!`,
    callToAction: "Learn More",
    platformCopy: {
      facebook: "Your dream home is only one click away! 🏡",
      instagram: "Step into luxury living. Tap to explore!",
      linkedin: "A premium listing opportunity for serious buyers."
    }
  };

  res.status(200).json({ campaign });
}
