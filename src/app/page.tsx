import Footer from "@/components/Footer/Footer";
import Form from "@/components/Form/Form";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <div className="w-128 font-sans">
          <div>
            <h1 className="font-bold text-3xl">Sua conta de luz</h1>
            <h1 className=" font-bold text-purple-700 text-3xl">
              mais barata e mais sustentável
            </h1>
            <p className="font-light text-xs">
              Preencha os campos abaixo e simule o quanto você pode economizar.
            </p>
          </div>
          <Form />
        </div>
      </section>
      <Footer />
    </>
  );
}
