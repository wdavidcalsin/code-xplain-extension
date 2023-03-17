import { ExtensionMessaging } from "./ExtensionMessaging";

export class LinkedInExtension {
  private connectBtn: HTMLButtonElement;
  private isRunning = false;
  private isDemoCheckbox: HTMLInputElement;
  private messagingClient: ExtensionMessaging;

  constructor(
    messagingClient: ExtensionMessaging,
    connectBtn: HTMLButtonElement,
    isDemoCheckBox: HTMLInputElement
  ) {
    this.messagingClient = messagingClient;
    this.connectBtn = connectBtn;
    this.isDemoCheckbox = isDemoCheckBox;

    this.connectBtn.addEventListener("click", this.connectBtnClick);
  }

  connectBtnClick = () => {
    if (this.isRunning) {
      this.onStopConnecting();
    } else {
      this.onStartConnecting();
    }
  };

  onStartConnecting = () => {
    this.connectBtn.textContent = "STOP CONNECTING";
    this.isRunning = true;

    this.messagingClient.send({
      type: "START_CONNECTING",
      data: { isDemo: this.isDemoCheckbox.checked },
    });
  };

  onStopConnecting = () => {
    this.connectBtn.textContent = "START CONNECTING";
    this.isRunning = false;

    this.messagingClient.send({ type: "STOP_CONNECTING", data: null });
  };
}
