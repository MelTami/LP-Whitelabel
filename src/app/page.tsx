import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Simulation from "@/components/Simulation/Simulation";
import Advantage from "@/components/Advantage/Advantages";
import Image from "next/image";
import Button from "@/components/Button/Button";
import HowWork from "@/components/Como Funciona/Como_Funciona";
import GD from "@/components/GD/GD";
import Description from "@/components/Quem Somos/Description";
import Clientes from "@/components/Clientes/Clientes";
import Questions from "@/components/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <Simulation />
      <Advantage />
      <HowWork />
      <GD />
      <Description />
      <Clientes />
      <Questions />
      <Footer />
    </>
  );
}
