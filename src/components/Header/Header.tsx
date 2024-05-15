import { Navbar } from "./Navbar/Navbar";
import { Logo } from "../Logo/Logo";

export default function Header() {
  return (
    <header className="content-center h-12 border-b-0.7 pb-3 pt-11.7 pr-40.68 pl-40.84">
      <div className="flex gap-2 justify-between">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
