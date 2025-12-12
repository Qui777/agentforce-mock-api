export default function handler(req, res) {
  const { buyer = {}, property = {} } = req.body || {};

  const score = Math.round(Math.random() * 40 + 60); // 60–100% match

  const matchReasons = [
    "Matches preferred location",
    "Within buyer's price range",
    "Has key features they want",
    "Good investment potential",
    "Low maintenance property"
  ];

  const selectedReasons = matchReasons.slice(0, Math.floor(score / 20));

  res.status(200).json({
    ok: true,
    matchScore: score,
    reasons: selectedReasons,
    buyer,
    property
  });
}
