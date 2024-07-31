const theme = window.matchMedia(`(prefers-color-scheme: dark)`).matches ? "dark" : "light";
function changeTheme(theme) {
  if (theme === "dark") (document.documentElement.setAttribute(`data-theme`, `dark`))
  else (document.documentElement.setAttribute(`data-theme`, `light`))
}

