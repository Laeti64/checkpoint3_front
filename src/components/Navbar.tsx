import { useAuth } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import React from "react";

export default function Navbar() {
  const router = useRouter();
  const { isAuth, signOut } = useAuth();
  const handleClick = (isAuth: boolean) => {
    isAuth ? signOut() : router.push("/auth/signin");
  };
  return (
    <div className="mb-14">
      {isAuth ? (
        <div className="flex justify-between mx-5">
          <p className="text-white font-bold mr-5 mt-5">Connected as Pupuce</p>

          <button
            className="text-white font-bold mr-5 mt-5"
            onClick={() => handleClick(isAuth)}
          >
            LOG OUT
          </button>
        </div>
      ) : (
        <button
          className="text-white font-bold mr-5 mt-5"
          onClick={() => handleClick(isAuth)}
        >
          LOG IN{" "}
        </button>
      )}
    </div>
  );
}
