import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Checkout product games",
};

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
