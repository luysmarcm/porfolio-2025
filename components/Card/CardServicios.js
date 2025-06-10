import { Paintbrush, Code } from "lucide-react";

const tarjetas = [
	{
		id: "01",
		title: "DESIGN",
		icon: <Paintbrush className="w-6 h-6 text-purple-900" />,
		text: "Diseño de interfaces con enfoque en usabilidad y estética.",
		bg: "bg-purple-300 text-purple-900",
	},
	{
		id: "02",
		title: "CODE",
		icon: <Code className="w-6 h-6 text-pink-900" />,
		text: "Desarrollo web moderno usando tecnologías eficientes.",
		bg: "bg-pink-300 text-pink-900",
	},
];

export default function DesignCodeCards() {
	return (
		<section className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-10">
			{tarjetas.map((card) => (
				<div
					key={card.id}
					className={`rounded-xl p-6 ${card.bg} shadow-md hover:shadow-xl transition-shadow duration-200`}
				>
					<div className="flex justify-between items-start">
						<div>
							<h3 className="text-2xl font-bold">{card.id}</h3>
							<p className="text-lg font-semibold tracking-wide">
								{card.title}
							</p>
						</div>
						{card.icon}
					</div>
					<p className="mt-4 text-sm">{card.text}</p>
				</div>
			))}
		</section>
	);
}
