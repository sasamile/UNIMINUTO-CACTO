import { ArticleInfo } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/relevant-articles`

export async function getArticlesInfo(): Promise<ArticleInfo[]> {
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch billboards');
  }

  return response.json();
}