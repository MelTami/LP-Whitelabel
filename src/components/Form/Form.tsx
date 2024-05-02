import React from "react";

export default function Form() {
  return (
    <form className="gap-0.5 flex w-429 h-397">
      <div className="font-normal gap-0.5 text-sm">
        <label htmlFor="name" className="font-medium">
          Nome Completo
        </label>
        <input
          type="text"
          placeholder="Informe seu nome completo "
          className="border-b border-slate-400"
          id="name"
        />
        <div>
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
          <label htmlFor="state" className="font-medium">
            Estado
          </label>
          <select
            id="state"
            name="states"
            className="border-b border-slate-400"
          >
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
        <label htmlFor="value" className="font-medium">
          Qual o valor médio da sua conta de luz?
        </label>
        <input
          type="text"
          placeholder="Informe o valor médio da conta"
          className="border-b border-slate-400"
          id="value"
        />
        <label htmlFor="code" className="font-medium">
          Código de indicação (opcional)
        </label>
        <input
          type="text"
          placeholder="Informe o código"
          className="border-b border-slate-400"
          id="code"
        />
      </div>
      <div></div>
    </form>
  );
}
