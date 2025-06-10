import React from 'react'
import CardWorks from '../Card/CardWorks';
import Image from 'next/image';



const WorksGrid = ({work, idx}) => {
    console.log(work)
  return (
		<div
			className="grid grid-cols-1 md:grid-cols-2 w-full overflow-hidden"
		>
			<CardWorks work={work} />
			<div className="order-1 md:order-2">
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