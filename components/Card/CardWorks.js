import React from 'react'

const CardWorks = ({work}) => {
  return (
		<card className="bg-white flex flex-col place-content-between p-5">
			<div className="flex justify-between text-xl text-black uppercase">
				<h1 className="justify-start">{work.type}</h1>
				<p className="justify-end">{work.year}</p>
			</div>
			<div>
				<p className="text-xl text-black ">{work.url}</p>
				<h2 className="uppercase text-center lg:text-left text-3xl font-bold lg:text-6xl bg-gradient-to-r from-morado to-rosado inline-block text-transparent bg-clip-text">
					{work.name} <span className="font-light">{work.name2}</span>
				</h2>
			</div>
		</card>
	);
}

export default CardWorks