import { sendMessage } from "webext-bridge";

let selectText;

document.addEventListener("mouseup", async function (event) {
  selectText = window.getSelection()?.toString();

  console.log(event);
  console.log(selectText);

  if (selectText !== "") {
    const res = await sendMessage(
      "get-selection",
      { text: selectText },
      "background"
    );
    console.log(res);
  }
});
