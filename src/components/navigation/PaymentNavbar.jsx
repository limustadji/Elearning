"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const PaymentNavbar = () => {
  const pathname = usePathname();
  let currentStep = 1;
  if (pathname.includes("/bayar")) {
    currentStep = 1;
  } else if (pathname.includes("/selesai")) {
    currentStep = 2;
  } else {
    currentStep = 0;
  }

  return <Navbar navType="payment" currentStep={currentStep} />;
};

export default PaymentNavbar;
