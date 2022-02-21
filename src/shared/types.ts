export interface IProduct {
  id: number;
  name: string;
  price: number;
  deliveryFee: number;
  stock: number;
  image: File;
}

export interface SignupRequest {
  email: string;
  password: string;
}

export interface SigninRequest {
  email: string;
  password: string;
}
