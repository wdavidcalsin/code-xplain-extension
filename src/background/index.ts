import { onMessage } from "webext-bridge";
import { eventSourceOpenAi } from "../services";

console.log("I am background.js");

onMessage("get-selection", async ({ sender, data }) => {
  const { text } = data as { text: string };

  console.log(sender.context, sender.tabId);

  const eventSource = eventSourceOpenAi(text);
  let responseMessage = "";

  eventSource.onerror = (error) => {
    console.error("Event source Onerror:", error);
    eventSource.close();
  };
  console.log("Message Received:", responseMessage);

  return new Promise((resolve) => {
    eventSource.onmessage = (event) => {
      const { data } = event;
      console.log(data);
      if (data === "[DONE]") {
        eventSource.close();
        resolve(responseMessage);
      } else {
        responseMessage += JSON.parse(data);
      }
    };
  });

  // return Promise.resolve({ response: responseMessage });
});
