export const eventSourceOpenAi = (text: string) => {
  const API_URL = "https://code-xplain-server.vercel.app/api/openai";
  console.log(API_URL);
  const url = `${API_URL}/?query=${JSON.stringify(text)}`;

  console.log(JSON.stringify(url));

  const eventSource = new EventSource(url);
  return eventSource;
};
