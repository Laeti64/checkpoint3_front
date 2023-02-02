import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "../../context/UserContext";

export default function Signin() {
  const { signIn } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-1/4 h-2/3 flex justify-center items-center mt-[7%] rounded-xl flex-col bg-gradient-to-r from-black via-slate-300 to-black text-black  m-auto">
      <form className="flex space-y-5 flex-col">
        <div>
          <input
            className="text-center px-2 py-1 rounded-lg"
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

        <div className="py-5">
          <input
            className="w-full text-center py-1 rounded-lg"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <h6 className="flex justify-center text-primary_font text-xs font-bold text-text1 mt-2">
            Need an account ?
            <ul>
              <li>
                <Link className="font-bold" href="/signup">
                  SIGN UP
                </Link>
              </li>
            </ul>
          </h6>
        </div>
      </form>
      <div>
        <button
          className="text-text1 bg-footer px-5 py-1 rounded-lg font-extrabold"
          type="button"
          onClick={() => signIn(credentials)}
        >
          SIGN IN
        </button>
      </div>
    </div>
  );
}
