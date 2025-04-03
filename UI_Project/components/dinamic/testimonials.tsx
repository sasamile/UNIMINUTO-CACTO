import React from 'react'
import TestimonialsCarousel from '../testimonials-carousel'
import { getTestimonials } from '@/actions/get-testimonials'

export async function Testimonials() {
  const testimonials = await getTestimonials()

  return (
    <TestimonialsCarousel testimonials={testimonials} />
  )
}
