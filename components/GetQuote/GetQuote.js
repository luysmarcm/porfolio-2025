"use client"
import { useState } from "react";
import Modal from "../Modal/Modal";
import { useTranslations } from "next-intl";
import Toastify from "toastify-js";

const GetQuote = () => {
	const buttons = [
		{
			button: "buttonA",
		},
		{
			button: "buttonCh",
		},
		{
			button: "buttonR",
		},
		{
			button: "buttonI",
		},
	];
	const t1 = useTranslations("GetQuote");
	const t = useTranslations("Contact")
	const textoNotificacion = t1("message");
	const error = t1("error");
	// const codeZ = [
	// 	77008, 75201, 75202, 75203, 75204, 33601, 33602, 33603, 33604, 32801, 32802,
	// 	32803, 32804, 77001, 77002, 77003, 77004, 76951, 75015, 76597, 73301, 78830,
	// 	73344, 76676, 75599, 75016, 75053, 75047, 75049, 75046, 75380, 75942, 75934,
	// 	77976, 77855, 78670, 79053, 78591, 88595, 73960, 77878, 77663, 75132, 79534,
	// 	76880, 75017, 79105, 79942, 76573, 75026, 77838, 75880, 75085, 75029, 77463,
	// 	75014, 75011, 77404, 75507, 77836, 79226, 79852, 78102, 76442, 78624, 76240,
	// 	76528, 77963
	// ];
	const [postalCode, setPostalCode] = useState("");
	const [isValid, setisValid] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [servicioSele, setServicioSele] = useState("")

	const handleInputChange = (e) => {
		setPostalCode(e.target.value);
	};
	
	const handleCheckPostalCode = (services) => {
		setServicioSele(services);

		// Verifica si el valor de postalCode no está en blanco
		if (!postalCode) {
			Toastify({
				text: error,
				duration: 3000,
				style: {
					background: "red",
					borderRadius: "0.5rem",
					textAlign: "center",
				},
				close: true,
				gravity: "bottom",
				position: "center",
			}).showToast();
			console.log(
				"El código postal está en blanco. Por favor, ingresa un valor válido."
			);
			return; // Detén la ejecución si el código postal está en blanco
		}

		const isValidPostalCode = postalCode >= 73301 && postalCode <= 88595;
		// const codigoNumerico = parseInt(postalCode, 10);
		if (isValidPostalCode) {
			setisValid(true);
			setIsModalOpen(true);
			// setPostalCode("");
		} else {
			setisValid(false);
			setIsModalOpen(true);
		}
	};
	return (
		<div className="flex flex-col space-y-4">
			<div className="text-left">
				<h2 className="text-3xl lg:text-2xl font-extrabold">
					{t1("subTitle")}
				</h2>
			</div>
			<p>{t1("codeV")}</p>
			<input
				className="border border-primary rounded-lg"
				type="text"
				placeholder={t1("text")}
				value={postalCode}
				onChange={handleInputChange}
			/>
			<div className="grid grid-cols-1 lg:grid-cols-2 place-content-around gap-4">
				{buttons.map((button, index) => (
					<button
						key={index}
						className="rounded-full text-white font-bold bg-primary  py-3 p-3 hover:bg-secundary"
						onClick={() => handleCheckPostalCode(t1(button.button))}
					>
						{t1(button.button)}
					</button>
				))}
			</div>
			<Modal
				t1={t1}
				t={t}
				isValid={isValid}
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				servicioSele={servicioSele}
				postalCode={postalCode}
			/>
		</div>
	);
};

export default GetQuote;