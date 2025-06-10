import React from 'react'
import { motion } from "framer-motion";
import { Code, Server, Database, Settings, Paintbrush, Wrench } from "lucide-react";

const stacks = [
	{
		title: "skill6",
		color: "bg-indigo-600/20 text-indigo-300",
		icon: <Code className="w-5 h-5 text-indigo-300" />,
		items: [
			"JavaScript",
			"React.js",
			"Next.js",
			"TailwindCSS",
			"Chakra UI",
			"Material UI",
		],
	},
	{
		title: "skill7",
		color: "bg-purple-600/20 text-purple-300",
		icon: <Server className="w-5 h-5 text-purple-300" />,
		items: ["Node.js", "GraphQL", "Prisma", "Strapi", "Magento"],
	},
	{
		title: "skill5",
		color: "bg-sky-600/20 text-sky-300",
		icon: <Settings className="w-5 h-5 text-sky-300" />,
		items: ["AWS", "Firebase", "Docker", "NGINX"],
	},
	{
		title: "skill4",
		color: "bg-emerald-600/20 text-emerald-300",
		icon: <Database className="w-5 h-5 text-emerald-300" />,
		items: ["MongoDB", "PostgreSQL"],
	},
	{
		title: "skill3",
		color: "bg-pink-600/20 text-pink-300",
		icon: <Paintbrush className="w-5 h-5 text-pink-300" />,
		items: ["Figma", "Illustrator"],
	},
	{
		title: "skill2",
		color: "bg-zinc-600/20 text-zinc-300",
		icon: <Wrench className="w-5 h-5 text-zinc-300" />,
		items: ["Git", "GitHub", "Agile/Scrum", "SEO básico"],
	},
];
const CardSkills = ({t}) => {
  return (
		// <card>
		// 	<h2 className="text-2xl font-bold">Skills</h2>
		// 	<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-5 font-Poppins">
		// 		<div className="grid grid-rows-2 gap-3 w-3/4">
		// 			<p className="text-white">{t("skill1")}</p>
		// 			<div className="w-full bg-gray-200 rounded-full h-2.5 ">
		// 				<div
		// 					className="bg-gradient-to-r from-morado via-rosado to-rosado h-2.5 rounded-full"
		// 					style={{ width: "70%" }}
		// 				></div>
		// 			</div>
		// 		</div>
		// 		<div className="grid grid-rows-2 gap-3 w-3/4">
		// 			<p className="text-white">{t("skill2")}</p>
		// 			<div className="w-full bg-gray-200 rounded-full h-2.5">
		// 				<div
		// 					className="bg-gradient-to-r from-morado via-rosado to-rosado h-2.5 rounded-full"
		// 					style={{ width: "60%" }}
		// 				></div>
		// 			</div>
		// 		</div>
		// 		<div className="grid grid-rows-2 gap-3 w-3/4">
		// 			<p className="text-white">{t("skill3")}</p>
		// 			<div className="w-full bg-gray-200 rounded-full h-2.5">
		// 				<div
		// 					className="bg-gradient-to-r from-morado via-rosado to-rosado h-2.5 rounded-full"
		// 					style={{ width: "45%" }}
		// 				></div>
		// 			</div>
		// 		</div>
		// 		<div className="grid grid-rows-2 gap-3 w-3/4">
		// 			<p className="text-white">{t("skill4")}</p>
		// 			<div className="w-full bg-gray-200 rounded-full h-2.5 ">
		// 				<div
		// 					className="bg-gradient-to-r from-morado via-rosado to-rosado h-2.5 rounded-full"
		// 					style={{ width: "45%" }}
		// 				></div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </card>
		<section className="lg:mr-10 lg:p-5">
			<h2 className="text-2xl font-bold text-white mb-6">{t("text2")}</h2>
			<p className="text-gray-400 mb-8">{t("text3")}</p>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{stacks.map((stack, index) => (
					<motion.div
						key={stack.title}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1, duration: 0.4 }}
						className="bg-zinc-800 rounded-2xl p-4 shadow-lg hover:scale-[1.02] transition-transform duration-200"
					>
						<h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
							{stack.icon} {t(stack.title)}
						</h3>
						<div className="flex flex-wrap gap-2">
							{stack.items.map((tech) => (
								<span
									key={tech}
									className={`${stack.color} px-3 py-1 rounded-full text-sm text-white`}
								>
									{tech}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}

export default CardSkills