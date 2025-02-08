"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // Importing shadcn Button
import { FaArrowRight } from "react-icons/fa";

export default function CheckoutButton() {
  const router = useRouter();

  return (
    <Button
      type="button"
      onClick={() => router.push("/checkout")} // Redirects to the checkout page
      className="text-sm md:text-base font-medium bg-black text-white rounded-full w-full py-4 h-[54px] md:h-[60px] group flex items-center justify-center space-x-2 transition-all hover:bg-gray-900"
    >
      <span>Go to Checkout</span>
      <FaArrowRight className="text-xl ml-2 group-hover:translate-x-1 transition-all" />
    </Button>
  );
}
