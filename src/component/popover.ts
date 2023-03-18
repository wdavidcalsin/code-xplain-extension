import { FLOATING_CONTENT_CLASS_LIST } from "../constants";
import { popoverContent } from "./popover-content";

export const popover = (eventClick: MouseEvent, selectText: string) => {
  const floatingContent = document.createElement("div");
  const popoverContentVal = popoverContent(selectText);
  floatingContent.appendChild(popoverContentVal);

  floatingContent.setAttribute("data-floating-content", "");

  floatingContent.style.zIndex = "100";
  floatingContent.style.position = "absolute";
  floatingContent.style.left = `${eventClick.clientX - 10 + window.scrollX}px`;
  floatingContent.style.top = `${eventClick.clientY - 10 + window.scrollY}px`;

  floatingContent.classList.add(...FLOATING_CONTENT_CLASS_LIST);

  document.addEventListener("mousedown", (eventClick) => {
    const target = eventClick.target as HTMLElement;

    if (!floatingContent.contains(target)) {
      floatingContent.remove();
    }
  });

  return floatingContent;
};
