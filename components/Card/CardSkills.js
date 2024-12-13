import React from 'react'

const CardSkills = ({t}) => {
  return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-5 font-Poppins">
			<div className="grid grid-rows-2 gap-3 w-3/4">
				<p className="text-white">{t("skill1")}</p>
				<div className="w-full bg-gray-200 rounded-full h-2.5 ">
					<div
						className="bg-gradient-to-r from-morado via-rosado to-rosado h-2.5 rounded-full"
						style={{ width: "70%" }}
					></div>
				</div>
			</div>
			<div className="grid grid-rows-2 gap-3 w-3/4">
				<p className="text-white">{t("skill2")}</p>
				<div className="w-full bg-gray-200 rounded-full h-2.5">
					<div
						className="bg-gradient-to-r from-morado via-rosado to-rosado h-2.5 rounded-full"
						style={{ width: "60%" }}
					></div>
				</div>
			</div>
			<div className="grid grid-rows-2 gap-3 w-3/4">
				<p className="text-white">{t("skill3")}</p>
				<div className="w-full bg-gray-200 rounded-full h-2.5">
					<div
						className="bg-gradient-to-r from-morado via-rosado to-rosado h-2.5 rounded-full"
						style={{ width: "45%" }}
					></div>
				</div>
			</div>
			<div className="grid grid-rows-2 gap-3 w-3/4">
				<p className="text-white">{t("skill4")}</p>
				<div className="w-full bg-gray-200 rounded-full h-2.5 ">
					<div
						className="bg-gradient-to-r from-morado via-rosado to-rosado h-2.5 rounded-full"
						style={{ width: "45%" }}
					></div>
				</div>
			</div>
		</div>
	);
}

export default CardSkills