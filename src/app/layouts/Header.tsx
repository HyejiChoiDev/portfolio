"use client";

import { useRouter } from "next/navigation";
import { RiGlobalLine } from "react-icons/ri";

export default function Header() {
  const router = useRouter();

  return (
    <header className="flex flex-row justify-between px-20 py-10 text-20-b">
      <h1
        aria-label="Hyeji's Portfolio"
        className="text-30-b cursor-pointer"
        onClick={() => router.push("/")}
      >
        HYEJI
      </h1>
      <nav className="flex gap-[60px]">
        <ul className="flex gap-[60px]">
          <li>
            <a href="#about-me">ABOUT</a>
          </li>
          <li>
            <a href="#work">WORK</a>
          </li>
        </ul>
        <button className="flex items-center gap-[5px]">
          EN
          <RiGlobalLine size={25} className="cursor-pointer relative" />
        </button>
      </nav>
    </header>
  );
}
