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

export interface Sucursal {
  id: string;
  name: string;
  address: string;
}

export interface Pedido {
  id: string;
  AnalistName: string;
  AnalistTelephone: number;
  laboratory: string;
  PaymentForm: string;
  status: string;
  medsOrdered: Medicamento[];
}
