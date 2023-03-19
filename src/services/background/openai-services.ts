export const eventSourceOpenAi = (
  text: string,
  language: string = "spanish"
) => {
  // Enter Openai Api Url
  const API_URL = "";

  const url = `${API_URL}/?prompt=${JSON.stringify(text)}&language=${language}`;

  const eventSource = new EventSource(url);

  return eventSource;
};
