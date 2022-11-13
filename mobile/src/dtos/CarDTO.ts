export interface CarDTO {
  _id?: string;
  brand: string;
  model: string;
  year: Number | string;
  value: Number | string;
  image?: string;
  preview?: any;
}
