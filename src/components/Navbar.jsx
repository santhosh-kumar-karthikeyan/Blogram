import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const variable1 = "nigga";
    const variable2 = false;
    console.table({ variable1, variable2 });
  }, []);
  return (
    <nav className="w-screen bg-white h-[80px] z-10 fixed drop-shadow-lg flex justify-between items-center px-10">
      <img
        src="/assets/Blogram3/vector/isolated-monochrome-black.svg"
        alt=""
        width={"300px"}
      />
      <ul className="flex justify-evenly space-x-6">
        <li>Home</li>
        <li>About</li>
        <li></li>
      </ul>
    </nav>
  );
}
