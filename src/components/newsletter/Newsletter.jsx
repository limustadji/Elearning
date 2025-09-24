import React from "react";
import Button from "../button/Button";

const Newsletter = () => {
  return (
    <div
      className="relative bg-cover bg-center rounded-xl overflow-hidden w-full max-w-sm lg:max-w-[1200px] h-auto lg:h-[400px] mx-auto shadow-lg"
      style={{ backgroundImage: "url('/assets/images/newsletterimage.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white py-16 px-5 lg:py-[92px] lg:px-[337.5px]">
        <div className="flex flex-col items-center gap-4">
          <p className="font-bold text-sm tracking-widest">NEWSLETTER</p>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Mau Belajar Lebih Banyak?
          </h2>
          <p className="max-w-lg">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik hariesok.id
          </p>
          <form className="mt-4 w-full max-w-md">
            <div className="hidden md:flex bg-white rounded-lg p-1.5">
              <input
                type="email"
                placeholder="Masukkan Emailmu"
                className="w-full flex-grow bg-transparent border-none text-gray-700 placeholder-gray-400 px-4 focus:ring-0"
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
  );
};

export default Newsletter;
