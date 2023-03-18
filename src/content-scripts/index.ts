import { createFloatingButton } from "../component";
import "./index.css";

document.addEventListener("mouseup", async (event) => {
  let selectText: string;
  selectText = window.getSelection()?.toString() ?? "";

  if (selectText === "") return;

  const floatingButtonImg = createFloatingButton(event, selectText);

  document.body.appendChild(floatingButtonImg);

  document.addEventListener("mousedown", (event) => {
    if (event.target !== floatingButtonImg) {
      floatingButtonImg.remove();
    }
  });
});
