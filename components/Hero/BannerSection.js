"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import Script from "next/script";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { ArrowDownToLine, Briefcase } from "lucide-react";

const BannerSection = () => {
    const t = useTranslations("Banner");
	return (
		<div className="min-h-screen flex items-center px-6 lg:py-12 bg-black text-white relative">
			<motion.div
				initial={{ x: -1000, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ x: 1000, opacity: 0 }}
				transition={{ duration: 1.1 }}
				className="flex flex-col items-center lg:items-start space-y-4"
			>
				<h className="text-2xl md:text-3xl font-normal">{t("subTitle")}</h>
				<h2 className="uppercase text-center lg:text-left text-5xl font-bold lg:text-8xl bg-gradient-to-r from-morado via-rosado to-rosado inline-block text-transparent bg-clip-text">
					{t("title")}
				</h2>
				<br />
				<p className="text-xl md:text-3xl font-normal">{t("parrafo1")}</p>
				<div className="flex flex-row space-x-4 justify-center lg:justify-start py-6">
					<a
						href="/cv/Luysmar_Colmenares_Desarrollo_FrontEnd.pdf"
						download="Luysmar_Colmenares_Desarrollo_FrontEnd.pdf"
						className="inline-flex items-center gap-2 rounded-full font-semibold text-black px-6 py-2 bg-rosado hover:bg-morado transition duration-300"
					>
						<ArrowDownToLine className="w-5 h-5" />
						{t("buttonc")}
					</a>
					<a
						href="#services"
						className="inline-flex items-center gap-2 rounded-full font-semibold text-black px-6 py-2 bg-morado hover:bg-rosado transition duration-300"
					>
						<Briefcase className="w-5 h-5" />
						{t("buttons")}
					</a>
				</div>
				<div className="justify-end">
					<h>{t("stack")}</h>
					<div className="pt-5 flex flex-row space-x-10 ">
						<FaReact className="w-8 h-8 ml-2 fill-white" />
						<RiNextjsFill className="w-8 h-8 ml-2 fill-white" />
						<RiTailwindCssFill className="w-8 h-8 ml-2 fill-white" />
						<IoLogoVercel className="w-8 h-8 ml-2 fill-white" />
					</div>
				</div>
			</motion.div>

			{/* <div className="w-[500px] h-[500px] bg-gradient-to-r from-[#F693A4] to-[#F693A4] rounded-[25%] absolute blur-[100px] top-[500px] left-[-340px] z-[7]"></div> */}
		</div>
	);
};

export default BannerSection;
