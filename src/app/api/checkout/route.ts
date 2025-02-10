import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  try {
    const { name, email, address, city, postalCode } = await req.json();

    // ✅ Stripe Checkout Session Create Karein
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Sample Product",
              description: "A great product",
            },
            unit_amount: 1000, // ✅ $10.00 in cents
          },
          quantity: 1,
        },
      ],
    });

    return NextResponse.json({ url: session.url }); // ✅ Redirect to Stripe Checkout
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json({ error: "Error creating Stripe session" }, { status: 500 });
  }
}
