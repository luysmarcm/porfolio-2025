import React from "react";
import { ClipLoader, RingLoader } from "react-spinners";

const loading = () => {
	return (
		<div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
			<div className="flex flex-col items-center space-y-4">
				{/* <ClipLoader size={80} color="#f472b6" /> */}
				<RingLoader color="#BCA7E8" size={100} />
				<h1 className="text-xl md:text-3xl text-white font-light animate-pulse">
					Cargando...
				</h1>
			</div>
		</div>
	);
};

export default loading;
