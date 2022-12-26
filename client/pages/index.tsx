import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Center from "../components/Center";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import { ThemeContext } from "../context/ThemeContextProvider";
import { AuthContext } from "../context/AuthContextProvider";
import { useRouter } from "next/router";

export default function Home() {
  const { darkMode, togleDarkMode } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const router = useRouter();
  console.log(user);

  return (
    <div>
      <Header />
      <div className="flex">
        <LeftSideBar />
        <div className="w-[60%]">
          <Center />
        </div>
        <RightSideBar />
      </div>
    </div>
  );
}
