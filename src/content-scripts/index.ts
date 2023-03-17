import { linkedinConnector } from "../services/LinkedinConnector";
import { LinkedInWebPage } from "../services/LinkedinWebPage";
import { messagingClient } from "../services/WebPageMessaging";

main();

async function main() {
  // subscribe to events from the extension
  new LinkedInWebPage(
    messagingClient,
    linkedinConnector
  ).subscribeToExtensionMessages();
}

let selectText;

document.addEventListener("mouseup", function () {
  selectText = window.getSelection()?.toString();

  console.log(selectText);

  if (selectText !== "") {
    chrome.runtime.sendMessage({ clave: selectText }, function (response) {
      console.log("Response received:", response);
    });
  }
});
