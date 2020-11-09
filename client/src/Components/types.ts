export interface Idarkmode {
  darkmode: boolean;
}
export type Inputs = {
  id: number;
  description: string;
  higherPrice: number;
  finalPrice: number;
  quantity: number;
  exampleRequired: string;
  message: string;
};
export interface Ilist {
  id: number;
  description: string;
  higherPrice: number;
  finalPrice: number;
  quantity: number;
}
export interface Data {
  name: string;
  description: string;
  quantity: number;
  price: number;
  finalPrice: number;
  __v: number;
}
