import React from "react";
import Image from "next/image";
import usina1 from "./aerial-view-large-sustainable-electrical-power-plant-with-many-rows-solar-photovoltaic-panels 1 (1).png";
import usina2 from "./WhatsApp Image 2024-01-05 at 14.37 1.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function Carrossel() {
  const data = [
    {
      id: "1",
      image: "./photovoltaic-panels.png",
      title: "Placas fotovoltaicas",
    },
    { id: "2", image: "./usina.png", title: "Usina Matrix - Assaí(PR)" },
  ];
  return (
    <div className="flex">
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={true}
      >
        {data.map((item) => (
          <div key={item.id}>
            <Image src={item.image} alt="usinas solares" />
            <div>
              <caption>{item.title}</caption>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
