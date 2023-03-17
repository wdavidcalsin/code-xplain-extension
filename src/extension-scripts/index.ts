import { messagingClient } from "../services/ExtensionMessaging";
import { LinkedInExtension } from "../services/LinkedinExtension";

main();

function main() {
  // get connect button
  const connectBtn = <HTMLButtonElement>document.getElementById("connect-btn");

  // get demo checkbox
  const isDemoCheckBox = <HTMLInputElement>document.getElementById("is-demo");

  // start extension logic
  new LinkedInExtension(messagingClient, connectBtn, isDemoCheckBox);
}
