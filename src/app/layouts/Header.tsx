"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RiGlobalLine, RiMoonFill, RiSunFill } from "react-icons/ri";

export default function Header() {
  const router = useRouter();
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <header className="flex flex-row justify-between px-20 py-6 text-20-b bg-white bg-opacity-90 sticky z-100 top-0  dark:bg-gray">
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
            <a href="#about" className="hover:underline scroll-smooth">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#project" className="hover:underline scroll-smooth">
              PROJECT
            </a>
          </li>
        </ul>
        <button
          className="flex items-center gap-[5px] cursor-pointer"
          onClick={toggleDarkMode}
        >
          {theme === "dark" ? (
            <RiMoonFill size={25} />
          ) : (
            <RiSunFill size={25} />
          )}
        </button>
      </nav>
    </header>
  );
}
