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
  image: null;
  make: string;
  amount: number;
  region: string;
  duration: number;
  bid_type: string;
  attribute: string;
  description: string;
  product_name: string;
  reserve_price: number;
  buy_now_price: number;
  starting_price: number;
  buyer_deposit: boolean;
  buy_now_checked: boolean;
  customized_biding: string;
  amount_biding_checked: boolean;
  reserve_price_checked: boolean;
  percentage_biding_checked: boolean;
}