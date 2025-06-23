import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="fixed w-full flex justify-between bg-yellow-300 border-b-4 border-blue-400 py-2 px-6">
      <div className="flex items-center justify-center">
        <Link href={"/"}>
          <Image
            src={"/gym-logo.webp"}
            width={70}
            height={70}
            alt="Gym Logo"
            className="rounded-full"
          />
        </Link>
      </div>
      <div className="flex py-3 justify-between">
        <Link
          href={"/contact"}
          className="bg-amber-600 font-bold text-2xl px-4 cursor-pointer py-2 rounded-full self-center"
        >
          Free Trial
        </Link>
      </div>
    </div>
  );
};

export default Header;
