"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Button from "@/components/button/Button";
import PurchaseSummaryCard from "@/components/card/PurchaseSummaryCard";
import PaymentAccordion from "@/components/payment/PaymentAccordion";
import { createOrderAndRedirect } from "./actions"; // Impor Server Action

// Komponen OrderTotalsCard tetap sama, hanya perlu sedikit penyesuaian
const OrderTotalsCard = ({ subtotal, adminFee, total, courseTitle }) => {
  const formatCurrency = (value) => `Rp ${value.toLocaleString("id-ID")}`;
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col gap-4">
      <h3 className="text-xl font-bold text-foreground">Ringkasan Pesanan</h3>
      <div className="space-y-3 text-gray-600">
        <div className="flex justify-between items-start gap-4">
          <span>Video Learning: {courseTitle}</span>
          <span className="flex-shrink-0 font-medium">
            {formatCurrency(subtotal)}
          </span>
        </div>
        <div className="flex justify-between items-start gap-4">
          <span>Biaya Admin</span>
          <span className="flex-shrink-0 font-medium">
            {formatCurrency(adminFee)}
          </span>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
        <span className="font-bold text-foreground">Total Pembayaran</span>
        <span className="font-bold text-primary-default text-lg">
          {formatCurrency(total)}
        </span>
      </div>
      {/* Tombol sekarang adalah tipe 'submit' untuk form */}
      <Button
        type="submit"
        variant="solid"
        color="primary"
        size="md"
        className="w-full mt-2"
      >
        Beli Sekarang
      </Button>
    </div>
  );
};

export default function PaymentClientPage({ course }) {
  const { status } = useSession();
  const [paymentMethods, setPaymentMethods] = useState({
    bankTransfer: [],
    eWallet: [],
    creditCard: [],
  });
  const [selectedMethod, setSelectedMethod] = useState(1);
  const [isFetchingMethods, setIsFetchingMethods] = useState(true);

  useEffect(() => {
    // ... useEffect untuk fetch payment methods tetap sama
  }, []);

  const discountedPrice = Number(course.price) / 2;
  const adminFee = 7000;
  const total = discountedPrice + adminFee;

  const courseIncludes = [
    {
      icon: "/assets/icons/icon-video.svg",
      text: `${course.chapters.reduce(
        (acc, chapter) => acc + chapter.lessons.length,
        0
      )} Video`,
    },
    { icon: "/assets/icons/icon-book.svg", text: "7 Dokumen" },
    { icon: "/assets/icons/icon-file-certificate.svg", text: "Sertifikat" },
    { icon: "/assets/icons/icon-file-edit.svg", text: "Pretest" },
  ];

  return (
    <form action={createOrderAndRedirect}>
      {/* Input tersembunyi untuk mengirim data ke Server Action */}
      <input type="hidden" name="courseId" value={course.id} />
      <input type="hidden" name="totalAmount" value={total} />
      <input type="hidden" name="paymentMethodId" value={selectedMethod} />

      <div className="min-h-screen">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 flex flex-col gap-y-8">
              <div className="lg:hidden">
                <PurchaseSummaryCard /* ...props... */ />
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm max-w-[798px]">
                <h2 className="text-xl font-bold text-foreground mb-6">
                  Metode Pembayaran
                </h2>
                {isFetchingMethods ? (
                  <p>Memuat metode pembayaran...</p>
                ) : (
                  <div className="space-y-4">
                    <PaymentAccordion
                      title="Transfer Bank"
                      methods={paymentMethods.bankTransfer}
                      selectedMethod={selectedMethod}
                      onSelectMethod={setSelectedMethod}
                    />
                    <PaymentAccordion
                      title="E-Wallet"
                      methods={paymentMethods.eWallet}
                      selectedMethod={selectedMethod}
                      onSelectMethod={setSelectedMethod}
                    />
                    <PaymentAccordion
                      title="Kartu Kredit/Debit"
                      methods={paymentMethods.creditCard}
                      selectedMethod={selectedMethod}
                      onSelectMethod={setSelectedMethod}
                    />
                  </div>
                )}
              </div>
              <OrderTotalsCard
                subtotal={discountedPrice}
                adminFee={adminFee}
                total={total}
                courseTitle={course.title}
              />
            </div>
            <div className="hidden lg:block lg:col-span-1 sticky top-28">
              <PurchaseSummaryCard /* ...props... */ />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
