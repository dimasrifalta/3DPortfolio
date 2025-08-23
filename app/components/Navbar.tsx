"use client";
import { navLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

		return (
			<nav
				className={`paddingX w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
					scrolled 
						? "glass-nav" 
						: "bg-transparent"
				}`}
			>
				<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div
						className="flex items-center gap-2 cursor-pointer group"
						onClick={() => {
							setActive("");
							window.scrollTo(0, 0);
						}}
					>
						<Link href="https://github.com/dimasrifalta">
							<Image
								src="/logo.svg"
								width={80}
								height={80}
								alt="logo"
								priority
								className="object-contain transition-transform duration-300 group-hover:scale-105"
							/>
						</Link>
						<p className="text-white text-[18px] font-bold cursor-pointer flex transition-all duration-300">
							Bucek &nbsp; <span className="sm:block hidden ">| dimasrifalta</span>
						</p>
					</div>

					<ul className="list-none hidden sm:flex flex-row gap-10">
						{navLinks.map((nav) => (
							// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
							<li
								key={nav.id}
								className={`${
									active === nav.title ? "text-white" : "text-secondary"
								} hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-300 hover-lift`}
								onClick={() => setActive(nav.title)}
							>
								<Link href={`#${nav.id}`}>
									{nav.title}
								</Link>
							</li>
						))}
					</ul>
					<div className="mt-2 lg:block hidden">
						<ResumeButton />
					</div>

					<div className="sm:hidden flex flex-1 justify-end items-center">
						<div className="p-2 rounded-full glass-card cursor-pointer transition-transform duration-300 hover:scale-105">
							<Image
								src={toggle ? "/close.svg" : "/menu.svg"}
								width={24}
								height={24}
								alt="menu"
								className="w-[24px] h-[24px] object-contain"
								onClick={() => setToggle(!toggle)}
							/>
						</div>

						<div
							className={`${
								!toggle ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
							} p-6 glass-card absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-2xl transition-all duration-300`}
						>
							<ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
								{navLinks.map((nav) => (
									// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
									<li
										key={nav.id}
										className={`font-poppins font-medium cursor-pointer text-[16px] transition-colors duration-300 p-2 rounded-lg hover:bg-white/5 ${
											active === nav.title ? "text-white" : "text-secondary"
										}`}
										onClick={() => {
											setToggle(!toggle);
											setActive(nav.title);
										}}
									>
										<Link href={`#${nav.id}`}>{nav.title}</Link>
									</li>
								))}
								<li>
									<div className="mt-2">
										<ResumeButton />
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		);
};

export default Navbar;
