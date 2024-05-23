import { Navbar } from "./Navbar/Navbar";
import { Logo } from "../Logo/Logo";

export default function Header() {
  return (
    <header className="content-center h-12 pl-6 w-full border-b-0.7 pb-3 pt-11.7 justify-between flex gap-2 pr-3">
      <Logo />
      <Navbar />
    </header>
  );
}
