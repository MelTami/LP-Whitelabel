"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { images } from "./images";

export function Carrossel() {
  return (
    <section className="flex justify-center">
      <div className="w-[300px] lg:w-[600px] lg:h-[490px]">
        <Swiper
          navigation
          pagination={{ type: "bullets", clickable: true }}
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-auto w-full items-center justify-center">
                <div className="absolute top-[5.6px] right-2 bg-white opacity-70 p-[5.6px] text-[8.4px] lg:text-xs lg:p-2">
                  <p className="opacity-100">{image.text}</p>
                </div>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-full w-full object-cover"
                  width={300}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
