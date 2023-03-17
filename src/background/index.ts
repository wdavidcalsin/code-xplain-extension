chrome.tabs.query(
  {
    active: true,
    currentWindow: true,
  },
  function (tabs) {
    var activeTab = tabs[0];
    console.log(activeTab);
  }
);

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   console.log("I am background script");
//   console.log(message);
//   sendResponse({ message: "Response from background JS" });
// });

console.log("I am background.js");

chrome.runtime.onMessage.addListener(async function (message) {
  const { clave } = message;
  const API_URL = "https://code-xplain-server.vercel.app/api/openai";

  const url = `${API_URL}/?query=${JSON.stringify(clave)}`;

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
