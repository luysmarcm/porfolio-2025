'use client'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from "framer-motion";
import Script from 'next/script';
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from 'react-icons/fa';
import { IoLogoVercel } from "react-icons/io5";

const HeroSection = () => {
	const t = useTranslations("Banner");
	return (
		<div className="relative h-screen bg-banner bg-cover">
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="lg:text-start  lg:w-3/5 ">
					<motion.div
						initial={{ x: -1000, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: 1000, opacity: 0 }}
						transition={{ duration: 1.1 }}
					>
						<h className="text-center lg:text-left text-base md:text-3xl font-normal">
							{t("subTitle")}
						</h>
						<h2 className="uppercase text-center lg:text-left text-3xl font-bold lg:text-8xl bg-gradient-to-r from-morado via-rosado to-rosado inline-block text-transparent bg-clip-text">
							{t("title")}
						</h2>
						<br />
						<p className="text-center lg:text-left text-base md:text-3xl font-normal">
							{t("parrafo1")}
						</p>
					</motion.div>
					<div className="flex flex-row space-x-4 justify-center lg:justify-start py-6">
						<motion.button
							initial={{ x: 1000, opacity: 0 }} // Empieza fuera de la pantalla a la derecha
							animate={{ x: 0, opacity: 1 }} // Se desplaza hacia la posición original
							exit={{ x: -1000, opacity: 0 }} // Sale hacia la izquierda al cambiar de página
							transition={{ duration: 1.1 }}
							className="rounded-full font-extralight text-black px-5 py-1 bg-rosado hover:bg-morado"
						>
							<div className="text-center inline-flex items-center relative">
								<a
									href="/cv/Luysmar_Colmenares_Desarrollo_FrontEnd.pdf"
									download="Luysmar_Colmenares_Desarrollo_FrontEnd.pdf"
									className="px-1 font-bold"
								>
									{t("buttonc")}
								</a>
							</div>
						</motion.button>
						<motion.button
							initial={{ x: 1000, opacity: 0 }} // Empieza fuera de la pantalla a la derecha
							animate={{ x: 0, opacity: 1 }} // Se desplaza hacia la posición original
							exit={{ x: -1000, opacity: 0 }} // Sale hacia la izquierda al cambiar de página
							transition={{ duration: 1.1 }}
							className="rounded-full font-light text-black px-5 py-1 bg-morado hover:bg-rosado"
						>
							<div className="text-center inline-flex items-center relative">
								<a href="#services" className="px-1 font-bold">
									{t("buttons")}
								</a>
							</div>
						</motion.button>
					</div>
					<div className="justify-end">
						<h>Technologies used to build this website:</h>
						<div className="pt-5 flex flex-row space-x-10 ">
							<FaReact className="w-8 h-8 ml-2 fill-white" />
							<RiNextjsFill className="w-8 h-8 ml-2 fill-white" />
							<RiTailwindCssFill className="w-8 h-8 ml-2 fill-white" />
							<IoLogoVercel className="w-8 h-8 ml-2 fill-white" />
						</div>
					</div>
				</div>
			</div>
			<div className="w-[500px] h-[500px] bg-gradient-to-r from-[#F693A4] to-[#F693A4] rounded-[25%] absolute blur-[100px] top-[500px] left-[-340px] z-[7]"></div>
		</div>
	);
};

export default HeroSection;