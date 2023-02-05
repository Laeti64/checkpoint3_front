import { TTicketBody, TTickets } from "@/types/types";
import axiosInstance from "./axiosInstance";

export const ticketsHandler = {
  getAll: async () => (await axiosInstance.get<TTickets[]>("/tickets")).data,
  getOne: async () => (await axiosInstance.get("/tickets/:id")).data,
  delete: async () => await axiosInstance.delete("/tickets/:id"),
  create: async (data: TTicketBody) =>
    await axiosInstance.post("/tickets", data),
};

export const usersHandler = {
  getAll: async () => (await axiosInstance.get("/users")).data,
  getOne: async () => (await axiosInstance.get("/users/:id")).data,
  delete: async () => await axiosInstance.delete("/users/:id"),
};

export const categoriesHandler = {
  getAll: async () => (await axiosInstance.get("/categories")).data,
  getOne: async () => (await axiosInstance.get("/categories/:id")).data,
  delete: async () => await axiosInstance.delete("/categories/:id"),
  create: async () => await axiosInstance.post("/categories"),
};
