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

const projects = [
	{
		id: 1,
		name: "Portfolio UX",
		description: "Diseño intuitivo para presentar casos de estudio.",
		image: "/image/toxiik.png",
		link: "https://ejemplo.com/portfolio",
	},
	{
		id: 2,
		name: "Tienda Online",
		description: "E-commerce moderno con pagos y animaciones.",
		image: "/image/toxiik.png",
		link: "https://ejemplo.com/tienda",
	},
	{
		id: 3,
		name: "Tienda Online",
		description: "E-commerce moderno con pagos y animaciones.",
		image: "/image/toxiik.png",
		link: "https://ejemplo.com/tienda",
	},
];
  
const WorksSection = () => {
    	const t = useTranslations("Work");
	return (
		<section className="absolute text-white py-28 text-center lg:text-start">
			<div className=" flex flex-col  lg:flex-row place-items-center p-12">
				<h1 className="mb-4 lg:w-1/2 uppercase text-center lg:text-left text-5xl font-bold lg:text-8xl bg-gradient-to-r from-morado via-rosado to-rosado inline-block text-transparent bg-clip-text">
					{t("title")}
				</h1>
				<p className="text-base lg:w-1/2 z-10">{t("text1")}</p>
			</div>
			{worksI.map((work, idx) => (
				<WorksGrid work={work} key={idx} />
			))}

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
				{projects.map((project) => (
					<div
						key={project.id}
						className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
					>
						{/* Imagen del proyecto */}
						<img
							src={project.image}
							alt={project.name}
							className="w-full h-48 object-cover"
						/>

						{/* Contenido */}
						<div className="p-5 flex flex-col gap-3">
							<h3 className="text-2xl font-bold text-gray-800">
								{project.name}
							</h3>
							<p className="text-sm text-gray-600">{project.description}</p>
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="text-morado font-semibold hover:underline"
							>
								Ver proyecto →
							</a>
						</div>
					</div>
				))}
			</div>

			{/* <div className="circle1"></div> */}
		</section>
	);
};

export default WorksSection;
