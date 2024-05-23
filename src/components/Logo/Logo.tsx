import React from "react";
import Image from "next/image";

export function Logo() {
  return (
    <div className="flex gap-2 pl-6">
      <div className="flex">
        <Image
          src="/Rectangle 14 (Stroke).png"
          alt="Purple square with a cross in the middle"
          className="w-5 h-5"
          width={20}
          height={20}
        />
        <p className="font-sans text-lilac align-middle text-base font-semibold">
          Brand
        </p>
      </div>
      <div className="bg-black w-px h-5"></div>
      <Image
        src="/logo_matrix_laranja.png"
        alt="Matrix Logo"
        className="w-63.99 h-22.73"
        width={64}
        height={23}
      />
    </div>
  );
}
