import Footer from "@/components/Footer/Footer";
import Form from "@/components/Form/Form";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <div className="w-96">
          <div>
            <h1 className="font-bold">Sua conta de luz</h1>
            <h1 className="font-bold text-purple-700">
              mais barata e mais sustentável
            </h1>
            <caption className="font-light">
              Preencha os campos abaixo e simule o quanto você pode economizar.{" "}
            </caption>
          </div>
          <Form />
        </div>
      </section>
      <Footer />
    </>
  );
}
