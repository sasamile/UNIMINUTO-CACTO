import { Testimonial } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/testimonials`

export async function getTestimonials(): Promise<Testimonial[]> {
  console.log(URL)
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch testimonials');
  }

  return response.json();
}