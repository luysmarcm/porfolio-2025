"use client";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Toastify from "toastify-js";

const FormContact = ({ t, servicioSele, postalCode }) => {
	const textoNotificacion = t("message");
	const error = t("error");
	// funciona ojo
	const [formData, setFormData] = useState({
		nombre: "",
		telefono: "",
		email: "",
		estado: "",
		ciudad: "",
		codigoPostal: postalCode,
		servicio: servicioSele,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// Obtén los valores de los campos del formulario
		const { nombre, telefono, email, estado, ciudad, codigoPostal, servicio } =
			formData;
		// Verifica si todos los campos están llenos
		if (
			nombre &&
			telefono &&
			email &&
			estado &&
			ciudad &&
			codigoPostal &&
			servicio
		) {
			// Si todos los campos están llenos, envía el formulario
			emailjs
				.sendForm(
					"lifeimprovement",
					"template_87c1vdx",
					e.target,
					"7bIc42U8JY4eMLcX8"
				)
				.then(
					(result) => {
						Toastify({
							text: textoNotificacion,
							duration: 3000,
							style: {
								background: "green",
								borderRadius: "0.5rem",
								textAlign: "center",
							},
							close: true,
							gravity: "bottom",
							position: "center",
						}).showToast();
						// console.log("Email enviado exitosamente:", result.text);
					},
					(error) => {
						// console.log("Error al enviar el email:", error.text);
					}
				);

			// Reinicia los valores del formulario
			setFormData({
				nombre: "",
				telefono: "",
				email: "",
				estado: "",
				ciudad: "",
				codigoPostal: "",
				servicio: "",
			});
		} else {
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
			// console.log(
			// 	"Por favor, completa todos los campos antes de enviar el formulario."
			// );
		}
	};
	return (
		<form onSubmit={handleSubmit} className="w-full max-w-lg pt-4 px-4">
			<div className="flex flex-wrap -mx-3 mb-6 ">
				<div className="w-full px-3">
					<label
						className="block tracking-wide text-gray-700 text-xs lg:text-xl font-bold mb-2"
						htmlFor="nombre"
					>
						{t("services")}
					</label>
					<input
						readOnly
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full  mb-3  px-5 py-1 leading-tight focus:outline-none focus:bg-white"
						id="servicio"
						type="text"
						placeholder="Juan Pérez"
						name="servicio"
						value={formData.servicio}
						onChange={handleChange}
					/>
				</div>
				<div className="w-full px-3">
					<label
						className="block tracking-wide text-gray-700 text-xs lg:text-xl font-bold mb-2"
						htmlFor="nombre"
					>
						{t("name")}
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full  mb-3  px-5 py-1 leading-tight focus:outline-none focus:bg-white"
						id="nombre"
						type="text"
						placeholder="Juan Pérez"
						name="nombre"
						value={formData.nombre}
						onChange={handleChange}
					/>
				</div>
				<div className="w-full px-3">
					<label
						className="block  tracking-wide text-gray-700 text-xs font-bold mb-2 lg:text-xl"
						htmlFor="telefono"
					>
						{t("phone")}
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full  mb-3  px-5 py-1 leading-tight focus:outline-none focus:bg-white"
						id="text"
						type="text"
						value={formData.telefono}
						placeholder={t("phone")}
						name="telefono"
						onChange={handleChange}
					/>
				</div>
				<div className="w-full px-3">
					<label
						className="block  tracking-wide text-gray-700 text-xs font-bold mb-2 lg:text-xl"
						htmlFor="email"
					>
						{t("email")}
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full  mb-3  px-5 py-1 leading-tight focus:outline-none focus:bg-white"
						id="email"
						type="email"
						placeholder={t("email")}
						value={formData.email}
						name="email"
						onChange={handleChange}
					/>
				</div>
				<div className="w-full px-3">
					<label
						className="block  tracking-wide text-gray-700 text-xs font-bold mb-2 lg:text-xl"
						htmlFor="state"
					>
						{t("state")}
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full  mb-3  px-5 py-1 leading-tight focus:outline-none focus:bg-white"
						id="estado"
						type="text"
						placeholder={t("state")}
						name="estado"
						onChange={handleChange}
						value={formData.estado}
					/>
				</div>
				<div className="w-full px-3">
					<label
						className="block  tracking-wide text-gray-700 text-xs font-bold mb-2 lg:text-xl"
						htmlFor="telefono"
					>
						{t("city")}
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full  mb-3  px-5 py-1 leading-tight focus:outline-none focus:bg-white"
						id="ciudad"
						type="text"
						placeholder={t("city")}
						name="ciudad"
						value={formData.ciudad}
						onChange={handleChange}
					/>
				</div>
				<div className="w-full px-3">
					<label
						className="block  tracking-wide text-gray-700 text-xs font-bold mb-2 lg:text-xl"
						htmlFor="telefono"
					>
						{t("zipCode")}
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full  mb-3  px-5 py-1 leading-tight focus:outline-none focus:bg-white"
						id="codigoPostal"
						type="text"
						placeholder={t("zipCode")}
						name="codigoPostal"
						value={formData.codigoPostal}
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full h-full px-3">
					<button
						className="rounded-full font-semibold text-white bg-primary px-5 py-1 hover:bg-secundary w-full h-full "
						type="submit"
					>
						{t("buttonE")}
					</button>
				</div>
			</div>
		</form>
	);
};

export default FormContact;
