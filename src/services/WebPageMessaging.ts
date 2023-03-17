import { MessageTypeDataMap, MessageType, Message } from "../models/Message";

type Callback<Payload> = (payload: Payload) => any;

export class WebPageMessaging {
  private isSubscribed = false;
  private subscriptions: Map<MessageType, Callback<any>> = new Map();

  /**
   * Subscribe to tasks from the extension.
   * @param type type of the message from MessageType
   * @param callback a callback that accepts the MessageData based on the type
   */
  public subscribeToExtension = <
    T extends MessageType = MessageType,
    P extends MessageTypeDataMap[T] = MessageTypeDataMap[T]
  >(
    type: T,
    callback: Callback<P>
  ) => {
    this.subscriptions.set(type, callback);

    // subscribe if haven't subscribed already.
    if (!this.isSubscribed) {
      this.subscribe();
    }
  };

  /** Private chrome subscription to messages from the extension */
  private subscribe = () => {
    if (this.isSubscribed) {
      // already subscribed
      return;
    }

    this.isSubscribed = true;

    chrome.runtime.onMessage.addListener(
      (request: Message, sender, sendResponse) => {
        if (sender.tab) {
          throw new Error("Message not from the extension");
        }

        const callback = this.subscriptions.get(request.type);

        if (!callback) {
          throw new Error(`Callback not present for ${request.type} message`);
        }

        const response = callback(request.data);

        sendResponse(response);
      }
    );
  };
}

export const messagingClient = new WebPageMessaging();
