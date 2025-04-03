import React from 'react'
import ImageGallery from '../image-gallery'
import { getGallery } from '@/actions/get-gallery'

export async function Gallery() {
  const gallery = await getGallery()

  const images: string[] = gallery.map((image) => image.imageUrl)

  return (
    <ImageGallery images={images} />
  )
}
