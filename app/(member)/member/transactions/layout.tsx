import { ReactNode } from "react";
import "@/styles/pages/sidebar.css";

export default function TransactionsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
