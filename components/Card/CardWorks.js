import React from 'react'
import { ExternalLink } from "lucide-react";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

const CardWorks = ({work}) => {
  return (
		<card className="relative group bg-[#1A1A1A] text-white shadow-md flex flex-col justify-between p-6 gap-6 order-2 md:order-1 cursor-pointer overflow-hidden">
			{/* Hover - contenido oculto hasta que el cursor entra */}
			<div className="absolute inset-0 bg-morado bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4 py-6 z-10 ">
				<p className="mb-4 text-sm sm:text-base">
					Proyecto creado con React, Next.js y TailwindCSS, desplegado en
					Vercel.
				</p>
				<div className="flex gap-4 mb-4">
					<FaReact className="w-6 h-6" title="React" />
					<RiNextjsFill className="w-6 h-6" title="Next.js" />
					<RiTailwindCssFill className="w-6 h-6" title="TailwindCSS" />
					<IoLogoVercel className="w-6 h-6" title="Vercel" />
				</div>
				<a
					href="https://toxiik.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-white underline hover:text-rosado"
				>
					Ver sitio →
				</a>
			</div>

			{/* Contenido visible (base) */}
			<div className="flex justify-between text-sm  uppercase">
				<p>{work.year}</p>
				<h1>{work.type}</h1>
			</div>

			<div className="flex flex-col items-start">
				<a
					href="https://toxiik.com"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center text-base hover:underline gap-2"
				>
					<ExternalLink size={18} /> {work.url}
				</a>

				<h2 className="uppercase text-left text-3xl font-bold lg:text-6xl bg-gradient-to-r from-morado to-rosado inline-block text-transparent bg-clip-text mt-4">
					{work.name} <span className="font-light">{work.name2}</span>
				</h2>
			</div>
		</card>
	);
}

export default CardWorks;