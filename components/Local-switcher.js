"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LocalSwitcher() {
	const [isPending, setIsPending] = useState(false);
	const router = useRouter();
	const localeActive = useLocale();

	const onSelectChange = (e) => {
		const nextLocale = e.target.value;
		setIsPending(true);
		router.replace(`/${nextLocale}`).then(() => setIsPending(false));
	};

	return (
		<label className="border-2 rounded">
			<p className="sr-only">change language</p>
			<select
				defaultValue={localeActive}
				className="bg-transparent py-2"
				onChange={onSelectChange}
				disabled={isPending}
			>
				<option value="en">English</option>
				<option value="es">Espanol</option>
			</select>
		</label>
	);
}