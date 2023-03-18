import { sendMessage } from "webext-bridge";

export const popoverContent = (selectText: string) => {
  const contentDiv = document.createElement("div");
  contentDiv.classList.add(
    "w-96",
    "rounded-md",
    "border",
    "border-solid",
    "border-gray-400",
    "bg-white",
    "shadow"
  );

  const contentHeader = document.createElement("div");
  contentHeader.classList.add(
    "flex",
    "items-center",
    "gap-3",
    "border-b",
    "border-solid",
    "px-4",
    "py-3"
  );

  const img = document.createElement("img");
  img.src = "https://i.postimg.cc/gjNmTL1C/logo-icon.png";
  img.classList.add("w-9");

  const title = document.createElement("h1");
  title.innerText = "Code Xplain";
  title.classList.add("text-lg", "font-medium", "text-slate-800");

  contentHeader.appendChild(img);
  contentHeader.appendChild(title);

  const contentBody = document.createElement("div");
  contentBody.classList.add("px-4", "py-3");

  sendMessage("get-selection", { text: selectText }, "background").then(
    (res) => (contentBody.innerHTML = `${res}`)
  );

  contentDiv.appendChild(contentHeader);
  contentDiv.appendChild(contentBody);

  return contentDiv;
};
