import interact from "interactjs";
import {
  FLOATING_BUTTON_IMG_CLASS_LIST,
  FLOATING_BUTTON_IMG_SRC,
} from "../constants";
import { popover } from "./popover";

export const createFloatingButton = (event: MouseEvent, selectText: string) => {
  const floatingButtonImg = document.createElement("img");
  floatingButtonImg.src = FLOATING_BUTTON_IMG_SRC;
  floatingButtonImg.style.position = "absolute";
  floatingButtonImg.style.borderRadius = "50%";
  floatingButtonImg.style.padding = "none";
  floatingButtonImg.style.zIndex = "90";
  floatingButtonImg.style.left = `${event.clientX + window.scrollX}px`;
  floatingButtonImg.style.top = `${event.clientY + window.scrollY}px`;
  floatingButtonImg.classList.add(...FLOATING_BUTTON_IMG_CLASS_LIST);
  floatingButtonImg.style.padding = "0";

  floatingButtonImg.addEventListener("click", (eventClick) => {
    handleClick(eventClick, selectText);
    floatingButtonImg.style.display = "none";
    floatingButtonImg.remove();
  });

  return floatingButtonImg;
};

const handleClick = (event: MouseEvent, selectText: string) => {
  window.getSelection()?.removeAllRanges();

  const floatingContent = popover(event, selectText);

  const position = { x: 0, y: 0 };
  interact(".draggable").draggable({
    listeners: {
      start(event) {
        console.log(event.type, event.target);
      },
      move(event) {
        position.x += event.dx;
        position.y += event.dy;

        event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
      },
    },
  });

  document.body.appendChild(floatingContent);
};
