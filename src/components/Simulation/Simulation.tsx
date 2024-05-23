import React from "react";
import Form from "./Form/Form";
import Image from "next/image";
import man from "./handsome-young-black-man-using-smartphone-while-relaxing-couch-home.png";

export default function Simulation() {
  return (
    <section className="flex lg:bg-[url('/handsome-young-black-man-using-smartphone-while-relaxing-couch-home.png')] bg-cover bg-no-repeat">
      <div className="bg-gradient-to-r from-white via-white">
        <div className="flex px-12 pt-8 pb-8 bg-gradient-to-r from-white via-white">
          <Form />
        </div>
      </div>
    </section>
  );
}
