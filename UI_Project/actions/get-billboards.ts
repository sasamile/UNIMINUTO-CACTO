import { Billboard } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

export async function getBillboards(): Promise<Billboard[]> {
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