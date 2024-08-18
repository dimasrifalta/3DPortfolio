export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Frontend Developer",
		icon: "/web.webp",
	},
	{
		title: "Backend Developer",
		icon: "/backend.webp",
	},
	{
		title: "Database Management",
		icon: "/mobile.webp",
	},

	{
		title: "Video Editor",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
		title: "Software Developer",
		company_name: "PT. Primalogic Inter Asia",
		icon: "/company/avm.webp",
		iconBg: "#383E56",
		date: "2020 -  Now",
		points: [
			"Develop and maintain accounting application , pension fund application , assurance application data-centric web applications and services using ASP.NET, C#.NET, LINQ, MS SQL, and Agile/SCRUM methodologies. ",
			"Create and apply UI requirements utilizing Anggural 6 And React.js. ",
			"Collaborate with business analysts, users, and federal agencies to collect requirements and provide implementation. ",
			"Create automate deploy system to maintenance the new feature and bug fixing",
		],
	},
	{
		title: "Freelancer Web Developer",
		company_name: "Fiverr ",
		icon: "/company/avm.webp",
		iconBg: "#E6DEDD",
		date: "2019 - 2021",
		points: [
			"Developing and maintaining Wordpress Site for clients.",
			"Analyzing feedbacks and fixing bugs.",
			"Search Engine Optimization.",
			"Design Maintainence and hosting maintenance.",
		],
	},
];

const testimonials = [

	{
		id: 1,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Dimas Rifalta",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/dimas-rifalta-1a3714195",
	},
	{
		id: 2,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Dimas Rifalta",
		image: "/tech/github.webp",
		link: "https://github.com/dimasrifalta",
	},
];

const projects = [
	{
		name: "Presentation AI",
		description:
			"Presentation AI is an app that transforms text-based materials into clear, natural audio using Web Speech API and GPT-3. It supports auditory learners by providing high-quality audio and detailed explanations of content. ",
		tags: [
			{
				name: "Supabase",
				color: "blue-text-gradient",
			},
			{
				name: "Next.js",
				color: "pink-text-gradient",
			},
			{
				name: "GPT 3.5 Turbo",
				color: "orange-text-gradient",
			},
			{
				name: "TailwindCSS",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/presentationai.webp",
		source_code_link:
			"https://github.com/dimasrifalta/skripsi-ai-chat-ppt",
		netlify_link: "https://presentation-io.vercel.app/",
	},
	{
		name: "MY Memories",
		description:
			"MY Memories is an app for uploading and sharing photos of daily life moments. Capture, store, and cherish your everyday experiences. Keep your memories alive and accessible anytime.",
		tags: [
			{
				name: "Mongo",
				color: "blue-text-gradient",
			},
			{
				name: "Express",
				color: "orange-text-gradient",
			},
			{
				name: "React",
				color: "green-text-gradient",
			},
			{
				name: "Node",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/mymemories.webp",
		source_code_link: "https://dimasrifalta.github.io/my-moments/",
		netlify_link: "https://dimasrifalta.github.io/my-moments/",
	},
	{
		name: "Bucek-realestate",
		description:
			"Using React and Stripe.js, this application lets you showcase properties while highlighting their key benefits effectively.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "Stripe.js'",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/bucekrealestate.webp",
		source_code_link: "https://bucek-realestate.vercel.app/",
		netlify_link: "https://bucek-realestate.vercel.app/",
	},
	{
		name: "Bucek Official Store",
		description:
			"Shop the latest fashion trends and exclusive items at Bucek Official Store. Enjoy seamless shopping, secure payments, and fast delivery. Your go-to destination for quality and style.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "orange-text-gradient",
			},
			{
				name: "Stripe.js",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/bucekofficialstore.webp",
		source_code_link: "https://bucek-officcial.netlify.app/",
		netlify_link: "https://bucek-officcial.netlify.app/",
	},
	{
		name: "Generasi Terburuk Chat",
		description:
			"Generasi Terburuk Chat is a sleek chatting application built with Next.js and Tailwind CSS. It offers a fast, modern, and intuitive interface for seamless communication.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "javascript",
				color: "green-text-gradient",
			},
			{
				name: "chat engine",
				color: "orange-text-gradient",
			},
			{
				name: "node.js",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/generasiterburukchat.webp",
		source_code_link: "https://generasi-terburuk.netlify.app/",
		netlify_link: "https://generasi-terburuk.netlify.app/",
	},

	{
		name: "Bucek Travel",
		description:
			"This is a code repository to help local tourism on the island of Sumbawa, in promoting the beauty of the island of Sumbawa.",
		tags: [
			{
				name: "php",
				color: "blue-text-gradient",
			},
			{
				name: "javascript",
				color: "green-text-gradient",
			},
			{
				name: "mysql",
				color: "orange-text-gradient",
			},
		
		],
		image: "/projectimg/bucektravel.webp",
		source_code_link: "https://google.com",
		netlify_link: "https://google.com",
	},
	{
		name: "Apotek Sariasih",
		description:
			"This is a code repository to help local pharmacies in drug management and drug sales as well as in the reporting system",
		tags: [
			{
				name: "php",
				color: "blue-text-gradient",
			},
			{
				name: "javascript",
				color: "green-text-gradient",
			},
			{
				name: "mysql",
				color: "orange-text-gradient",
			},
		
		],
		image: "/projectimg/apoteksariasih.webp",
		source_code_link: "https://google.com",
		netlify_link: "https://google.com",
	},
];

export { services, technologies, experiences, testimonials, projects };
