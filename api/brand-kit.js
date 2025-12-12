export default function handler(req, res) {
  // Mock saved data (in real apps this will come from a database)
  const brandKit = {
    agentName: "John Realtor",
    company: "Sunset Realty Group",
    logoUrl: "https://example.com/logo.png",
    brandColors: {
      primary: "#1A73E8",
      secondary: "#FFB800",
      accent: "#222222"
    },
    toneOfVoice: "Professional, warm, confident",
    disclaimer:
      "This information is deemed reliable but not guaranteed. Buyers are encouraged to verify all property details.",
    socialLinks: {
      facebook: "https://facebook.com/johnrealtor",
      instagram: "https://instagram.com/johnrealtor"
    }
  };

  res.status(200).json({
    message: "Brand kit loaded successfully",
    brandKit
  });
}
