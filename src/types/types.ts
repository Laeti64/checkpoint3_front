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

export type TTickets = {
  id: string;
  title: string;
  description: string;
  linkedToProject: string;
  deadLine: Date;
  user: TUserWithoutPassword;
  userId: string;
  category: Category;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Category = {
  id: String;
  name: String;
  tickets: TTickets[];
  createdAt: Date;
  updatedAt: Date;
};
