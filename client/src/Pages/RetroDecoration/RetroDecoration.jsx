import React from "react";

import { retroDecor } from "../../constans";

const RetroDecoration = () => {
	return (
		<section className="container mt-10 min-h-full flex-auto">
			<h2 className="text-center font-Felidae text-7xl font-medium">
				About Retro Decoration
			</h2>

			<div className="overflow-hidden">
				{retroDecor.map((obj, idx) => (
					<figure key={idx} className="block">
						<div className="mt-5 flex flex-1 flex-col gap-5 bg-lightred p-5 md:flex-row ">
							<img
								src={obj.img}
								alt="about"
								className="h-1/2 w-full object-cover md:max-h-[350px] md:w-1/2"
							/>
							<figcaption className="basis-2/3 text-lightwhite">
								<span className="block pb-2 text-start text-3xl font-medium">
									{obj.title}
								</span>
								<p className="block text-justify leading-6">{obj.body}</p>
							</figcaption>
						</div>
					</figure>
				))}
			</div>
		</section>
	);
};

export default RetroDecoration;
