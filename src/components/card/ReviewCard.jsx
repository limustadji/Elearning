import React from "react";
import Image from "next/image";

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={i <= fullStars ? "text-yellow-400" : "text-gray-300"}
      >
        ★
      </span>
    );
  }
  return stars;
};

const ReviewCard = ({ name, role, avatarUrl, rating, comment }) => {
  return (
    // ==== PERUBAHAN DI SINI: Atur lebar dan cegah kartu menyusut ====
    <div className="flex flex-col gap-4 p-4 border border-gray-200 rounded-lg h-full w-[80vw] md:w-[48%] flex-shrink-0">
      {/* Bagian Atas: Avatar dan Nama */}
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 flex-shrink-0">
          <Image
            src={avatarUrl}
            alt={`Foto ${name}`}
            fill
            className="rounded-full object-cover"
            sizes="48px"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-foreground">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>

      {/* Bagian Tengah: Komentar */}
      <p className="text-base text-gray-600 leading-relaxed flex-grow">
        {comment}
      </p>

      {/* Bagian Bawah: Rating */}
      <div className="flex items-center gap-2">
        <div className="flex text-lg">{renderStars(rating)}</div>
        <span className="font-bold text-sm text-gray-700">
          {rating.toFixed(1)}
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
