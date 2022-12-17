const menuToggleBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu-id");

menuToggleBtn?.addEventListener("click", () => {
  if (menuToggleBtn.getAttribute("aria-expanded") === "false") {
    menuToggleBtn.setAttribute("aria-expanded", "true");
    menuToggleBtn.innerHTML = `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.555 21L33.25 30.695V33.25H30.695L21 23.555L11.305 33.25H8.75V30.695L18.445 21L8.75 11.305V8.75H11.305L21 18.445L30.695 8.75H33.25V11.305L23.555 21Z" fill="black"/>
    </svg>`;
    menu.setAttribute("aria-hidden", "false");
  } else {
    menuToggleBtn.setAttribute("aria-expanded", "false");
    menuToggleBtn.innerHTML = `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 31.5H35C35.9625 31.5 36.75 30.7125 36.75 29.75C36.75 28.7875 35.9625 28 35 28H7C6.0375 28 5.25 28.7875 5.25 29.75C5.25 30.7125 6.0375 31.5 7 31.5ZM7 22.75H35C35.9625 22.75 36.75 21.9625 36.75 21C36.75 20.0375 35.9625 19.25 35 19.25H7C6.0375 19.25 5.25 20.0375 5.25 21C5.25 21.9625 6.0375 22.75 7 22.75ZM5.25 12.25C5.25 13.2125 6.0375 14 7 14H35C35.9625 14 36.75 13.2125 36.75 12.25C36.75 11.2875 35.9625 10.5 35 10.5H7C6.0375 10.5 5.25 11.2875 5.25 12.25Z" fill="black"/>
    </svg>`;
    menu.setAttribute("aria-hidden", "true");
  }
});
