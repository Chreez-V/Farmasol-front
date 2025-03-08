import { Url } from "url";

export interface Medicamento {
  id: number;
  name: string;
  description: string;
  quantity: number;
  laboratory: string;
  price: number;
}

export interface Personal {
  id: number;
  name: string;
  lastname: string;
  headquarter: string;
  ficha: string;
}

export interface Laboratorio {
  id: number;
  imageUrl: string;
  name: string;
}
