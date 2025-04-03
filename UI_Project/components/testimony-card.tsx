import { Testimonial, Testimony } from '@/types'
import ImgAvatar from './img-avatar'
import { Card } from './ui/card'

interface TestimonyCardProps {
  testimony: Testimonial
}

export default function TestimonyCard({ testimony }: TestimonyCardProps) {
  const { imageUrl, name, position, content } = testimony
  return (
    <div className="select-none flex ms:flex-row flex-col items-center justify-center   ms:px-6 px-3 py-6 gap-6 border-none">
      <div className="relative">
        <ImgAvatar className="md:h-[140px] md:w-[140px]" imageSrc={imageUrl} />
        {/* <Quotes className="h-10 w-10 absolute -top-3 left-2 z-50" /> */}
      </div>
      <div className="space-y-3">
        <blockquote className="text-base font-medium leading-snug italic max-ms:text-center">
          &quot;{content}&quot;
        </blockquote>
        <div className="space-y-1 max-ms:text-center">
          <h3 className="text-sm font-bold">{name}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{position}</p>
        </div>
      </div>
    </div>
  )
}

function Quotes({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m21.301 4c.411 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.738 4.129-4.308 4.129-3.24 0-4.83-2.547-4.83-5.307 0-5.98 6.834-10.693 8.468-10.693zm-10.833 0c.41 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.739 4.129-4.308 4.129-3.241 0-4.83-2.547-4.83-5.307 0-5.98 6.833-10.693 8.468-10.693z"
        fill="#d1d1d1"
        stroke="#959595"
        strokeWidth="1"
      />
    </svg>
  )
}
