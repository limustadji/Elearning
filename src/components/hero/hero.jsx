import React from "react";
import Button from "../button/Button";

const Hero = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div
        className="relative w-full h-auto md:h-100 bg-cover bg-center rounded-xl overflow-hidden"
        style={{ backgroundImage: "url('/assets/images/heroimage.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-16 md:pt-[82px] md:pb-[64px] md:px-[140px]">
          <div className="flex flex-col items-center gap-6 max-w-230">
            <h1 className="text-3xl md:text-5xl leading-tight">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
              Interaktif!
            </h1>
            <p className="text-base">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
              pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
              berpartisipasi dalam latihan interaktif yang akan meningkatkan
              pemahaman Anda.
            </p>
            <Button variant="solid" color="primary" size="md">
              Temukan Video Course untuk Dipelajari!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
