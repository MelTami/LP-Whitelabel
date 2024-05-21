"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Carrossel() {
  return (
    <div>
      <Swiper>
        <SwiperSlide>
          <div>
            <Image
              src="/photovoltaic-panels-green.png"
              alt="photovoltaic panels in a green local"
              width={550}
              height={414}
            />
          </div>
          <div>
            <Image
              src="/usina-solar.png"
              alt="image"
              width={743}
              height={418}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
