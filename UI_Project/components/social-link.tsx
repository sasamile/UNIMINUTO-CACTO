import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface SocialLinkProps {
  href: string,
  logo: string,
}

export default function SocialLink({ href, logo }: SocialLinkProps) {
  return (
    <Link href={href} target="_blank">
      <p className="mx-2" aria-label="Facebook">
        <Image
          src={logo}
          alt="Facebook"
          width={24}
          height={24}
        />
      </p>
    </Link>
  )
}
