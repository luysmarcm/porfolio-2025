"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import GetQuote from "../GetQuote/GetQuote";

const telefono = "13213306424";

const Contact = () => {
	const formatNumber = (number) => {
		const format = number.slice(1);
		return format.replace("-", "").replace(" ", "");
	};
	const t = useTranslations("Contact");

	return (
		<div id="contact">
			<div className="flex flex-row place-items-center p-5">
				<h1 className="mb-4 w-1/2 uppercase text-center lg:text-left text-3xl font-bold lg:text-8xl bg-gradient-to-r from-morado via-rosado to-rosado inline-block text-transparent bg-clip-text">
					{t("title")}
				</h1>
				<p className="text-base w-1/2">{t("text1")}</p>
			</div>
		</div>
	);
};

export default Contact;
