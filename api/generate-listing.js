export default function handler(req, res) {
  const { address, bedrooms, bathrooms, features } = req.body || {};

  res.status(200).json({
    address: address || "Unknown Property",
    generatedDescription: `
      Discover a beautifully updated home located at ${address}.
      Featuring ${bedrooms} spacious bedrooms, ${bathrooms} modern bathrooms,
      and standout features such as: ${features?.join(", ") || "no additional features listed"}.
      
      This property is ideal for buyers seeking comfort, style, and convenience.
    `,
    shortDescription: `${bedrooms} bed • ${bathrooms} bath • Prime location • Must see!`,
    headline: `Modern ${bedrooms}-Bedroom Home in a Great Area`,
  });
}
