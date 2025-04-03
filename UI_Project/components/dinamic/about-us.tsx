import { getAboutUsInfo } from "@/actions/get-about-us-info"
import InfoSection from "../info-section"

export async function AboutUs() {
  const aboutUsInfo = await getAboutUsInfo()

  return (
    <div className="lg:container max-lg:max-w-[700px] mx-auto mb-12 space-y-4 my-4">
      {aboutUsInfo.map((info, i) => (
        <InfoSection
          key={i}
          title={info.title}
          description={info.description}
          imageSrc={info.image}
          reverse={info.reverse}
        />
      ))}
    </div>
  )
}
