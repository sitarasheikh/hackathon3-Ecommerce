// src/components/apiData/apiProducts.ts

import { client } from "@/sanity/lib/client";
import { Product } from "@/types/product.types";

// GROQ query to fetch products from Sanity.
// Adjust the _type if needed (e.g., "products" vs "product")
const query = `*[_type == "products"][0..4] {
  _id,
  name,
  "srcUrl": image.asset->url,
  gallery,
  price,
  discount,
  rating
}`;

/**
 * Fetches products from Sanity using the above GROQ query
 * and maps them into your Product type shape.
 */
export async function getApiProducts(): Promise<Product[]> {
  const productsFromSanity = await client.fetch(query);
  
  // Map the data to match your static product shape.
  return productsFromSanity.map((prod: any) => ({
    id: prod._id,               // map _id to id (string is fine)
    title: prod.name,           // map name to title
    srcUrl: prod.srcUrl,        // alias defined in the query
    gallery: prod.gallery || [],
    price: prod.price,
    discount: prod.discount || { amount: 0, percentage: 0 },
    rating: prod.rating || 0,
    slug: prod.slug 
  }));
}