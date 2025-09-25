import React from "react";
import Image from "next/image";

const TutorCard = ({ name, title, company, bio, avatarUrl }) => {
  return (
    <div className="  flex items-start gap-4 p-4 border sm:flex-col border-gray-300 rounded-lg">
      <div className="flex gap-3">
        <div className="relative h-13 w-13 flex-shrink-0">
          <Image
            src={avatarUrl}
            alt={`Foto ${name}`}
            fill
            className="rounded-xl object-cover"
            sizes="64px"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg font-bold text-foreground">{name}</h4>
          <p className="text-base">
            {title} di <span className="font-semibold">{company}</span>
          </p>
        </div>
      </div>
      {bio && (
        <p className="text-sm text-gray-500 mt-1 leading-relaxed">{bio}</p>
      )}
    </div>
  );
};

export default TutorCard;
