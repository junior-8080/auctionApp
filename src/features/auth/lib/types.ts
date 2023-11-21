export type User = {
    password: string;
    email: string;
  };

  export type LoginResponse = {
    id: string;
    token: string;
    user: User;
  };