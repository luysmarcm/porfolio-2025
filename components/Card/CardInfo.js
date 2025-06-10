"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaBehance } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
const telefono = "04245294294";

const contactData = [
	{
		icon: <Mail className="w-5 h-5" />,
		label: "luysmar27@gmail.com",
		href: "mailto:luysmar27@gmail.com",
	},
	{
		icon: <Phone className="w-5 h-5" />,
		label: "+58 4245294294",
		href: "tel:+584245294294",
	},
	{
		icon: <MapPin className="w-5 h-5" />,
		label: "Venezuela",
		href: null,
	},
	{
		icon: <LuGithub className="w-5 h-5" />,
		label: "luysmarcm",
		href: "https://github.com/luysmarcm",
	},
	{
		icon: <FiLinkedin className="w-5 h-5" />,
		label: "linkedin.com/in/luysmarcm",
		href: "https://www.linkedin.com/in/luysmarcm",
	},
	{
		icon: <FaBehance className="w-5 h-5" />,
		label: "behance.net/luysmarcm",
		href: "https://behance.net/luysmarcm",
	},
];

const CardInfo = ({ t }) => {
	const formatNumber = (number) => {
		const format = number.slice(1);
		return format.replace("-", "").replace(" ", "");
	};
	return (
		<section>
			<h2 className="text-2xl font-bold text-white mb-6">{t("text4")}</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{contactData.map((item, index) => (
					<div
						key={index}
						className="flex items-center gap-3 text-sm text-white hover:text-pink-300 transition"
					>
						{item.icon}
						{item.href ? (
							<a
								href={item.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:underline hover:text-pink-300 transition"
							>
								{item.label}
							</a>
						) : (
							<span className="text-white hover:text-pink-300 transition">
								{item.label}
							</span>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default CardInfo;
