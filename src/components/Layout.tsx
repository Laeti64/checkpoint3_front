import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
import UserContextProvider from "../context/UserContext";

type TChildren = { children: React.ReactNode };

function Layout({ children }: TChildren) {
  return (
    <>
      <UserContextProvider>
        <div className="w-screen fixed flex flex-col h-full bg-black">
          <Navbar />
          <div className="w-full  h-full flex bg-lightgrey">
            <div className="w-full h-full overflow-auto ">{children}</div>
          </div>
        </div>
      </UserContextProvider>
    </>
  );
}

export default Layout;
