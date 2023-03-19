import { sendMessage } from "webext-bridge";

export const popoverContent = (selectText: string) => {
  const contentDiv = document.createElement("div");

  const contentHeader = document.createElement("div");
  contentHeader.classList.add(
    "flex",
    "items-center",
    "gap-3",
    "border-b",
    "border-solid",
    "border-gray-300",
    "px-4",
    "py-2",
    "justify-between"
  );
  contentHeader.innerHTML = `<div class="flex items-center gap-3">
    <div class="w-6">
      <img class="w-full" src="https://i.postimg.cc/gjNmTL1C/logo-icon.png" alt="" />
    </div>
    <h1 class="text-slate-600 text-lg font-medium p-0 m-0">Code Xplain</h1>
  </div>
  <div>
    <select class="select select-sm bg-primary-content border-gray-400 h-1 w-full max-w-xs  py-0">
      <option value="spanish">
        <button type="button">Spanish</button>
      </option>
      <option value="english">
        <button type="button">English</button>
      </option>
    </select>
  </div>`;

  const contentBody = document.createElement("div");
  contentBody.classList.add(
    "px-4",
    "py-3",
    "text-slate-700",
    "text-base",
    "font-normal"
  );

  sendMessage("get-selection", { text: selectText }, "background").then(
    (res) => (contentBody.innerHTML = `${res}`)
  );

  contentDiv.appendChild(contentHeader);
  contentDiv.appendChild(contentBody);

  return contentDiv;
};
