"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

const projects = [
	{
		id: 1,
		color: "from-red-300 to-blue-300",
		title: "Stock Predicter",
		desc: "An AI-powered web app that analyzes stock performance using share prices from the past 3 days.",
		img: "https://github.com/user-attachments/assets/39518b0f-8b96-48bf-ae8f-bb9e478c44a9",
		link: "https://github.com/udara885/stock-predicter",
	},
	{
		id: 2,
		color: "from-blue-300 to-violet-300",
		title: "Todo App",
		desc: "A simple Todo App built using React, Nodejs, Express and MySQL. The app allows users to add, remove, and update daily tasks.",
		img: "https://github.com/user-attachments/assets/0d4ff41d-0f9f-4c48-9798-cfcbc62d17aa",
		link: "https://github.com/udara885/todo-app",
	},
	{
		id: 3,
		color: "from-violet-300 to-purple-300",
		title: "Beverage Store",
		desc: "A simple Beverage Store App built using MERN stack. This app is divided into user and admin UI. The users can see what are available beverages with their image, name and price. Admin can do CRUD operations for the beverages in admin panel.",
		img: "https://github.com/user-attachments/assets/9dd32c7c-a02a-412e-bbbe-64b0256cc6cc",
		link: "https://github.com/udara885/beverage-store",
	},
	{
		id: 4,
		color: "from-purple-300 to-red-300",
		title: "Library Management System",
		desc: "This project is a Library Management System built using the MERN stack (MongoDB, Express.js, React, and Node.js). The primary goal of this system is to provide a comprehensive solution for managing a library's inventory, including books and members.",
		img: "https://github.com/user-attachments/assets/aef2b5da-8aaf-4342-aef5-721ca679cedc",
		link: "https://github.com/udara885/library-management-system",
	},
]

const PortfolioPage = () => {
	const ref = useRef()

	const { scrollYProgress } = useScroll({ target: ref })

	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])

	return (
		<motion.div
			className="h-full overflow-x-hidden relative no-scrollbar"
			initial={{ y: "-200vh" }}
			animate={{ y: "0%" }}
			transition={{ duration: 1 }}
		>
			<div
				className="h-[600vh] relative"
				ref={ref}
			>
				<div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
					My Works
				</div>
				<div className="sticky top-0 flex h-screen gap-4 items-center">
					<motion.div
						style={{ x }}
						className="flex"
					>
						<div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
						{projects.map((project) => (
							<div
								className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${project.color}`}
								key={project.id}
							>
								<div className="flex flex-col gap-8 text-white">
									<h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
										{project.title}
									</h1>
									<div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
										<Image
											src={project.img}
											alt=""
											fill
										/>
									</div>
									<p className="w-80 md:w-96 lg:text-lg lg:w-[500px] xl:w-[600px]">
										{project.desc}
									</p>
									<Link
										href={project.link}
										className="flex justify-end"
									>
										<button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
											See on GitHub
										</button>
									</Link>
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>
			<div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
				<h1 className="text-6xl md:text-8xl">Do you have a project?</h1>
				<div className="relative">
					<motion.svg
						animate={{ rotate: 360 }}
						transition={{
							duration: 8,
							ease: "linear",
							repeat: Infinity,
						}}
						viewBox="0 0 300 300"
						className="w-64 h-64 md:w-[500px] md:h-[500px]"
					>
						<defs>
							<path
								id="circlePath"
								d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
							/>
						</defs>
						<text fill="#000">
							<textPath
								xlinkHref="#circlePath"
								className="text-3xl"
							>
								Front-end Developer
							</textPath>
						</text>
					</motion.svg>
					<Link
						href="/contact"
						className="w-24 h-24 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center text-xl"
					>
						Hire Me
					</Link>
				</div>
			</div>
		</motion.div>
	)
}

export default PortfolioPage
