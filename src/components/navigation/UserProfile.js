import React from "react";
import Image from "next/image";

const UserProfile = ({ avatar }) => {
  return (
    <div className="flex items-center">
      <Image
        src={avatar}
        alt="User Avatar"
        width={40}
        height={40}
        className="rounded-xl"
      />
    </div>
  );
};

export default UserProfile;
