export type User = {
  id: string;
  name: string;
  role: string;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
  is_active: boolean;
  is_superuser: boolean;
  created: string;
  profile_image: any;
  created_at: string;
};

export type LoginBody = {
  email: string;
  password: string;
};

export type SignUpBody = SignUpOneBody & SignUpTwoBody;

export type SignUpOneBody = {
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: string;
  location: string;
  other_location: string;
  sector: string;
  profile: string;
};

export type SignUpTwoBody = {
  email: string;
  password: string;
  public: boolean;
};
