const loginToggle = document.getElementById("login-toggle");
const loginModal = document.getElementById("login-modal");
const loginClose = document.getElementById("login-close");

const toggleModal = (state) => {
  loginModal.classList.toggle("active", state);
  loginModal.setAttribute("aria-hidden", String(!state));
};

loginToggle.addEventListener("click", () => toggleModal(true));
loginClose.addEventListener("click", () => toggleModal(false));
loginModal.addEventListener("click", (event) => {
  if (event.target === loginModal) {
    toggleModal(false);
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
