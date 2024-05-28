"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/Button/Button";
import { InputField } from "./Input/Input";
import { IFormInput } from "./Input/Inputtypes";
import { SelectField } from "./Select/SelectField";
import { schema } from "./validation";

export default function Form() {
  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInput) => {
    console.log(data);
    reset();
  };

  return (
    <div className="font-sans gap-6 flex-col flex-wrap lg:w-409 lg:bg-gradient-to-r lg:from-white lg:via-white">
      <div className="pb-6">
        <h2 className="font-bold text-title whitespace-pre-line pb-2">
          Sua conta de luz{" "}
          <span className=" font-bold text-lilac text-title">
            mais barata e mais sustentável
          </span>
        </h2>
        <p className="font-light text-xs whitespace-pre-line">
          Preencha os campos abaixo e simule o quanto você pode economizar.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 pr-6"
      >
        <InputField
          control={control}
          name="name"
          label="Nome Completo"
          placeholder="Informe seu nome completo"
        />
        <InputField
          control={control}
          name="cellphone"
          label="Celular"
          placeholder="(00) 00000-0000"
          type="tel"
        />
        <SelectField label="Estado" />
        <InputField
          control={control}
          name="value"
          label="Qual o valor médio da sua conta de luz?"
          placeholder="Informe o valor médio da conta"
        />
        <InputField
          control={control}
          name="code"
          label="Código de indicação (opcional)"
          placeholder="Informe o código"
        />
        <div className="text-[10px] gap-0.5 flex align-middle items-start">
          <input type="checkbox" required id="politica" />
          <label htmlFor="politica">
            <p>
              Li e aceito{" "}
              <a className="font-normal text-penblue underline">
                as políticas de privacidade
              </a>
              ,{" "}
              <a className="font-normal text-penblue underline">
                as políticas de uso cookies
              </a>
              , bem como ser contactado via e-mails, SMS e Whatsapp.
            </p>
          </label>
        </div>
        <div className="flex justify-center">
          <Button />
        </div>
      </form>
    </div>
  );
}
