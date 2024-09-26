export const fetcher = (url: string) => fetch(`https://jsonplaceholder.typicode.com/${url}`).then((res) => res.json());
