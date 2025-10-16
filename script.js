// Optional scroll animation or navbar effects
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(10,10,10,0.95)";
  } else {
    nav.style.background = "rgba(10,10,10,0.8)";
  }
});
