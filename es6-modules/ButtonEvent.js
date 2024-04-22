import { helloName } from "./HelloName.js";

export function setButtonEvent() {
  const submitButton = document.getElementById("submit");
  const inputField = document.getElementById("input");
  submitButton.addEventListener("click", () => {
    helloName(inputField.value);
  });
}
