"use client";
import CardInfo from "@/components/Card/CardInfo";
import CardSkills from "@/components/Card/CardSkills";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");
  return (
		<section className=" text-white py-28 text-center lg:text-start ">
			<div className="flex flex-col lg:flex-row place-items-center p-5">
				<h1 className="mb-4 lg:w-1/2 uppercase text-center lg:text-left text-5xl font-bold lg:text-8xl bg-gradient-to-r from-morado via-rosado to-rosado inline-block text-transparent bg-clip-text">
					{t("title")}
				</h1>
				<p className="text-base w-1/2 text-center">{t("subTitle")}</p>
			</div>
			<div className="grid grid-cols-none lg:grid-cols-2 overflow-hidden place-content-center">
				<div className="flex flex-col space-y-5 p-5">
					<h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
						{t("hello")} <span className="font-bold">Luysmar</span>
					</h2>
					<p>{t("text")}</p>

					<CardInfo t={t} />
				</div>
				<CardSkills t={t} />
			</div>
		</section>
	);
}

export default About;