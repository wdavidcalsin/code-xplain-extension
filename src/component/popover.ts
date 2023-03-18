import interact from "interactjs";
import { FLOATING_CONTENT_CLASS_LIST } from "../constants";
import { popoverContent } from "./popover-content";

export const popover = (eventClick: MouseEvent) => {
  const floatingContent = document.createElement("div");
  floatingContent.innerText += popoverContent("Hello how are you");
  floatingContent.style.zIndex = "100";
  floatingContent.style.position = "absolute";
  floatingContent.style.left = `${eventClick.clientX - 10 + window.scrollX}px`;
  floatingContent.style.top = `${eventClick.clientY - 10 + window.scrollY}px`;

  floatingContent.classList.add(...FLOATING_CONTENT_CLASS_LIST);

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

  document.addEventListener("mousedown", (eventClick) => {
    if (eventClick.target !== floatingContent) {
      floatingContent.remove();
    }
  });

  return floatingContent;
};
