import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Simulation from "@/components/Simulation/Simulation";
import Advantage from "@/components/Advantage/Advantage";
import Image from "next/image";
import img from "./aerial-view-large-sustainable-electrical-power-plant-with-many-rows-solar-photovoltaic-panels 1.png";
import Button from "@/components/Button/Button";
import HowWork from "@/components/Como Funciona/Como_Funciona";

export default function Home() {
  return (
    <>
      <Header />
      <Simulation />
      <Advantage />
      <HowWork />
      <Footer />
    </>
  );
}
