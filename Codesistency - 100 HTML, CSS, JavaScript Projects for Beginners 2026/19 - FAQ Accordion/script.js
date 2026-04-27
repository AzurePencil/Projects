const items = document.querySelectorAll(".faq-item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    items.forEach((i) => i.classList.remove("active"));

    if (!isActive) {
      item.classList.add("active");
    }
  });
});
