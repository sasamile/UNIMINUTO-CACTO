import { News } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/news`

export async function getNews(): Promise<News[]> {
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }

  return response.json();
}