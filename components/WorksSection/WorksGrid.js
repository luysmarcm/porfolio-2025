import React from 'react'
import CardWorks from '../Card/CardWorks';
import Image from 'next/image';



const WorksGrid = ({work, idx}) => {
    console.log(work)
  return (
		<div
			// className={`grid grid-cols-none  overflow-hidden ${
			// 	idx % 2 === 0 ? "lg:" : "lg:grid-cols-2"
			// }`}
			className="grid grid-cols-none lg:grid-cols-2 overflow-hidden"
		>
			<CardWorks work={work} />
			<div>
				<Image
					src={work.image}
					alt="Monarca"
					width="1920"
					height="1766"
					priority
				/>
			</div>
		</div>
	);
}

export default WorksGrid