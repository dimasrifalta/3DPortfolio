import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
} from "./components";

export default function Home() {
	return (
		<div className="relative z-0 bg-primary font-sans">
			{/* Hero Section */}
			<div className="relative bg-hero-pattern bg-cover bg-no-repeat bg-center">
				<Navbar />
				<Hero />
			</div>

			{/* About Section */}
			<section className="paddingX py-20">
				<About />
			</section>

			{/* Experience Section */}
			<section className="paddingX py-20">
				<Experience />
			</section>

			{/* Projects Section */}
			<section className="paddingX py-20">
				<Works />
			</section>

			{/* Testimonials Section */}
			<section className="paddingX py-20">
				<Feedbacks />
			</section>

			{/* Contact Section with Stars */}
			<div className="relative z-0">
				<section className="paddingX py-20">
					<Contact />
				</section>
				<StarsCanvas />
			</div>
		</div>
	);
}
