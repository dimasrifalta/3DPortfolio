"use client";
import { motion } from "framer-motion";
import React from "react";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
					<div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-purple-400 via-purple-500 to-transparent" />
				</div>
				<div className="flex flex-col gap-6">
					<div>
						<h1 className="heroHeadText text-white fade-in-up">
							Hi, I&apos;m <span className="text-gradient">Dimas</span>
						</h1>
					</div>
					<div>
						<p className="heroSubText fade-in-up">
							A Creative Full Stack Web Developer
						</p>
					</div>
					
					{/* Tech badges - simplified */}
					<div className="flex flex-wrap gap-3 mt-6 fade-in-up">
						{['React', 'Next.js', 'Three.js', 'TypeScript'].map((tech) => (
							<span 
								key={tech}
								className="px-4 py-2 glass-card text-sm font-medium text-white hover-lift cursor-pointer"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>
			
			<ComputersCanvas />
			
			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about" className="group">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 glass-card hover-lift">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Number.POSITIVE_INFINITY,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-gradient-to-b from-purple-400 to-pink-400 mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
