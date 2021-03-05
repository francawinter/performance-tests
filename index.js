document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.scrollY > 50) {
      header.classList.add("header--scrolling");
    } else {
      header.classList.remove("header--scrolling");
    }
  };
});
