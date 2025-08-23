"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";

type ServiceCardProps = {
	index: number;
	title: string;
	icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
	return (
		<>
			<Tilt
				options={{ max: 25, scale: 1, speed: 450 }}
				className="xs:w-[250px] w-full"
			>
				<motion.div
					variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
					className="w-full group cursor-pointer"
				>
					<div className="bg-white/5 border border-white/10 rounded-xl p-6 min-h-[250px] flex flex-col items-center justify-center text-center hover-lift backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
						{/* Icon container */}
						<div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
							<Image
								src={icon}
								width={48}
								height={48}
								alt={title}
								className="w-12 h-12 object-contain filter drop-shadow-lg"
							/>
						</div>
						
						{/* Title */}
						<h3 className="text-white text-lg font-semibold">
							{title}
						</h3>
					</div>
				</motion.div>
			</Tilt>
		</>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText text-gradient">Introduction</p>
				<h2 className="sectionHeadText">Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-gray-300 text-[17px] max-w-[3xl] leading-[30px] bg-white/5 p-6 rounded-xl border border-white/10"
			>
				Hi, I&apos;m a web developer with a passion for crafting solutions. I specialize in front-end technologies like 
				<span className="text-white font-semibold">React, Next.js, and Angular</span>, and also have strong experience in back-end development with 
				<span className="text-white font-semibold">Laravel and .NET Core</span>. I love tackling challenges and finding creative ways to solve problems.
			</motion.p>
			
			<div className="mt-20 flex flex-wrap gap-10 justify-center">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
