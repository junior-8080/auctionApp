export type AuthFormData = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  agreement: boolean;
  rememberMe: boolean;
};

export interface PostFormData {
  make: string;
  region: string;
  product_name: string;
  attribute: string;
  description: string;
  image: string;
  starting_price: number;
  buy_now_price: number;
  reserve_price: number;
  duration: number;
  amount: number;
  bid_type: string;
  buy_now_checked: boolean;
  reserve_price_checked: boolean;
  buyer_deposit: boolean;
}
