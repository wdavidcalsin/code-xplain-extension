import { onMessage } from "webext-bridge";

console.log("I am background.js");

onMessage("get-selection", async ({ sender, data }) => {
  const { text } = data as { text: string };

  console.log(sender.context, sender.tabId);

  const API_URL = "https://code-xplain-server.vercel.app/api/openai";

  const url = `${API_URL}/?query=${JSON.stringify(text)}`;

  console.log(JSON.stringify(url));

  const eventSource = new EventSource(url);
  let responseMessage = "";

  eventSource.onerror = (error) => {
    console.error("Event source Onerror:", error);
    eventSource.close();
  };

  eventSource.onmessage = (event) => {
    const { data } = event;
    console.log(data);
    if (data === "[DONE]") {
      eventSource.close();
      return;
    }
    responseMessage += JSON.parse(data);
  };

  console.log("Message Received:", responseMessage);

  return Promise.resolve({ respuesta: "Hola desde el script receptor" });
});
