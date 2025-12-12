export default function handler(req, res) {
  // Accept a simple payload (title, audience, tone) — but robustly handle missing fields
  const { title = "New Listing", audience = "local buyers", tone = "friendly" } = req.body || {};

  // Simple 4-day campaign example (TikTok, Instagram, Email, Facebook)
  const campaign = [
    {
      day: 1,
      platform: "TikTok",
      content: {
        hook: "You won't believe this kitchen...",
        script: `Quick walkthrough of ${title}. Hook, reveal the kitchen, short CTA: "See the full listing."`,
        lengthSeconds: 20
      }
    },
    {
      day: 2,
      platform: "Instagram",
      content: {
        type: "Carousel",
        captions: [
          `Slide 1: Headline - ${title}`,
          `Slide 2: Top features for ${audience}`,
          `Slide 3: CTA - Link in bio`
        ],
        suggestedHashtags: ["#OpenHouse", "#HomeTour", "#RealEstate"]
      }
    },
    {
      day: 3,
      platform: "Email",
      content: {
        subject: `${title} — Open House This Weekend`,
        body: `Hi — quick invite: join us for an open house this weekend. Highlights: great schools, modern kitchen, quick commute. RSVP link included.`,
        cta: "RSVP for the open house"
      }
    },
    {
      day: 4,
      platform: "Facebook",
      content: {
        type: "Local Group Post",
        copy: `Listing alert: ${title} in your area. Perfect for ${audience}. DM to schedule a viewing.`,
        callToAction: "Message to schedule"
      }
    }
  ];

  // Add a tiny audit / summary useful for the UI
  const summary = {
    title,
    audience,
    tone,
    days: campaign.length,
    topPlatforms: ["TikTok", "Instagram", "Email", "Facebook"]
  };

  // Return campaign and summary
  res.status(200).json({ ok: true, summary, campaign });
}
