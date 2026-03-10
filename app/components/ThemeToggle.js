"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // 1. Use a lazy initializer function to set state once on mount
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme;

      // Check system preference if no saved theme exists
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  // 2. Use this effect ONLY to sync the HTML class with your state
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="ml-4 flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-slate-700 dark:text-yellow-300 hover:scale-105 transition-all duration-300 shadow-sm"
    >
      <span className="text-sm font-medium">
        {theme === "dark" ? "Light" : "Dark"}
      </span>

      <span className="text-lg">{theme === "dark" ? "☀️" : "🌙"}</span>
    </button>
  );
}
