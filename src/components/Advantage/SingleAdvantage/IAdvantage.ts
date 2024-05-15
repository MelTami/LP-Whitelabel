import { StaticImageData } from "next/image";

export interface IAdvantage {
  title: string;
  img: string | StaticImageData;
  alt: string;
  text: string;
}

export const vantagem = [
  {
    title: "Sustentável",
    img: "/tree.png",
    alt: "little tree inside half earth",
    text: "Ajude o planeta sendo um consumidor de energia renovável.",
  },
  {
    title: "Simples e digital",
    img: "/cellphone.png",
    text: "Contrate de forma rápida e segura, sem pagar nada e sem sair de casa.",
    alt: "a hand in a cellphone",
  },
  {
    title: "Zero investimento",
    img: "/pig.png",
    text: "Economize mais de uma conta de luz por ano sem gastar com instalação de placas solares.",
    alt: "pig",
  },
  {
    title: "Sem fidelidade",
    img: "/brokenlink.png",
    text: "Tenha liberdade para cancelar quando quiser. De forma fácil, sem taxas ou multas.",
    alt: "broken link",
  },
];
