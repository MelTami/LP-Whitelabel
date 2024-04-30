import React from "react";
import style from "./Footer.module.css";
import logo from "./logo_matrix_laranja.png";
import img from "./Rectangle 14 (Stroke).png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white gap-6">
      <div className="flex items-center justify-center py-8 gap-3">
        <div className="flex gap-2">
          <Image src={img} alt="brand" className="w-5 h-5" />
          <p className="font-sans text-purple-700 align-middle text-base font-semibold">
            Brand{" "}
          </p>
        </div>
        <div className="bg-black w-px h-5"></div>
        <Image src={logo} alt="footer img" className="pl-3 w-16" />
      </div>
      <div className="text-center">
        <p className="font-sans text-black text-xs font-medium">
          Copyright 2018 - 2024 Matrix Energia. Todos os direitos reservados.
        </p>
        <p className="font-sans text-xs font-light m-2.5">
          Av. Brig. Faria Lima 2055 - 11º andar , Jardim Paulistano, São
          Paulo/SP, CEP 01452-001.
        </p>
      </div>
    </footer>
  );
}
