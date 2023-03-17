import { MessageConsumeFn } from "../models/Message";

export class ExtensionMessaging {
  activeTab?: chrome.tabs.Tab;

  private getActiveTab = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });

    if (!tab || !tab.id) {
      throw new Error("No tab id present");
    }

    return tab;
  };

  /** send message of any format */
  send: MessageConsumeFn = async (message) => {
    if (!this.activeTab) {
      this.activeTab = await this.getActiveTab();
    }

    if (!this.activeTab.id) {
      throw new Error("Active tab id not present");
    }

    const response = await chrome.tabs.sendMessage(this.activeTab.id, message);

    return response;
  };
}

export const messagingClient = new ExtensionMessaging();
