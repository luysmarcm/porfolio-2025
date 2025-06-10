import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import Link from "next/link";

export default function BurgerMenu() {
	const [isOpen, setIsOpen] = useState(false);

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
		visible: function (i) {
			return {
				opacity: 1,
				y: 0,
				transition: { delay: i * 0.1, duration: 0.4 },
			};
		},
	};

	const links = ["Inicio", "Sobre mí", "Trabajos", "Contacto"];

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.nav
					initial="hidden"
					animate="visible"
					exit="hidden"
					variants={menuVariants}
					className="fixed inset-0 bg-black opacity-75 flex flex-col items-center justify-center z-40"
				>
					<button
						onClick={() => setIsOpen(false)}
						className="absolute top-6 left-6 p-2 z-50"
						aria-label="Cerrar menú"
					>
						<X className="w-8 h-8 text-white" />
					</button>
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
				</motion.nav>
			)}
		</AnimatePresence>
	);
}
