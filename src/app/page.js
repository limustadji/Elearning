// src/app/page.js

import LoginForm from "@/components/form/LoginForm";
import RegisterForm from "@/components/form/RegisterForm";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 bg-gray-50 p-8 md:flex-row md:items-start">
      {/* Contoh Varian Default (Desktop) */}
      <div>
        <h2 className="mb-4 text-center text-2xl font-bold">Desktop Form</h2>
        <RegisterForm variant="default" />
      </div>

      {/* Contoh Varian Mobile */}
      <div>
        <h2 className="mb-4 text-center text-2xl font-bold">Mobile Form</h2>
        <RegisterForm variant="mobile" />
      </div>
    </div>
  );
}
