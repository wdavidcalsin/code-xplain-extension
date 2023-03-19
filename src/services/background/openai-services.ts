export const eventSourceOpenAi = (text: string) => {
  // Enter Openai Api Url
  const API_URL = "";

  const url = `${API_URL}/?query=${JSON.stringify(text)}`;

  const eventSource = new EventSource(url);

  return eventSource;
};
