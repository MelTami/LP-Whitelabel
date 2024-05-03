import Footer from "@/components/Footer/Footer";
import Form from "@/components/Form/Form";
import Header from "@/components/Header/Header";
import Image from "next/image";
import man from "./handsome-young-black-man-using-smartphone-while-relaxing-couch-home.png";

export default function Home() {
  return (
    <>
      <Header />
      <section className="from-white flex">
        <div className="w-128 font-sans gap-6 flex flex-col">
          <div>
            <h1 className="font-bold text-title">Sua conta de luz</h1>
            <h1 className=" font-bold text-lilac text-title">
              mais barata e mais sustentável
            </h1>
            <p className="font-light text-xs">
              Preencha os campos abaixo e simule o quanto você pode economizar.
            </p>
          </div>
          <Form />
        </div>
        <div>
          <Image
            src={man}
            width={1086}
            alt="handsome-young-black-man-using-smartphone-while-relaxing-couch-home"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
