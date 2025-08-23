"use client";
import { SectionWrapper } from "@/app/components/HigherOrderComponents";
import { experiences } from "@/app/constants";
import { textVariant } from "@/app/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
	experience: (typeof experiences)[0];
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: "rgba(255, 255, 255, 0.05)",
				backdropFilter: "blur(20px)",
				border: "1px solid rgba(255, 255, 255, 0.1)",
				borderRadius: "24px",
				color: "#fff",
				boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
			}}
			contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.1)" }}
			visible={true}
			date={experience.date}
			iconStyle={{ 
				background: `linear-gradient(135deg, ${experience.iconBg}, #915EFF)`,
				border: "3px solid rgba(255, 255, 255, 0.2)",
				boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)"
			}}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<Image
						src={experience.icon}
						width={48}
						height={48}
						alt={experience.company_name}
						className="w-[60%] h-[60%] object-contain filter drop-shadow-lg"
					/>
				</div>
			}
		>
			<div className="relative">
				<h3 className="text-white text-[24px] font-bold hover:text-gradient transition-all duration-300">{experience.title}</h3>
				<p
					className="text-secondary text-[16px] font-semibold"
					style={{ margin: 0 }}
				>
					{experience.company_name}
				</p>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2">
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="text-white-100 text-[14px] pl-1 tracking-wider hover:text-white transition-colors duration-300"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText text-center text-gradient">
					What I have done so far
				</p>
				<h2 className="sectionHeadText text-center text-shimmer">Work Experience.</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={`experience-${index}`}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, "work");
