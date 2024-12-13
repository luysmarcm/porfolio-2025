import Image from 'next/image';
import CardMiVi from '../Card/CardMiVi';

const AboutUs = ({t}) => {
	const items = [
		{
			imagen: "/image/mision.png",
			titulo: "mision",
			text: "textM",
		},
		{
			imagen: "/image/vision.png",
			titulo: "vision",
			text: "textV",
		},
	];

  return (
		<section className="p-4 lg:p-0 lg:py-10">
			<div className="flex items-center flex-col justify-center w-full lg:flex-row lg:justify-around gap-y-10">
				<div className="max-w-sm lg:max-w-xl lg:w-1/2 lg:justify-center ">
					<div className="lg:relative lg:z-20">
						<Image
							src="/image/a1.png"
							alt="About Us"
							// layout="responsive"
							width={913}
							height={1288}
							className="rounded-lg"
						/>
					</div>
				</div>
				<div className="flex flex-col space-y-7 lg:space-y-5 items-center lg:items-end  lg:w-1/2">
					<div className="text-center py-6">
						<h2 className="text-3xl lg:text-5xl font-extrabold text-primary">
							{t("title")}
						</h2>
						<div className="mt-2 w-40 h-3 bg-secundary inline-block"></div>
					</div>
					<p className="text-base lg:text-xl text-justify">{t("text")}</p>
					<div className="auto-cols-max grid grid-cols-1 md:grid-cols-2  place-content-around  gap-8">
						{items.map((item, index) => (
							<CardMiVi key={index} item={item} t={t} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutUs