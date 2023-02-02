export type TUserWithoutPassword = {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  role: string;
};

export type TCredentials = {
  email: string;
  password: string;
};

export type AuthState = {
  user: TUserWithoutPassword | null;
  isAuth: boolean;
};

export type TNewUser = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
