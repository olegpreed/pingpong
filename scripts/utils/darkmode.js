export function setupDarkMode() {
  "use strict";

  const modeSwitch = document.getElementById("toggleMode");

  const getStoredTheme = () => localStorage.getItem("theme");
  const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    if (theme === "dark") {
      modeSwitch.checked = true;
    } else {
      modeSwitch.checked = false;
    }
  };

  setTheme(getPreferredTheme());

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      const storedTheme = getStoredTheme();
      if (storedTheme !== "light" && storedTheme !== "dark") {
        setTheme(getPreferredTheme());
      }
    });

  window.addEventListener("DOMContentLoaded", () => {

    modeSwitch.addEventListener("change", () => {
      const theme = modeSwitch.checked ? "dark" : "light";
      setStoredTheme(theme);
      setTheme(theme);
    });
  });
};