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
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${
            i <= Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const formatPriceK = (value) => {
    if (value >= 1000) {
      return `Rp ${value / 1000}K`;
    }
    return `Rp ${value}`;
  };

  if (variant === "mobile") {
    return (
      <div className="flex w-full max-w-sm flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-4">
        <div className="flex">
          <div className="relative h-20 w-20 flex-shrink-0">
            <Image
              src={imageUrl}
              alt={title}
              fill
              priority={isPriority}
              sizes="80px"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center pl-4">
            <h6 className="text-base font-bold leading-tight">{title}</h6>
            <div className="mt-1 flex items-center">
              <div className="relative h-6 w-6">
                <Image
                  src={authorImage}
                  alt={authorName}
                  fill
                  sizes="24px"
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="ml-2">
                <p className="text-sm font-semibold">{authorName}</p>
                <p className="text-xs">{authorRole}</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-between pt-2">
          <div className="flex items-center text-sm">
            <div className="flex">{renderStars()}</div>
            <span className="ml-1 ">
              {rating} ({reviewCount})
            </span>
          </div>
          <p className="text-base font-bold text-primary-default">
            {formatPriceK(price)}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col rounded-xl border border-gray-200 bg-white p-5">
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
              {formatPriceK(price)}
            </p>
            <p className="text-xl font-bold text-green-500">
              {formatPriceK(discountedPrice)}
            </p>
          </div>
        ) : (
          <p className="text-xl font-bold text-primary-default">
            {formatPriceK(price)}
          </p>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
