import React from "react";
import Form from "./Form/Form";
import Image from "next/image";
import man from "./handsome-young-black-man-using-smartphone-while-relaxing-couch-home.png";

export default function Simulation() {
  return (
    <section className="lg:flex lg:bg-[url('/handsome-young-black-man-using-smartphone-while-relaxing-couch-home.png')] lg:bg-cover lg:bg-no-repeat">
      <div className="bg-gradient-to-r from-white via-white lg:w-3/4">
        <div className="lg:flex px-6 pt-8 pb-8 lg:bg-gradient-to-r lg:pl-117.5 lg:from-white lg:via-white">
          <Form />
        </div>
      </div>
    </section>
  );
}
