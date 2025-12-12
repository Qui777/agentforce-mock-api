export default function handler(req, res) {
  res.status(200).json({
    id: "12345",
    address: "45 Sunset Drive",
    bedrooms: 3,
    bathrooms: 2,
    price: "$480,000",
    description:
      "A modern, sun-filled home with open-plan living, perfect for families or investors.",
  });
}
