import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
import UserContextProvider from "../context/UserContext";

type TChildren = { children: React.ReactNode };

function Layout({ children }: TChildren) {
  return (
    <>
      <UserContextProvider>
        <div className="w-screen fixed flex flex-col h-screen bg-gradient-to-r from-black via-slate-300 to-black">
          <Navbar />
          <div className="w-full  h-screen flex bg-lightgrey">
            <div className="w-full h-full overflow-auto ">{children}</div>
          </div>
        </div>
      </UserContextProvider>
    </>
  );
}

export default Layout;
