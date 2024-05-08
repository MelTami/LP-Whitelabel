import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Simulation from "@/components/Simulation/Simulation";
import Advantage from "@/components/Advantage/Advantage";
import Image from "next/image";
import Button from "@/components/Button/Button";
import HowWork from "@/components/Como Funciona/Como_Funciona";
import GD from "@/components/GD/GD";

export default function Home() {
  return (
    <>
      <Header />
      <Simulation />
      <Advantage />
      <HowWork />
      <GD />
      <Footer />
    </>
  );
}
