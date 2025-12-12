export default function handler(req, res) {
  const { address, bedrooms, bathrooms, features } = req.body || {};

  const script = `
    Welcome to this stunning property located at ${address}.
    Featuring ${bedrooms} bedrooms and ${bathrooms} bathrooms,
    this home offers impressive features including:
    ${features?.join(", ") || "modern finishes throughout"}.

    Take a look inside and discover why this property stands out in today's market.
  `;

  res.status(200).json({
    success: true,
    message: "Video script generated successfully.",
    videoScript: script.trim(),
    estimatedVideoLength: "30-45 seconds",
  });
}
