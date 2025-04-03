"use client";

import Image from "next/image";
import DropdownMenu from "./dropdown-menu";
import { Button } from "./ui/button";
import { MapPin, Phone, Search, UserRound } from "lucide-react";
import {
  enlacesEstudiaEnUniminuto,
  enlacesProyecciónSocial,
  enlacesSistemaUniminuto,
  enlacesVidaUniversitaria,
  modalidadesInscripcion,
  modalidadesMatriculas,
  noticiasEstudiaEnUniminuto,
  noticiasProyeccionSocial,
  noticiasSistemaUniminuto,
  noticiasVidaUniversitaria,
  roles,
  sedes,
} from "@/constants";
import { useRouter } from "next/navigation";
import MobileNavbar from "./mobile-navbar";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous) {
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 lg:h-[86px] h-auto w-full flex items-center max-lg:flex-col max-sm:flex-row max-sm:justify-between lg:justify-between bg-[#162644] border-b border-yellow-400 px-8 max-lg:py-1 max-lg:gap-1 left-0 right-0 z-50"
    >
      <a href="/">
        <picture>
          <Image
            src="/images/uniminuto-logo.png"
            alt="Logo uniminuto"
            width={255}
            height={68}
            className="max-w-[90%]"
          />
        </picture>
      </a>

      <div className="max-sm:hidden h-full flex flex-col justify-between">
        <div className="flex-1 py-2 flex items-center lg:justify-end justify-center gap-4">
          <DropdownMenu
            linksArray={sedes}
            Icon={MapPin}
            buttonLabel="Nuestras sedes"
          />
          <DropdownMenu
            linksArray={roles}
            Icon={UserRound}
            fillIcon
            buttonLabel="Soy"
          />
          <Button
            size="sm"
            variant="ghost"
            className="h-7 hover:bg-transparent hover:text-white justify-center text-white gap-[5px] px-0 py-2"
            onClick={() => router.push("https://www.uniminuto.edu/contactanos")}
          >
            <Phone
              className="text-[#ffd300] h-[15px] w-[15px]"
              fill="#ffd300"
            />
            <span className="text-xs font-medium">Contáctanos</span>
          </Button>
          <Button
            size="sm"
            className="h-7 bg-[#a81bb4] hover:text-[#a81bb4] hover:bg-white justify-center gap-1 text-white px-4 py-2 max-xl:hidden"
            onClick={() => router.push("https://www.uniminuto.edu/donaciones")}
          >
            <span className="text-xs font-medium">Donaciones</span>
          </Button>
          <DropdownMenu
            linksArray={modalidadesInscripcion}
            buttonColor="#8bbe00"
            buttonLabel="Inscríbete"
          />
          <DropdownMenu
            linksArray={modalidadesMatriculas}
            buttonColor="#ffa700"
            buttonLabel="Matricúlate"
          />
          <Button
            size="sm"
            className="group h-7 bg-[#004a93] hover:bg-white hover:text-[#004a93] justify-center text-white gap-[5px] px-4 py-2 max-xl:hidden"
            onClick={() =>
              router.push("https://www.uniminuto.edu/oferta-academica")
            }
          >
            <span className="text-sm font-medium">Programas</span>
            <Search className="text-white group-hover:text-[#004a93] h-[15px] w-[15px]" />
          </Button>
        </div>
        <div className="flex-1 flex items-end lg:justify-end justify-center xl:gap-6 gap-3 w-full">
          <DropdownMenu
            linksArray={enlacesSistemaUniminuto}
            buttonLabel="SISTEMA UNIMINUTO"
            mainMenu
            navbarNews={noticiasSistemaUniminuto}
          />
          <DropdownMenu
            linksArray={enlacesEstudiaEnUniminuto}
            buttonLabel="ESTUDIA EN UNIMINUTO"
            mainMenu
            navbarNews={noticiasEstudiaEnUniminuto}
          />
          <DropdownMenu
            linksArray={enlacesVidaUniversitaria}
            buttonLabel="VIDA UNIVERSITARIA"
            mainMenu
            navbarNews={noticiasVidaUniversitaria}
          />
          <Button
            onClick={() =>
              router.push("https://www.uniminuto.edu/portal-i-d-i-c")
            }
            size="sm"
            className="max-xl:hidden h-7 justify-center py-2 pb-3 px-0 bg-transparent hover:bg-transparent font-bold"
          >
            <span className="text-xs uppercase">Portal I + D + I + D</span>
          </Button>
          <DropdownMenu
            linksArray={enlacesProyecciónSocial}
            buttonLabel="PROYECCIÓN SOCIAL"
            mainMenu
            className="max-md:hidden"
            navbarNews={noticiasProyeccionSocial}
          />
        </div>
      </div>
      <MobileNavbar />
    </motion.header>
  );
}
