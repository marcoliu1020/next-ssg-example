import { baseUrl } from ".";

export interface Article {
  id: string;
  title: string;
  content: string;
}

export async function getArticles(): Promise<Article[]> {
  const url = new URL("/articles", baseUrl).href;

  const res = await fetch(url, {
    next: { revalidate: 60, tags: ["articles"] },
  });

  const data = await res.json();

  return data;
}
