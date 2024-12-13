import Image from 'next/image';
import React from 'react'

const CardItem = ({item, t}) => {
  return (
		<div className="flex flex-col  items-center text-center">
			<div className="w-16 h-16 bg-white rounded-lg mb-2">
				<Image
					src={item.image}
					alt={t(item.title)}
					// layout="responsive"
					width={200}
					height={200}
				/>
				{/* <img
					src="https://placehold.co/200x200"
					alt="Event Photo"
					className="rounded-lg shadow-lg"
				/> */}
			</div>
			<h2 className="text-xl font-bold text-white">{t(item.title)}</h2>
			<p className="text-white">{t(item.text)}</p>
		</div>
	);
}

export default CardItem