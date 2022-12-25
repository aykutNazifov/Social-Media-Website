import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import Center from "../components/Center";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import { ThemeContext } from "../context/ThemeContextProvider";

export default function Home() {
  const { darkMode, togleDarkMode } = useContext(ThemeContext);

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
