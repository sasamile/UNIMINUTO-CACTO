import { Event } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/events`

export async function getEvents(): Promise<Event[]> {
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

export async function getEvent(eventId: string): Promise<Event> {
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