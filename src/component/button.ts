import { sendMessage } from "webext-bridge";
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

  floatingButtonImg.addEventListener("click", async (eventClick) => {
    handleClick(eventClick, selectText);
    floatingButtonImg.style.display = "none";
    floatingButtonImg.remove();
  });

  return floatingButtonImg;
};

const handleClick = async (event: MouseEvent, selectText: string) => {
  const res = await sendMessage(
    "get-selection",
    { text: selectText },
    "background"
  );
  console.log(res);

  window.getSelection()?.removeAllRanges();

  const floatingContent = popover(event);
  document.body.appendChild(floatingContent);
};
