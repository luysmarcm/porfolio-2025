import React from "react";
import FormContact from "../Form/FormContact";

const Modal = ({
	isOpen,
	onClose,
	isValid,
	t,
	t1,
	servicioSele,
	postalCode,
}) => {
	if (!isOpen) return null;
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
			{isValid === true ? (
				<div className="bg-white rounded-lg shadow-lg w-[400px] lg:w-[500px] overflow-y-auto max-h-[85vh]">
					<div className="bg-primary h-full	text-center p-5">
						<h2 className="text-white text-lg lg:text-xl font-bold text-center p-5">
							{t("title")}
						</h2>
						<h className="text-white text-base lg:text-base text-center">
							{t("subTitle")}
						</h>
					</div>
					<FormContact
						t={t}
						servicioSele={servicioSele}
						postalCode={postalCode}
					/>
					<button
						onClick={onClose}
						className="rounded-full font-light text-white text-center bg-primary px-5 py-1 hover:bg-secundary"
					>
						{t1("buttonClo")}
					</button>
				</div>
			) : (
				<div className="bg-white p-4 rounded-lg text-center">
					<p className="text-2xl p-10">{t1("alert")}</p>
					<button
						onClick={onClose}
						className="rounded-full font-light text-white bg-primary px-5 py-1 hover:bg-secundary"
					>
						Cerrar
					</button>
					{/* <button
						type="button"
						className="absolute top-72 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
						onClick={onClose}
					>
						<span className="sr-only">Close</span>
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
					</button> */}
				</div>
			)}
		</div>
	);
};

export default Modal;
