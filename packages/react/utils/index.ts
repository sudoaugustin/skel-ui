export const fetcher = (url: string) => {
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  return fetch(`https://jsonplaceholder.org/${url}`)
    .then((res) => res.json())
    .then(async (data) => {
      await delay(2500);
      return data;
    });
};
