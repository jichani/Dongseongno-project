const button = document.querySelector(".main_login_btn");
const dialog = document.querySelector("dialog");

button.addEventListener("click", () => {
  dialog.showModal();
})

dialog.addEventListener("close", () => {
  console.log(dialog.returnValue);
});