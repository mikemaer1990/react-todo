import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import SetDarkMode from "./SetDarkMode";

export default function DarkModeButton() {
  const [colorTheme, setColorTheme] = SetDarkMode();
  return (
    <div className="absolute inset-0 left-2 top-2">
      <span
        className="w-10 h-10 bg-indigo-800 rounded-full cursor-pointer text-white flex items-center justify-center transition"
        onClick={() => setColorTheme(colorTheme)}
      >
        {colorTheme === "light" ? (
          <BsMoon className="w-7 h-7" />
        ) : (
          <BsSun className="w-7 h-7" />
        )}
      </span>
    </div>
  );
}
