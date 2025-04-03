import Image from 'next/image'
import SocialLink from './social-link'

export default function Footer() {
  return (
    <footer className="bg-[#162644] text-white lg:py-20 md:py-16 py-10 sm:px-12">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-4">
        <div className="max-lg:mx-auto mb-6 lg:mb-0">
          <Image
            src="/images/logo.png"
            alt="Uniminuto Logo"
            width={200}
            height={50}
          />
        </div>
        <div className="text-center lg:text-left mb-6 lg:mb-0 space-y-2">
          <h3 className="text-sm font-bold text-[#efc704] uppercase mb-4">
            notificaciones judiciales y/o extrajudiciales
          </h3>
          <p className="text-sm">Cra 73A # 80 - 90</p>
          <p className="text-sm">Teléfono: 123 456 789</p>
          <p className="text-sm">Correo: notificaciones@uniminuto.edu</p>
          <p className='text-sm'>El siguiente correo es de uso exclusivo para juzgados, tribunales y altas cortes o requerimientos de autoridades administrativas:
direccion.juridica@uniminuto.edu</p>
        </div>
        <div className="text-center lg:text-left mb-6 lg:mb-0 ">
          <h3 className="text-sm font-bold text-[#efc704] uppercase mb-4">
            Conéctate con la u
          </h3>
          <div className="flex-1 flex max-lg:justify-center mb-6 lg:mb-0">
            <SocialLink
              href="https://www.facebook.com/UNIMINUTOCOLOMBIA/"
              logo="/icons/facebook-logo.png"
            />
            <SocialLink
              href="https://www.youtube.com/channel/UCYripsaQMUFIufEMKisPTsw"
              logo="/icons/youtube-logo.png"
            />
            <SocialLink
              href="https://x.com/uniminutocol?mx=2"
              logo="/icons/twitter-logo.png"
            />
            <SocialLink
              href="https://www.instagram.com/uniminutocol/"
              logo="/icons/instagram-logo.png"
            />
          </div>
        </div>
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h3 className="text-sm font-bold text-[#efc704] uppercase mb-4">
            Contáctenos
          </h3>
          <p className="text-sm">Dirección: Ejemplo 123, Ciudad</p>
          <p className="text-sm">Teléfono: 0800 123 456</p>
          <p className="text-sm">Horario: 8:00 AM - 6:00 PM</p>
        </div>
      </div>
    </footer>
  )
}
