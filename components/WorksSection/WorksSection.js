"use client";
import WorksGrid from "./WorksGrid";
import { useTranslations } from "next-intl";

const worksI = [
	{
		id: "1",
		name: "Toxiik",
		name2: "Page",
		description: "This is a description of project 1",
		type: "LANDING PAGE",
		url: "toxiik.com",
		image: "/image/toxiik.png",
		year: "2023",
	},
	{
		id: "1",
		name: "MONARCA",
		name2: " LIFE IMPROVEMENT",
		description: "This is a description of project 1",
		type: "LANDING PAGE",
		url: "monarcallc.us/es",
		image: "/image/monarca.png",
		year: "2024",
	},
	{
		id: "1",
		name: "Canguro",
		name2: "Venezuela",
		type: "BUSINESS PAGE",
		url: "cangurovenezuela.com",
		image: "/image/canguro.png",
		year: "2022",
	},
];

const WorksSection = () => {
    	const t = useTranslations("Work");
	return (
		<section className="absolute text-white py-28 ">
			<div className="circle"></div>
			{/* <div class="circle"></div> */}
			<div className=" flex  flex-row place-items-center p-12">
				<h1 className="mb-4 w-1/2 uppercase text-center lg:text-left text-3xl font-bold lg:text-8xl bg-gradient-to-r from-morado via-rosado to-rosado inline-block text-transparent bg-clip-text">
					{t("title")}
				</h1>
				<p className="text-base w-1/2 z-10">{t("text1")}</p>
			</div>
			{worksI.map((work, idx) => (
				<WorksGrid work={work} key={idx} />
			))}

			{/* <div className="circle1"></div> */}
		</section>
	);
};

export default WorksSection;
