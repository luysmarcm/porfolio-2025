// components/ContactLinks.js
"use client";
import { Mail, Phone, MapPin, Github, Linkedin, Behance } from "lucide-react";

export default function ContactLinks() {
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
			icon: <Github className="w-5 h-5" />,
			label: "luysmarcm",
			href: "https://github.com/luysmarcm",
		},
		{
			icon: <Linkedin className="w-5 h-5" />,
			label: "linkedin.com/in/luysmarcm",
			href: "https://www.linkedin.com/in/luysmarcm",
		},
		{
			icon: <Behance className="w-5 h-5" />,
			label: "behance.net/luysmarcm",
			href: "https://behance.net/luysmarcm",
		},
	];

	return (
		<div className="space-y-3">
			{contactData.map(({ icon, label, href }, idx) => (
				<div
					key={idx}
					className="flex items-center gap-3 text-sm text-white hover:text-pink-300 transition"
				>
					<span className="text-pink-400">{icon}</span>
					{href ? (
						<a
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline"
						>
							{label}
						</a>
					) : (
						<span>{label}</span>
					)}
				</div>
			))}
		</div>
	);
}
