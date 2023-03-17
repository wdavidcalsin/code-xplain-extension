import { LinkedInConnector } from "./LinkedinConnector";
import { WebPageMessaging } from "./WebPageMessaging";

export class LinkedInWebPage {
  private messagingClient: WebPageMessaging;
  private linkedinConnector: LinkedInConnector;

  constructor(
    messagingClient: WebPageMessaging,
    linkedinConnector: LinkedInConnector
  ) {
    this.messagingClient = messagingClient;
    this.linkedinConnector = linkedinConnector;
  }

  subscribeToExtensionMessages = () => {
    this.messagingClient.subscribeToExtension(
      "START_CONNECTING",
      this.linkedinConnector.startConnecting
    );

    this.messagingClient.subscribeToExtension(
      "STOP_CONNECTING",
      this.linkedinConnector.stopConnecting
    );
  };
}
