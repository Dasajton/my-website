"use client";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@/assets/icons";

export default function DarkModeToggler() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleDarkMode} className="rounded p-2">
      {darkMode ? (
        <SunIcon className="text-xl text-sky-500 dark:text-blue-700" />
      ) : (
        <MoonIcon className="text-xl text-sky-500 dark:text-blue-700" />
      )}
    </button>
  );
}
