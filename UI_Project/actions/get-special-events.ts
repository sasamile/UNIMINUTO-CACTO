import { Event } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/special-events`

export async function getSpecialEvents(): Promise<Event[]> {
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

export async function getSpecialEvent(eventId: string): Promise<Event> {
  const response = await fetch(`${URL}/${eventId}`, {
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