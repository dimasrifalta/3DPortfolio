"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

type ProjectCardProps = {
	index: number;
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link: string;
	netlify_link: string;
};

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	netlify_link,
}: ProjectCardProps) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 25,
					scale: 1,
					speed: 450,
				}}
				className="sm:w-[360px] w-full group"
			>
				<div className="bg-white/5 border border-white/10 rounded-xl p-4 h-full flex flex-col hover-lift backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
					{/* Image Container - Simplified */}
					<div className="relative w-full h-[200px] mb-4 rounded-lg overflow-hidden">
						<Image
							src={image}
							width={1000}
							height={1000}
							alt="project_image"
							className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
						
						{/* Simple action buttons */}
						<div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<Link
								href={source_code_link}
								target="_blank"
								className="w-8 h-8 bg-black/80 rounded-full flex items-center justify-center hover:bg-black transition-colors duration-200"
							>
								<Image
									src="/tech/github.webp"
									width={16}
									height={16}
									alt="source-code"
									className="object-contain filter invert"
								/>
							</Link>
							<Link
								href={netlify_link}
								target="_blank"
								className="w-8 h-8 bg-blue-600/90 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
							>
								<Image
									src="/tech/netlify.webp"
									width={14}
									height={14}
									alt="live-demo"
									className="object-contain"
								/>
							</Link>
						</div>
					</div>

					{/* Content - Simplified */}
					<div className="flex-1 flex flex-col">
						<h3 className="text-white font-semibold text-lg mb-2 leading-tight">{name}</h3>
						<p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">{description}</p>
						
						{/* Enhanced Tech Stack Tags */}
						<div className="flex flex-wrap gap-2 mt-auto">
							{tags.map((tag) => (
								<span
									key={`${name}-${tag.name}`}
									className="px-3 py-1 text-xs font-medium text-white bg-white/20 rounded-md border border-white/20 hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm"
								>
									{tag.name}
								</span>
							))}
						</div>
					</div>
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText text-gradient">My work</p>
				<h2 className="sectionHeadText">Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-gray-300 text-[17px] max-w-3xl leading-[30px] bg-white/5 p-6 rounded-xl border border-white/10"
				>
					Following projects showcases my skills and experience through
					real-world examples of my work. Each project is briefly described with
					links to code repositories and live demos in it. It reflects my
					ability to solve complex problems, work with different technologies,
					and manage projects effectively.
				</motion.p>
			</div>

			<div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "");
