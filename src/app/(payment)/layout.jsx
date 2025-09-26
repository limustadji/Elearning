import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";

export default function PaymentLayout({ children }) {
  return (
    <>
      <Navbar navType="payment" currentStep={0} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
