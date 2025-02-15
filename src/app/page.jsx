"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const Homepage = () => {
	return (
		<motion.div
			className="h-full overflow-y-auto"
			initial={{ y: "-200vh" }}
			animate={{ y: "0vh" }}
			transition={{ duration: 1 }}
		>
			<div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
				<div className="h-1/2 lg:h-full lg:w-1/2 relative mb-16 sm:mb-0">
					<Image
						src="/hero.png"
						alt="hero image"
						fill
						className="object-contain"
					/>
				</div>
				<div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
					<h1 className="text-4xl md:text-6xl font-bold">
						Elevating User Experiences with Modern Web Solutions
					</h1>
					<p className="md:text-xl">
						As a frontend web developer with a passion for
						interactive design and seamless functionality, I
						specialize in building dynamic, user-friendly
						applications using modern web technologies. Let’s
						collaborate to create innovative and impactful digital
						solutions!
					</p>
					<div className="w-full flex gap-4">
						<Link href="/portfolio">
							<button className="p-4 rounded-lg ring-1 ring-black bg-black text-white cursor-pointer">
								View My Work
							</button>
						</Link>
						<Link href="/contact">
							<button className="p-4 rounded-lg ring-1 ring-black cursor-pointer mb-8 sm:mb-0">
								Contact Me
							</button>
						</Link>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default Homepage
