import { LuSunDim } from "react-icons/lu";
import { AiOutlineMoon } from "react-icons/ai";
import { useState, useEffect } from "react";
import darkLogo from "/assets/Blogram3/vector/isolated-monochrome-black.svg";
import lightLogo from "/assets/Blogram3/vector/isolated-monochrome-white.svg";

export default function Navbar() {
  const [isDark, setDark] = useState(true);
  useEffect(() => setDark(true), []);
  function changeTheme() {
    setDark((currTheme) => !currTheme);
    document.documentElement.classList.toggle("dark");
  }
  return (
    <nav className="dark:bg-stone-800 dark:text-stone-100 font-medium w-screen bg-white h-[80px] z-10 fixed drop-shadow-lg flex justify-between items-center px-10">
      <img src={isDark ? darkLogo : lightLogo} alt="Logo" width={"200px"} />
      <ul className="flex justify-evenly items-center space-x-6">
        <li>Home</li>
        <li>About</li>
        <button
          className="hover:bg-zinc-500/10 p-1 rounded-sm"
          onClick={changeTheme}>
          {isDark ? (
            <LuSunDim size={"25px"} />
          ) : (
            <AiOutlineMoon size={"25px"} />
          )}
        </button>
      </ul>
    </nav>
  );
}
