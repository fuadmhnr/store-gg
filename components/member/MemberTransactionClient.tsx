// components/member/MemberTransactionClient.tsx
"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/member/Sidebar";
import { Transaction } from "@/lib/types";
import "@/styles/pages/transactions.css";
import { formatPrice } from "@/lib/utils";

export default function MemberTransactionClient() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filter, setFilter] = useState<"*" | "success" | "pending" | "failed">(
    "*"
  );

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("http://localhost:8000/transactions");
        const result = await response.json();
        setTransactions(result);
      } catch (err) {
        console.log("error while fetching transactions: ", err);
      }
    };

    fetchTransactions();
  }, []);

  const filteredTransactions =
    filter === "*"
      ? transactions
      : transactions.filter((trx) => trx.category === filter);

  console.log(transactions);

  return (
    <section className="transactions overflow-auto">
      <Sidebar />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            My Transactions
          </h2>
          <div className="mb-30">
            <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
            <h3 className="text-5xl fw-medium color-palette-1">
              Rp 4.518.000.500
            </h3>
          </div>
          <div className="row mt-30 mb-20">
            <div className="col-lg-12 col-12 main-content">
              <div id="list_status_title">
                {["*", "success", "pending", "failed"].map((status, index) => (
                  <a
                    key={index}
                    data-filter={status}
                    href="#"
                    className={`btn btn-status rounded-pill text-sm me-3 ${
                      filter === status ? "btn-active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setFilter(status as typeof filter);
                    }}
                  >
                    {status === "*"
                      ? "All Trx"
                      : status.charAt(0).toUpperCase() + status.slice(1)}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Latest Transactions
            </p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="" scope="col">
                      Game
                    </th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody id="list_status_item">
                  {filteredTransactions.map((trx) => (
                    <tr key={trx.id} data-category={trx.category} className="align-middle">
                      <th scope="row">
                        <img
                          className="float-start me-3 mb-lg-0 mb-3"
                          src={trx.image}
                          width={80}
                          height={60}
                          alt=""
                        />
                        <div className="game-title-header">
                          <p className="game-title fw-medium text-start color-palette-1 m-0">
                            {trx.title}
                          </p>
                          <p className="text-xs fw-normal text-start color-palette-2 m-0">
                            {trx.platform}
                          </p>
                        </div>
                      </th>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">
                          {trx.item} Gold
                        </p>
                      </td>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">
                          {formatPrice(trx.price)}
                        </p>
                      </td>
                      <td>
                        <div>
                          <span className="float-start icon-status pending" />
                          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                          {trx.category.charAt(0).toUpperCase() + trx.category.slice(1)}
                          </p>
                        </div>
                      </td>
                      <td>
                        <a
                          href="../member/transactions-detail.html"
                          className="btn btn-status rounded-pill text-sm"
                        >
                          Details
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
