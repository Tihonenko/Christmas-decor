import { textAnimation } from "components/HomePage/HeroSection/Variants";
import { about, connect } from "constans/";
import { motion } from "framer-motion";
import { ourProducts } from "img/";
import React from "react";

//TODO: ADD ONE MORE PHOTOS FOR ABOUT TODO:
const AboutUs = () => {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0, once: true }}
			className="container mt-10"
		>
			<motion.h1
				variants={textAnimation}
				custom={1}
				className="text-center font-Felidae text-6xl md:text-7xl"
			>
				About Us
			</motion.h1>
			<motion.p
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: {
							duration: 1,
							delay: 0.5
						}
					}
				}}
				className="text-center text-sm md:text-base"
			>
				The decorators warehouse was opened in 2012. Our mission in the store is
				to offer "Unique Christmas decor you won't find in a major store." We
				are a small local business. each item is hand-picked with the magic of
				Christmas in mind. We share our love for Christmas around the world, we
				now ship to over 30 countries.
			</motion.p>
			<div className="mt-10 flex w-full flex-col-reverse gap-5 text-lightwhite lg:flex-row">
				<motion.div
					variants={textAnimation}
					custom={2}
					className="w-full cursor-default bg-lightred p-5 lg:w-1/2"
				>
					<h2 className="text-center font-Felidae text-6xl lg:text-left lg:text-7xl">
						Our Products
					</h2>
					<p className="text-justify text-sm lg:text-left lg:text-base">
						There are more than 20 different Merry Christmas themed areas in our
						store. decor ranges from rustic to elegant and quirky. Each area is
						an adventure in itself where you will see displays like nowhere
						else. as commercial fixtures, outdoor resin, countless decorations,
						wreaths, garlands, flowers, ribbons, and more. We are your one stop
						shop for all your Christmas decorations!
					</p>
				</motion.div>
				<motion.div
					variants={textAnimation}
					custom={2.5}
					className="w-full lg:w-1/2"
				>
					<img
						src={ourProducts}
						alt="ourProducts"
						className="h-full w-full object-cover lg:h-full lg:w-full"
					/>
				</motion.div>
			</div>
			<motion.h3
				variants={textAnimation}
				custom={4}
				className="mt-10 text-center font-Felidae text-7xl"
			>
				Shop Online or In Store
			</motion.h3>
			<motion.p
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: {
							duration: 1,
							delay: 0.5
						}
					}
				}}
				className="mt-2 text-center text-base"
			>
				Shop online for some of our most popular Christmas themes or come
				experience our Christmas Wonderland and shop in-store. We hope to see
				you soon!
			</motion.p>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ amount: 0.2, once: true }}
				className="mt-5 flex flex-col gap-5 md:flex-row "
			>
				{about.map((obj, idx) => (
					<motion.figure className="w-full md:w-1/3 " key={idx}>
						<motion.img
							variants={textAnimation}
							custom={obj.custom}
							src={obj.img}
							className="h-full w-full hover:brightness-110"
						/>
					</motion.figure>
				))}
			</motion.div>
			<div className="mt-10 flex items-center justify-center gap-2">
				<h5 className="cursor-default uppercase">connect with @DECOR</h5>

				<ul className="flex gap-2">
					{connect.map((obj, idx) => (
						<li
							key={idx}
							className="p-1 transition-colors hover:bg-lightred/80"
						>
							<a href={obj.link}>
								<img src={obj.img} alt="" className="h-[35px] w-[35px]" />
							</a>
						</li>
					))}
				</ul>
			</div>
		</motion.section>
	);
};

export default AboutUs;
