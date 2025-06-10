"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from 'next/navigation'
// import { locales } from "@/navigation";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from 'framer-motion';


const NavBar = () => {
	const [isSideMenuOpen, setisSideMenuOpen] = useState(false);
	// const { t } = useTranslations();
	const t = useTranslations("NavBar");
	const localActive = useLocale();
	const router = useRouter();
	const { pathname } = router;

	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
	  setIsOpen(!isOpen);
	};
  

	const links = [
		{ name: "Linkedln", href: "href1", current: false },
		{ name: "GitHug", href: "href2", current: false },
		{ name: "Behance", href: "https://behance.net/luysmarcm", current: false },
		// { name: "links5", href: "href5", current: false },
	];

	const navB = [
		{ name: "links1", href: "href1", current: false },
		{ name: "links2", href: "href2", current: false },
		{ name: "links3", href: "href3", current: false },
		{ name: "links4", href: "href4", current: false },
	];

	const variants = {
		open: {
		  transition: { staggerChildren: 0.07, delayChildren: 0.2 }
		},
		closed: {
		  transition: { staggerChildren: 0.05, staggerDirection: -1 }
		}
	  };

	
	const menuVariants = {
		open: { opacity: 1, x: 0 },
  		closed: { opacity: 0, x: "-100%" },
	  };

	

	const showSideMenu = () => {
		setisSideMenuOpen(!isSideMenuOpen);


	};
	return (
		<>
			<nav className="backdrop-blur-xl bg-[#ffff]/5 p-2 lg:p-2 mt-0 fixed w-full z-10 top-0 shadow-lg">
				<div className="mx-auto flex items-center justify-between px-10">
					<div className="flex w-32 lg:w-1/2 md:justify-start text-white font-extrabold	">
						<Link href="/" passHref>
							{/* <div style={{ width: "35px" }}>
							<Image
								src="/image/logo-monarca.svg"
								alt="Logo"
								width="484"
								height="326"
							/>
						</div> */}
							<h1>LLCM</h1>
						</Link>
					</div>
					<div className="flex lg:content-center justify-between md:w-1/2 md:justify-end ">
						<ul className="list-reset hidden lg:flex justify-between flex-1 md:flex-none items-center">
							<li className="mr-3">
								{links.map((link) => (
									<Link
										// locales={locales}
										key={link.name}
										href={`/${localActive}/${t(link.href)}`}
										// href={t(link.href)}
										className=" px-3 py-2 rounded-md text-md lg:text-lg uppercase font-light text-white hover:text-secundary"
									>
										{link.name}
									</Link>
								))}
							</li>
							<li>
								<button
									className="rounded-full font-light text-black lg:px-5 lg:py-1 bg-rosado hover:bg-morado text-base"
									type="submit"
								>
									{/* <a href={`/${localActive}/#contact`}>{t("buttonCont")}</a> */}
									<a href={t("href5")}>{t("links5")}</a>
								</button>
							</li>
						</ul>
					</div>
					<button
						aria-label="Abrir menu"
						onClick={toggleMenu}
						className=" w-8 h-8 px-2 rounded-xl overflow-hidden text-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
							/>
						</svg>
					</button>
				</div>
			</nav>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="fixed inset-0 bg-black opacity-75 flex justify-center items-center z-50"
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "spring", stiffness: 300, damping: 30 }}
					>
						<div className="relative w-full h-full flex flex-col justify-center items-center">
							<button
								onClick={toggleMenu}
								className="absolute top-4 right-4 text-white"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18 18 6M6 6l12 12"
									/>
								</svg>
							</button>

							<motion.ul
								variants={variants}
								className="space-y-12 text-center flex flex-col"
							>
								{navB.map((link) => (
									<motion.li
										variantsi={variants}
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.95 }}
										key={link.name}
									>
										<Link
											href={`/${localActive}/${t(link.href)}`}
											className="text-5xl font-light uppercase relative inline-block py-1 
												text-transparent bg-clip-text 
												bg-gradient-to-r from-morado via-rosado to-morado 
												bg-[length:200%_100%] bg-[position:200%_0%]
												transition-all duration-500 ease-in-out
												hover:animate-gradient-x"
											onClick={toggleMenu}
										>
											{t(link.name)}
										</Link>
									</motion.li>
								))}
							</motion.ul>
							<div className="absolute bottom-4 left-4 text-white">
								{/* <a className="relative inline-block py-1 text-transparent bg-clip-text bg-gradient-to-r from-[#54b3d6] to-[#54b3d6] via-[#000] bg-[length:200%_100%] bg-[position:-100%] transition-all duration-300 ease-in-out hover:bg-[position:0]">
									{" "}
									Enlace{" "}
								</a> */}
								LET&aposS TALK: LUYSMAR27@GMAIL.COM
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default NavBar;
