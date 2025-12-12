export default function handler(req, res) {
  const usage = {
    creditsRemaining: 120,
    lastGeneratedAt: new Date().toISOString(),
    monthlyUsage: {
      videosGenerated: 6,
      listingsGenerated: 12,
      campaignsGenerated: 3
    },
    plan: {
      name: "Starter",
      monthlyLimitCredits: 1000
    }
  };

  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ ok: true, usage });
}
