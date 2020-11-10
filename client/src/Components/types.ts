export interface Idarkmode {
  darkmode: boolean;
}
export type Inputs = {
  name: string;
  description: string;
  price: number;
  finalPrice: number;
  quantity: number;
  exampleRequired: string;
  message: string;
};
export interface Ilist {
  name: string;
  description: string;
  quantity: number;
  price: number;
  finalPrice: number;
}
export interface Data {
  name: string;
  description: string;
  quantity: number;
  price: number;
  finalPrice: number;
  __v: number;
}
