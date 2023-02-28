import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logoMarca.svg";

export function TopBar() {
  return (
    <div className="flex items-center justify-cente text-white h-32 p-4 mx-8">
      <div className="flex items-center justify-center flex-1">
        <div className="mr-4">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={60} height={60} />
          </Link>
        </div>
      </div>
      <div className="absolute top-11 right-0 mx-20">
        <button className="relative flex items-center justify-center text-[#024059] hover:text-white font-extrabold py-2 px-12 rounded-full border-2 border-[#024059] hover:bg-[#024059] transition-all duration-300 ease-in-out overflow-hidden text-base">
          <div className="flex">HIRE</div>
        </button>
      </div>
    </div>
  );
}
