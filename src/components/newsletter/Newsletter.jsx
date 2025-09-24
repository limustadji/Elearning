import React from "react";
import Button from "../button/Button";

const Newsletter = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div
        className="relative w-full h-auto md:h-100 bg-cover bg-center rounded-xl overflow-hidden"
        style={{ backgroundImage: "url('/assets/images/newsletterimage.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white py-16 px-5 lg:py-[92px] lg:px-[337.5px]">
          <div className="flex flex-col items-center gap-4 w-131">
            <p className="font-medium text-lg tracking-widest">NEWSLETTER</p>
            <h2 className="lg:text-4xl">Mau Belajar Lebih Banyak?</h2>
            <p className="max-w-lg">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
              spesial dari program-program terbaik hariesok.id
            </p>
            <form className="mt-4 w-full max-w-md">
              <div className="hidden md:flex bg-white rounded-lg p-1.5">
                <input
                  type="email"
                  placeholder="Masukkan Emailmu"
                  className="w-full flex-grow bg-transparent border-none text-foreground placeholder-gray-400 px-4 focus:ring-0"
                />
                <Button variant="solid" color="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
              <div className="md:hidden flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Masukkan Emailmu"
                  className="w-full bg-white border-none text-gray-700 placeholder-gray-400 px-4 py-3 rounded-lg focus:ring-0"
                />
                <Button
                  variant="solid"
                  color="secondary"
                  size="md"
                  className="w-full"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
