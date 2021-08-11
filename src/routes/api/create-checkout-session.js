const stripe = require("stripe")(
  "sk_test_51JMZa9SDkRdnJi4L2sOC6dJZp88CmF0yV1FSYMTq7sSk2YvjUDCDF1fdtboTAKlc8rwCzgsgZuwS2KMIQVq7h18C00izinBUZV"
);

export default async (req, res) => {
  const { email, items } = req.body;
  console.log(items);
  console.log(email);

  const transformedItems = items.map((item) => ({
    quantity: item.qty,
    price_data: {
      currency: "usd",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.media.thumbUrl],
      },
    },
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: transformedItems,
    mode: "payment",
    success_url: `http://localhost:3000/success`,
    cancel_url: `http://localhost:3000/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.media.thumbUrl)),
    },
  });

  res.status(200).json({ id: session.id });
};
