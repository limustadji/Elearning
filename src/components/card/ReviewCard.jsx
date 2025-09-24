import React from "react";
import Image from "next/image";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={i <= rating ? "text-yellow-400" : "text-gray-300"}
      >
        ★
      </span>
    );
  }
  return stars;
};

const ReviewCard = ({ name, role, avatarUrl, rating, comment }) => {
  return (
    <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
      <div className="relative h-16 w-16 flex-shrink-0">
        <Image
          src={avatarUrl}
          alt={`Foto ${name}`}
          fill
          className="rounded-full object-cover"
          sizes="64px"
        />
      </div>
      <div className="flex flex-col">
        <h4 className="text-lg font-bold text-foreground">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex">{renderStars(rating)}</div>
          <span className="font-bold text-sm">{rating.toFixed(1)}</span>
        </div>
        {comment && (
          <p className="text-base text-gray-600 mt-2 leading-relaxed">
            {comment}
          </p>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
