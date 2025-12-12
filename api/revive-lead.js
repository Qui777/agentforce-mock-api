export default function handler(req, res) {
  const { name = "there", original = "", channel = "message" } = req.body || {};

  // Simple scoring to make reply feel urgent when original message is old/short
  const agePenalty = (original.length < 20) ? 0.2 : 0;
  const urgencyScore = Math.min(1, 0.5 + agePenalty + (Math.random() * 0.3));

  // Short, high-conversion follow-up templates
  const templates = [
    `Hi ${name} — quick follow-up: is this property still of interest? I can arrange a viewing this week if you'd like.`,
    `Hey ${name}, did you still want more info on the property? I can send available viewing times — what day works for you?`,
    `Hi ${name}, we had a viewing cancel — would you like first pick for a private tour?`
  ];

  // Pick template based on urgency
  const index = urgencyScore > 0.8 ? 2 : (urgencyScore > 0.6 ? 1 : 0);
  const suggestedMessage = templates[index];

  // Add a short recommended CTA (channel-specific)
  const cta = (channel === 'email') 
    ? 'Subject: Quick question about the property\n\n' + suggestedMessage + '\n\nThanks,' 
    : suggestedMessage + ' — reply with a time that works for you.';

  res.status(200).json({
    ok: true,
    suggestedMessage: cta,
    urgencyScore: Number(urgencyScore.toFixed(2)),
    original
  });
}
