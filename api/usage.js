export default function handler(req, res) {
  res.status(200).json({
    usageToday: 14,
    usageThisMonth: 126,
    creditBalance: 42,
    recommendedUpgrade: "Pro Plan for unlimited video generation"
  });
}
