import tree from "../img/3736569 1.png";
import cellphone from "../img/image 43.png";
import pig from "../img/5209019 3.png";
import link from "../img/image 44.png";

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

export interface IAdvantage {
  title: string;
  img: string | StaticImageData;
  alt: string;
  text: string;
}

export const vantagem = [
  {
    title: "Sustentável",
    img: { tree },
    alt: "little tree inside half earth",
    text: "Ajude o planeta sendo um consumidor de energia renovável.",
  },
  {
    title: "Simples e digital",
    img: { cellphone },
    text: "Contrate de forma rápida e segura, sem pagar nada e sem sair de casa.",
    alt: "a hand in a cellphone",
  },
  {
    title: "Zero investimento",
    img: { pig },
    text: "Economize mais de uma conta de luz por ano sem gastar com instalação de placas solares.",
    alt: "pig",
  },
  {
    title: "Sem fidelidade",
    img: { link },
    text: "Tenha liberdade para cancelar quando quiser. De forma fácil, sem taxas ou multas.",
    alt: "broken link",
  },
];
