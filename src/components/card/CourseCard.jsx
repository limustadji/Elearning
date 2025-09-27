import { formatRupiah, renderStars } from "@/lib/utils";
import React from "react";
import Image from "next/image";

const CourseCard = ({
  variant = "default",
  isPriority = false,
  title = "Big 4 Auditor Financial Analyst",
  description = "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
  authorName = "Jenna Ortega",
  authorRole = "Senior Accountant",
  authorCompany = "Gojek",
  authorImage = "/assets/images/avatar3.jpg",
  rating = 3.5,
  reviewCount = 86,
  price = 300000,
  discountedPrice,
  imageUrl = "/assets/images/cover7.jpg",
}) => {
  const mobileClasses =
    "flex w-full max-w-sm flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-4 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1";

  if (variant === "mobile") {
    return <div className={mobileClasses}></div>;
  }

  const defaultClasses =
    "flex w-full flex-col rounded-xl border border-gray-200 bg-white p-5 h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2";

  return (
    <div className={defaultClasses}>
      <div className="relative w-full aspect-video">
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority={isPriority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-grow flex-col gap-2 pt-4">
        <h6 className="text-lg font-bold">{title}</h6>
        <p className="text-base text-gray-600 line-clamp-2">{description}</p>
        <div className="flex items-center gap-3 pt-2">
          <div className="relative h-10 w-10">
            <Image
              src={authorImage}
              alt={authorName}
              fill
              sizes="40px"
              className="rounded-xl object-cover"
            />
          </div>
          <div>
            <p className="font-semibold">{authorName}</p>
            <p className="text-xs">
              {authorRole}
              <span> di </span>
              <span className="font-bold">{authorCompany}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-auto flex items-center justify-between pt-4">
        <div className="flex items-center gap-1">
          <div className="flex">{renderStars()}</div>
          <span className="text-sm ">
            {rating} ({reviewCount})
          </span>
        </div>
        {variant === "discount" && discountedPrice ? (
          <div className="flex items-center gap-2">
            <p className="text-lg font-bold text-gray-400 line-through">
              {formatRupiah(price)}
            </p>
            <p className="text-xl font-bold text-green-500">
              {formatRupiah(discountedPrice)}
            </p>
          </div>
        ) : (
          <p className="text-xl font-bold text-primary-default">
            {formatRupiah(price)}
          </p>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
