import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Insira seu nome"),
  cellphone: yup.number().required("Insira o número do telefone"),
  state: yup.string().required("Estado precisa ser selecionado"),
  value: yup.number().required("Coloque o valor médio da conta"),
  code: yup.number(),
});
