"use client";

import React from "react";

import { useRouter } from "next/navigation";
import axiosInstance from "../../../services/axiosInstance";
import { TNewUser } from "../../types/types";

export default function Signup() {
  const router = useRouter();
  const [credentials, setCredentials] = React.useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const signUp = async ({
    email,
    password,
    confirmPassword,
    username,
  }: TNewUser) => {
    try {
      if (password === confirmPassword) {
        await axiosInstance.post("auth/signup", {
          email,
          password,
          username,
        });
        router.push("/auth/signin");
      } else {
        alert("Confirm Password is not the same as password");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-1/4 h-2/3 flex justify-center items-center mt-[7%] rounded-xl flex-col bg-gradient-to-r from-black via-slate-300 to-black text-black  m-auto">
      <div>
        <h1 className="flex justify-center text-primary_font font-bold py-5 text-xl">
          Create Your Account
        </h1>
      </div>
      <form className="flex space-y-5 flex-col justify-center">
        <div>
          <input
            className="px-2 py-1 text-center rounded-lg"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email..."
            autoComplete="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="py-2">
          <input
            className="px-2 py-1 text-center rounded-lg"
            type="username"
            id="username"
            name="username"
            placeholder="Enter your username..."
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="py-2">
          <input
            className="px-2 py-1 text-center rounded-lg"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password..."
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="py-2">
          <input
            className="px-2 py-1 text-center rounded-lg"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={credentials.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
      </form>
      <div className="py-5">
        <button
          className="text-primary_font bg-footer font-bold px-5 py-1 rounded-lg "
          type="submit"
          onClick={() => signUp(credentials)}
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
}
