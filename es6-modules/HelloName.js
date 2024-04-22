import { fillDiv } from "./FillDiv.js";

export function helloName(name) {
  const nameDisplay = document.createElement("div");
  const div2 = document.createElement("div");

  div2.textContent = fillDiv();
  nameDisplay.textContent = name;

  document.body.appendChild(nameDisplay);
  document.body.appendChild(div2);
}
