import Image from 'next/image';
import React from 'react'

const CardMiVi = ({ item, t }) => {
	return (
		<section className="text-center">
			<div className="flex flex-col items-center">
				<Image src={item.imagen} alt={t(item.titulo)} width={64} height={64} className='bg-primary rounded-full p-2' />
				<div className="mb-6 md:mb-0 items-center">
					<h2 className="text-2xl font-bold my-2">{t(item.titulo)} </h2>
					<p className="text-gray-600 text-justify">{t(item.text)}</p>
				</div>
			</div>
		</section>
	);
};

export default CardMiVi