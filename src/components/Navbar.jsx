import { LuSunDim } from "react-icons/lu";
import { AiOutlineMoon } from "react-icons/ai";
import { useState, useEffect } from "react";
import darkLogo from "/assets/Blogram3/vector/isolated-monochrome-black.svg";
import lightLogo from "/assets/Blogram3/vector/isolated-monochrome-white.svg";

export default function Navbar() {
  const [isDark, setDark] = useState(true);
  useEffect(() => setDark(localStorage.getItem("dark")), []);
  function changeTheme() {
    setDark((currTheme) => !currTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("dark", isDark);
  }
  return (
    <nav className="dark:bg-zinc-900 dark:text-zinc-100 b font-medium w-screen bg-white h-[80px] z-10 fixed drop-shadow-lg dark:drop-shadow-zinc-700 dark:drop-shadow-md flex flex-col md:flex-row md:justify-between md:items-center p-10">
      <section>
        <img
          src={isDark ? darkLogo : lightLogo}
          alt="Logo"
          width={"200px"}
          className="cursor-pointer self-center "
        />
      </section>
      <section className=" flex flex-col md:flex-row md:justify-end w-full md:items-center md:space-x-10 ">
        <ul className="flex flex-col items-center md:mt-0 mt-5 md:flex-row md:justify-evenly md:items-center md:space-x-10 ">
          <li className="cursor-pointer p-2 hover:bg-slate-700/10 dark:hover:bg-zinc-200/10 duration-300 rounded-sm">
            Home
          </li>
          <li className="cursor-pointer p-2 hover:bg-slate-700/10 dark:hover:bg-zinc-200/10 duration-300 rounded-sm">
            About
          </li>
          <li className="cursor-pointer p-2 hover:bg-slate-700/10 dark:hover:bg-zinc-200/10 duration-300 rounded-sm">
            Support
          </li>
          <li className="cursor-pointer p-2 hover:bg-slate-700/10 dark:hover:bg-zinc-200/10 duration-300 rounded-sm">
            Platform
          </li>
        </ul>
        <button
          className="cursor-pointer self-center hover:bg-slate-700/10 p-2 rounded-sm transition-all duration-300 dark:hover:bg-zinc-200/10"
          onClick={changeTheme}>
          {isDark ? (
            <LuSunDim size={"25px"} />
          ) : (
            <AiOutlineMoon size={"25px"} />
          )}
        </button>
        <section className="flex flex-col md:flex-row md:justify-center md:items-center md:space-x-5 ">
          <button className="cursor-pointer bg-transparent text-slate-700 dark:text-zinc-200 p-2 rounded-sm hover:scale-110 transition-all duration-200 ">
            Log In
          </button>
          <button className="cursor-pointer bg-slate-700 text-slate-200 dark:bg-zinc-200 dark:hover:bg-zinc-100/90 dark:text-slate-700 p-2 rounded-sm hover:scale-110 hover:bg-slate-800 duration-200">
            Sign Up
          </button>
        </section>
      </section>
    </nav>
  );
}
