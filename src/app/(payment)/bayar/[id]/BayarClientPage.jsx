"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PurchaseSummaryCard from "@/components/card/PurchaseSummaryCard";
import Button from "@/components/button/Button";
import CountdownTimer from "@/components/payment/CountdownTimer";
import InstructionAccordion from "@/components/payment/InstructionAccordion";

const BayarClientPage = ({ orderData }) => {
  const router = useRouter();

  const { course, invoice, total_amount } = orderData;
  const paymentMethod = invoice.payment_method;

  const instructions = {
    atm: (
      <ol className="list-decimal pl-5 space-y-2">
        <li>Masukkan kartu ATM dan PIN Anda.</li>
        <li>
          Di menu utama, pilih "Transaksi Lainnya". Pilih "Transfer". Pilih "Ke
          BCA Virtual Account".
        </li>
        <li>Masukkan nomor Virtual Account Anda.</li>
        <li>
          Pastikan data Virtual Account Anda benar, kemudian masukkan angka yang
          perlu Anda bayarkan, kemudian pilih "Benar".
        </li>
        <li>
          Cek dan perhatikan konfirmasi pembayaran dari layar ATM. Jika sudah
          benar, pilih "Ya", atau pilih "Tidak" jika data di layar masih salah.
        </li>
        <li>
          Transaksi Anda sudah selesai. Pilih "Tidak" untuk tidak melanjutkan
          transaksi lain.
        </li>
      </ol>
    ),
    mobile: (
      <ol className="list-decimal pl-5 space-y-2">
        <li>Buka Aplikasi BCA Mobile.</li>
        <li>
          Pilih "m-Transfer", kemudian pilih "m-Transfer". Pilih "BCA Virtual
          Account".
        </li>
        <li>Masukkan nomor Virtual Account, lalu pilih "Ok".</li>
        <li>
          Pilih tombol "Send" yang berada di sudut kanan atas aplikasi untuk
          melakukan transfer.
        </li>
        <li>Klik "Ok" untuk melanjutkan pembayaran.</li>
        <li>Masukkan PIN Anda untuk otorisasi transaksi.</li>
        <li>Transaksi Anda telah selesai.</li>
      </ol>
    ),
    internet: (
      <ol className="list-decimal pl-5 space-y-2">
        <li>Login ke KlikBCA Individual.</li>
        <li>
          Pilih "Transfer", kemudian pilih "Transfer ke BCA Virtual Account".
        </li>
        <li>Masukkan nomor Virtual Account.</li>
        <li>Pilih "Lanjutkan" untuk melanjutkan pembayaran.</li>
        <li>
          Masukkan "RESPON KEYBCA APPLI 1" yang muncul pada token BCA Anda, lalu
          klik "Kirim".
        </li>
        <li>Pembayaran telah selesai.</li>
      </ol>
    ),
  };

  const courseIncludes = [
    { icon: "/assets/icons/icon-file-check.svg", text: "Ujian Akhir" },
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

  const subtotal = Number(total_amount) - 7000;
  const adminFee = 7000;

  return (
    <div className="min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex items-center justify-center bg-orange-100 text-orange-800 p-4 rounded-lg mb-8">
          <p className="mr-4">Selesaikan pemesanan dalam</p>
          <CountdownTimer initialMinutes={10} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 flex flex-col gap-y-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Metode Pembayaran
              </h2>
              <div className="flex justify-center mb-2">
                <Image
                  src={paymentMethod.logo_url}
                  alt={paymentMethod.name}
                  width={100}
                  height={35}
                />
              </div>
              <p className="text-gray-600">{paymentMethod.name}</p>
              <div className="flex items-center justify-center gap-4 my-4">
                <p className="text-2xl font-bold text-foreground tracking-wider">
                  {invoice.invoice_number.replace("INV-", "").substring(0, 16)}
                </p>
                <button className="text-red-500 font-bold hover:underline">
                  Salin
                </button>
              </div>
            </div>
            <div className="lg:hidden">
              <PurchaseSummaryCard
                title={course.title}
                price={Number(course.price)}
                discountedPrice={subtotal}
                discountPercentage={50}
                includes={courseIncludes}
                language="Bahasa Indonesia"
                imageUrl={course.thumbnail_url}
              />
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-4">
              <h3 className="text-xl font-bold text-foreground">
                Ringkasan Pesanan
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between items-start gap-4">
                  <span>Video Learning: {course.title}</span>
                  <span className="flex-shrink-0 font-medium">
                    Rp {subtotal.toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <span>Biaya Admin</span>
                  <span className="flex-shrink-0 font-medium">
                    Rp {adminFee.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                <span className="font-bold text-foreground">
                  Total Pembayaran
                </span>
                <span className="font-bold text-primary-default text-lg">
                  Rp {Number(total_amount).toLocaleString("id-ID")}
                </span>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <Button
                  variant="outline"
                  color="primary"
                  size="md"
                  className="w-full"
                  onClick={() => router.back()}
                >
                  Ganti Metode Pembayaran
                </Button>
                <Button
                  variant="solid"
                  color="primary"
                  size="md"
                  className="w-full"
                  onClick={() => router.push("/infopayment?status=success")}
                >
                  Saya Sudah Bayar
                </Button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-6">
                Tata Cara Pembayaran
              </h2>
              <div className="space-y-4">
                <InstructionAccordion title="ATM BCA">
                  {instructions.atm}
                </InstructionAccordion>
                <InstructionAccordion title="Mobile Banking BCA">
                  {instructions.mobile}
                </InstructionAccordion>
                <InstructionAccordion title="Internet Banking BCA">
                  {instructions.internet}
                </InstructionAccordion>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-1 sticky top-28">
            <PurchaseSummaryCard
              title={course.title}
              price={Number(course.price)}
              discountedPrice={subtotal}
              discountPercentage={50}
              includes={courseIncludes}
              language="Bahasa Indonesia"
              imageUrl={course.thumbnail_url}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BayarClientPage;
