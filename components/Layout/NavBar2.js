"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BiMenuAltLeft } from "react-icons/bi";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const menuVariants = {
	hidden: {
		clipPath: "circle(0% at 0% 0%)",
		transition: { duration: 0.5, ease: "easeInOut" },
	},
	visible: {
		clipPath: "circle(150% at 0% 0%)",
		transition: { duration: 0.6, ease: "easeInOut" },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.1, duration: 0.4 },
	}),
};

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

export default function Navbar() {
	//Local traslatins
    const t = useTranslations("NavBar");
    const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();

	const toggleLocale = () => {
	const newLocale = locale === "en" ? "es" : "en";
	const newPath = `/${newLocale}${pathname.replace(`/${locale}`, "")}`;
	router.replace(newPath);
	};

    //BurgerMenu
    const [isOpen, setIsOpen] = useState(false);
        const navB = [
                { name: "links1", href: "href1", current: false },
                { name: "links2", href: "href2", current: false },
                { name: "links3", href: "href3", current: false },
                { name: "links4", href: "href4", current: false },
            ];
        const links = [
					{
						name: "Linkedln",
						href: "https://www.linkedin.com/in/luysmarcm",
						current: false,
					},
					{
						name: "GitHug",
						href: "https://github.com/luysmarcm",
						current: false,
					},
					{
						name: "Behance",
						href: "https://behance.net/luysmarcm",
						current: false,
					},
				];    
        

	return (
		<navbar className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
			<div className="flex items-center w-full max-w-7xl px-6 py-2 rounded-full lg:backdrop-blur-xl lg:bg-white/10 shadow-lg bg-black/75 ">
				<button
					onClick={() => setIsOpen(true)}
					className="p-2 z-50"
					aria-label="Abrir menú"
				>
					<BiMenuAltLeft className="w-8 h-8 text-rosado" />
				</button>

				<div className="flex items-center ml-2">
					<span className="text-white font-bold">LLCM</span>
				</div>

				<div className="ml-auto flex items-center space-x-6 text-white">
					<div className="mr-3 flex items-center space-x-4">
						{links.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="px-3 py-2 rounded-md text-sm lg:text-base uppercase font-light text-rosado hover:text-secundary"
							>
								<span className="hidden lg:inline">{link.name}</span>
							</Link>
						))}
					</div>
					<button
						onClick={toggleLocale}
						className="rounded-full font-light text-black px-4 py-1 bg-rosado hover:bg-morado text-sm"
					>
						{locale === "en" ? "ES" : "EN"}
					</button>
				</div>
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.nav
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={menuVariants}
						className="fixed inset-0 z-40 flex items-center justify-center"
					>
						{/* Fondo: blur solo en desktop, opacidad en móvil */}
						<div className="absolute inset-0 bg-black/75 lg:bg-black/30 lg:backdrop-blur-md z-0" />

						{/* Botón "X" en su posición original */}
						<button
							onClick={() => setIsOpen(false)}
							className="absolute top-6 left-6 p-2 z-50"
							aria-label="Cerrar menú"
						>
							<X className="w-8 h-8 text-white" />
						</button>

						{/* Contenido */}
						<div className="relative z-10 flex flex-col items-center justify-center">
							{navB.map((link, i) => (
								<motion.a
									custom={i}
									initial="hidden"
									animate="visible"
									exit="hidden"
									variants={itemVariants}
									href="#"
									variantsi={variants}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
									key={link.name}
									className={`text-white text-2xl font-semibold my-3 ${
										pathname === `/${locale}/${link.href}` ? "underline" : ""
									}`}
								>
									<Link
										href={`/${locale}/${t(link.href)}`}
										className="text-5xl font-light uppercase relative inline-block py-1 
								text-transparent bg-clip-text 
								bg-gradient-to-r from-morado via-rosado to-morado 
								bg-[length:200%_100%] bg-[position:200%_0%]
								transition-all duration-500 ease-in-out
								hover:animate-gradient-x"
										onClick={() => setIsOpen(false)}
									>
										{t(link.name)}
									</Link>
								</motion.a>
							))}
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</navbar>
	);
}
