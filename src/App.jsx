import { Navbar } from "./components";

export default function App() {
  document.documentElement.classList.add("dark:bg-zinc-900");
  return (
    <>
      <Navbar />
    </>
  );
}
