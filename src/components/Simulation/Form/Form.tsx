import Button from "@/components/Button/Button";
import React from "react";

interface IForm {
  name?: string;
  cellphone?: number;
  state?: string;
  value?: number;
  code?: number;
}

export default function Form() {
  return (
    <div className="font-sans gap-6 flex-col flex-wrap lg:w-409">
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

      <form className="flex flex-col gap-8 px-6">
        <div className="font-light text-sm flex-col flex gap-4">
          <div className="gap-0.5 flex-col flex">
            <label htmlFor="name" className="font-medium">
              Nome Completo
            </label>
            <input
              type="text"
              placeholder="Informe seu nome completo "
              className="border-b border-slate-400"
              id="name"
            />
          </div>
          <div className="gap-4 flex flex-col lg:flex-row">
            <div className="gap-0.5 flex-col flex lg:w-51">
              <label htmlFor="phone" className="font-medium">
                Celular
              </label>
              <input
                type="tel"
                placeholder="(00) 00000-0000"
                className="border-b border-slate-400"
                required
                id="phone"
              />
            </div>
            <div className="gap-0.5 flex-col flex lg:w-51">
              <label htmlFor="state" className="font-medium">
                Estado
              </label>
              <select
                id="state"
                name="states"
                className="border-b border-slate-400 justify-between text-lgray"
              >
                <option value="" disabled selected>
                  Selecione
                </option>
                <option value="Acre">Acre</option>
                <option value="Alagoas">Alagoas</option>
                <option value="Amapá">Amapá</option>
                <option value="Amazonas">Amazonas</option>
                <option value="Bahia">Bahia</option>
                <option value="Ceará">Ceará</option>
                <option value="Espírito Santo">Espírito Santo</option>
                <option value="Goiás">Goiás</option>
                <option value="Maranhão">Maranhão</option>
                <option value="Mato Grosso">Mato Grosso</option>
                <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                <option value="Minas Gerais">Minas Gerais</option>
                <option value="Pará">Pará</option>
                <option value="Paraíba">Paraíba</option>
                <option value="Paraná">Paraná</option>
                <option value="Pernambuco">Pernambuco</option>
                <option value="Piauí">Piauí</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                <option value="Rondônia">Rondônia</option>
                <option value="Roraima">Roraima</option>
                <option value="Santa Catarina">Santa Catarina</option>
                <option value="São Paulo">São Paulo</option>
                <option value="Sergipe">Sergipe</option>
                <option value="Tocantins">Tocantins</option>
                <option value="Distrito Federal">Distrito Federal</option>
              </select>
            </div>
          </div>
          <div className="gap-0.5 flex-col flex">
            <label htmlFor="value" className="font-medium">
              Qual o valor médio da sua conta de luz?
            </label>
            <input
              type="text"
              placeholder="Informe o valor médio da conta"
              className="border-b border-slate-400"
              id="value"
            />
          </div>
          <label htmlFor="code" className="font-medium">
            Código de indicação (opcional)
          </label>
          <input
            type="text"
            placeholder="Informe o código"
            className="border-b border-slate-400"
            id="code"
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
        </div>
        <div className="flex justify-center">
          <Button />
        </div>
      </form>
    </div>
  );
}
