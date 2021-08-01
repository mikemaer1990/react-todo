import {
  useState,
  useEffect
} from "react";
export default function SetDarkMode() {
  let currentTheme = localStorage.getItem('theme') || 'dark'
  const [theme, setTheme] = useState(currentTheme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    localStorage.setItem('theme', theme)
    root.classList.add(theme);
  }, [theme, colorTheme]);
  return [colorTheme, setTheme];
}