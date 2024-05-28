export interface IForm {
  name: string;
  label: string;
  control?: any;
  type?: string;
  placeholder: string;
}

export interface IFormInput {
  name: string;
  cellphone: number;
  state: string;
  value: number;
  code?: number;
}

export interface IFormSelect {
  label: string;
}
