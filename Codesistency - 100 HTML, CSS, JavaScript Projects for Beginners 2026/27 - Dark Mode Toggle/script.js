const toggleBtn = document.getElementById("toggleBtn");
const html = document.documentElement;

// check for saved theme preference or default light mode
const savedTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", savedTheme);

toggleBtn.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme"); // light or dark
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});
