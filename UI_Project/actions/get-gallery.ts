import { Gallery } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/gallery`

export async function getGallery(): Promise<Gallery[]> {
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch gallery');
  }

  return response.json();
}