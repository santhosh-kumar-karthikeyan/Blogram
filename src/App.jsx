import { Navbar } from "./components";

export default function App() {
  document.documentElement.classList.add("dark:bg-stone-800");
  return (
    <>
      <Navbar />
    </>
  );
}
