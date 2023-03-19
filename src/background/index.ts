import { onMessage } from "webext-bridge";
import { eventSourceOpenAi } from "../services";

onMessage("get-selection", async ({ data }) => {
  const { text } = data as { text: string };

  const eventSource = eventSourceOpenAi(text);
  let responseMessage = "";

  eventSource.onerror = (error) => {
    console.error("Event source Onerror:", error);
    eventSource.close();
  };

  return new Promise((resolve) => {
    eventSource.onmessage = (event) => {
      const { data } = event;

      if (data === "[DONE]") {
        eventSource.close();
        resolve(responseMessage);
      } else {
        responseMessage += JSON.parse(data);
      }
    };
  });
});
