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
  status: string;
  solution: string;
  user: TUserWithoutPassword;
  userId: string;
  category: TCategory;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TTicketBody = {
  title: string;
  description: string;
  linkedToProject: string;
  deadLine: string;
  userName: string;
  categoryId: TCategory;
};

export type TCategory = {
  id: string;
  name: string;
  tickets: TTickets[];
  createdAt: Date;
  updatedAt: Date;
};
