export default function handler(req, res) {
  const { buyerPreferences, listings } = req.body;

  const matched = listings.filter((item) => {
    return (
      item.bedrooms >= buyerPreferences.minBedrooms &&
      item.price <= buyerPreferences.maxPrice &&
      item.location.includes(buyerPreferences.location)
    );
  });

  res.status(200).json({
    matches: matched,
    total: matched.length
  });
}
