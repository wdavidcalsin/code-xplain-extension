import "./index.css";
import { sendMessage } from "webext-bridge";

let selectText;

document.addEventListener("mouseup", async (event) => {
  selectText = window.getSelection()?.toString();

  if (selectText === "") return;

  const res = await sendMessage(
    "get-selection",
    { text: selectText },
    "background"
  );

  const floatingButton = document.createElement("button");

  floatingButton.innerHTML =
    '<svg width="20" height="20" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66667 3.625C9.02573 3.625 8.41104 3.87961 7.95783 4.33283C7.50461 4.78604 7.25 5.40073 7.25 6.04167V10.875C7.25 11.5159 6.99539 12.1306 6.54217 12.5838C6.08896 13.0371 5.47427 13.2917 4.83333 13.2917H3.625V15.7083H4.83333C5.47427 15.7083 6.08896 15.9629 6.54217 16.4162C6.99539 16.8694 7.25 17.4841 7.25 18.125V22.9583C7.25 23.5993 7.50461 24.214 7.95783 24.6672C8.41104 25.1204 9.02573 25.375 9.66667 25.375H12.0833V22.9583H9.66667V16.9167C9.66667 16.2757 9.41205 15.661 8.95884 15.2078C8.50563 14.7546 7.89094 14.5 7.25 14.5C7.89094 14.5 8.50563 14.2454 8.95884 13.7922C9.41205 13.339 9.66667 12.7243 9.66667 12.0833V6.04167H12.0833V3.625M19.3333 3.625C19.9743 3.625 20.589 3.87961 21.0422 4.33283C21.4954 4.78604 21.75 5.40073 21.75 6.04167V10.875C21.75 11.5159 22.0046 12.1306 22.4578 12.5838C22.911 13.0371 23.5257 13.2917 24.1667 13.2917H25.375V15.7083H24.1667C23.5257 15.7083 22.911 15.9629 22.4578 16.4162C22.0046 16.8694 21.75 17.4841 21.75 18.125V22.9583C21.75 23.5993 21.4954 24.214 21.0422 24.6672C20.589 25.1204 19.9743 25.375 19.3333 25.375H16.9167V22.9583H19.3333V16.9167C19.3333 16.2757 19.5879 15.661 20.0412 15.2078C20.4944 14.7546 21.1091 14.5 21.75 14.5C21.1091 14.5 20.4944 14.2454 20.0412 13.7922C19.5879 13.339 19.3333 12.7243 19.3333 12.0833V6.04167H16.9167V3.625H19.3333Z" fill="white"/>  </svg>';

  floatingButton.style.position = "absolute";
  floatingButton.style.color = "white";
  floatingButton.style.left = `${event.clientX + window.scrollX}px`;
  floatingButton.style.top = `${event.clientY + window.scrollY}px`;
  floatingButton.classList.add(
    "btn",
    "btn-primary",
    "btn-sm",
    "bg-gradient-to-r",
    "from-indigo-500",
    "via-purple-500",
    "to-pink-500"
  );

  document.body.appendChild(floatingButton);

  document.addEventListener("mousedown", (event) => {
    if (event.target !== floatingButton) {
      floatingButton.remove();
    }
  });

  console.log(res);
});
