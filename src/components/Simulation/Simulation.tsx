import React from "react";
import Form from "./Form/Form";
import Image from "next/image";
import man from "./handsome-young-black-man-using-smartphone-while-relaxing-couch-home.png";
import "./Form/Form.module.css";

export default function Simulation() {
  return (
    <section className="flex bg-[url('/handsome-young-black-man-using-smartphone-while-relaxing-couch-home.png')] bg-top bg-cover">
      <div className="bg-gradient-to-r from-white via-white w-3/4">
        <div className="flex pl-117.5 pt-8 pb-8 bg-gradient-to-r from-white via-white">
          <Form />
        </div>
      </div>
    </section>
  );
}
