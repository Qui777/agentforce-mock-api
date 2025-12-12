export default function handler(req, res) {
  try {
    const { listing } = req.body || {};

    const matchedBuyers = [
      {
        name: "Alex Johnson",
        budget: "$450,000",
        requirements: "3-bedroom family home",
        score: 92
      },
      {
        name: "Priya Singh",
        budget: "$500,000",
        requirements: "Modern home with open-plan living",
        score: 88
      },
      {
        name: "Michael Chen",
        budget: "$480,000",
        requirements: "Investment property",
        score: 81
      }
    ];

    res.status(200).json({
      ok: true,
      buyers: matchedBuyers,
      listingMeta: listing || { note: "No listing provided. Using demo data." }
    });

  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
}

