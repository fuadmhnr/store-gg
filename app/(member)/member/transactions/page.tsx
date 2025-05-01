import { Metadata } from "next";
import MemberTransactionClient from "@/components/member/MemberTransactionClient";

export const metadata: Metadata = {
  title: "Member Transactions | Store GG",
};

export default function MemberTransactionPage() {
  return <MemberTransactionClient />;
}
