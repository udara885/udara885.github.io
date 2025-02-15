"use client"
import Brain from "@/components/brain"
import { motion, useInView, useScroll } from "framer-motion"
import { useRef } from "react"

const skills = [
	"HTML",
	"CSS",
	"JavaScript",
	"React",
	"Tailwind CSS",
	"NodeJs",
	"Express",
	"MySQL",
	"MongoDB",
	"GIT",
	"GitHub",
]

const AboutPage = () => {
	const containerRef = useRef()

	const { scrollYProgress } = useScroll({ container: containerRef })

	const skillRef = useRef()
  const isSkillRefInView = useInView( skillRef, { margin: "-100px" } )
  
	const experienceRef = useRef()
	const isExperienceRefInView = useInView(experienceRef,{margin: "-100px"})

	return (
		<motion.div
			className="h-full"
			initial={{ y: "-200vh" }}
			animate={{ y: "0vh" }}
			transition={{ duration: 1 }}
		>
			<div
				className="h-full overflow-scroll lg:flex no-scrollbar"
				ref={containerRef}
			>
				<div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
					<div className="flex flex-col gap-12 justify-center">
						<h1 className="font-bold text-2xl">BIOGRAPHY</h1>
						<p className="text-lg">
							I&apos;m Udara Lakshan, a frontend web developer and
							Software Engineering undergraduate at NIBM. With a
							strong foundation in HTML, CSS, JavaScript, and
							modern frameworks, I specialize in creating dynamic
							and user-friendly web applications. Passionate about
							crafting seamless digital experiences, I
							continuously explore new technologies to enhance my
							skills. From interactive UI to full-stack
							development, I thrive on solving challenges and
							bringing ideas to life. Let’s build something
							amazing together!
						</p>
						<span className="italic">
							&quot;Try, fail, debug, repeat—until genius
							happens.&quot; 🔥💻
						</span>
						<div className="self-end">
							<svg
								width="149"
								height="85"
								viewBox="0 0 149 85"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M62.6093 60.04C66.4395 53.376 73.1695 46.7069 78.3505 40.1851C87.9153 28.1452 97.7468 16.1096 104.649 3.84284C105.001 3.21646 105.31 2.58705 105.686 1.96231C105.875 1.64652 105.604 1.21563 106.345 1.02205C106.916 0.873211 106.467 1.51763 106.44 1.76551C106.171 4.19443 105.292 7.1672 104.46 9.45163C98.5526 25.6793 83.0834 41.5701 65.8141 56.7163C59.5525 62.2081 50.56 69.3481 41.5582 74.5595C35.6329 77.9898 27.7927 81.6792 16.8624 83.317C13.3005 83.8508 9.51454 84.2279 5.6456 83.8418C-0.69576 83.2091 0.648657 80.4169 2.72358 78.8235C6.78678 75.7031 14.5006 72.8224 21.8895 70.7109C38.2117 66.0467 57.9287 62.3802 78.1934 60.3134C88.6782 59.244 95.6391 59.0125 106.314 58.9467C110.221 58.9226 114.139 58.9448 118.033 59.056C137.867 59.6226 117.715 59.3255 135 60.2368"
									stroke="#1E1E1E"
									strokeLinecap="round"
								/>
								<path
									d="M83.12 55.0599C80.5961 56.3147 80 59.0191 80 60.6372C80 61.61 82.5376 60.3396 82.9178 60.1489C85.5065 58.8503 86.7146 57.3004 87.1644 55.5996C87.5182 54.2621 87.28 55.5022 87.28 56.0494C87.28 57.142 86.8012 58.6601 88.0311 59.6605C90.2611 61.4745 92.6833 58.2384 93 57.6044"
									stroke="#1E1E1E"
									strokeLinecap="round"
								/>
								<path
									d="M95 48C95 50.999 95 53.9979 95 56.9969C95 57.4476 95 58.7799 95 59"
									stroke="#1E1E1E"
									strokeLinecap="round"
								/>
								<path
									d="M99.6667 54C99.4697 54.6937 98 55.3031 98 56.0652C98 57.5167 100.113 58.1213 103 59"
									stroke="#1E1E1E"
									strokeLinecap="round"
								/>
								<path
									d="M111.074 55.0194C110.383 55.0194 109.067 54.9164 108.921 55.185C108.715 55.5655 106.902 55.9573 109.011 56.0221C115.812 56.2313 115.542 57.7964 108.921 58"
									stroke="#1E1E1E"
									strokeLinecap="round"
								/>
								<path
									d="M115 49C115 51.5586 115 54.1173 115 56.6759C115 58.8671 116.005 56.5698 116.156 55.6408C116.474 53.6879 120.853 58.0173 121.188 58.4088C122.03 59.3947 124 61.0681 124 59.0484"
									stroke="#1E1E1E"
									strokeLinecap="round"
								/>
								<path
									d="M129.701 55.1743C127.897 55.8161 126.933 57.085 126.228 58.1503C124.997 60.0112 129.126 57.5846 129.599 57.2378C130.008 56.9382 131.54 54.0183 131.54 55.3428C131.54 55.9908 131.62 59.3824 132 58.9644"
									stroke="#1E1E1E"
									strokeLinecap="round"
								/>
								<path
									d="M139.219 58C139.219 57.2426 138.114 55.3599 140.866 55.1077C145.884 54.6478 146.401 55.7171 148 57.24"
									stroke="#1E1E1E"
									strokeLinecap="round"
								/>
							</svg>
						</div>
						<motion.svg
							initial={{ opacity: 0.2, y: 0 }}
							animate={{ opacity: 1, y: "10px" }}
							transition={{
								repeat: Infinity,
								duration: 3,
								ease: "easeInOut",
							}}
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							width={50}
							height={50}
						>
							<path
								d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
								stroke="#000000"
								strokeWidth="1"
							></path>
							<path
								d="M12 6V14"
								stroke="#000000"
								strokeWidth="1"
							></path>
							<path
								d="M15 11L12 14L9 11"
								stroke="#000000"
								strokeWidth="1"
							></path>
						</motion.svg>
					</div>
					<div
						className="flex flex-col gap-12 justify-center"
						ref={skillRef}
					>
						<motion.h1
							initial={{ x: "-300px" }}
							animate={isSkillRefInView ? { x: 0 } : {}}
							transition={{ delay: 0.2 }}
							className="font-bold text-2xl"
						>
							SKILLS
						</motion.h1>
						<motion.div
							initial={{ x: "-300px" }}
							animate={isSkillRefInView ? { x: 0 } : {}}
							className="flex gap-4 flex-wrap"
						>
							{skills.map((skill) => (
								<div
									key={skill}
									className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
								>
									{skill}
								</div>
							))}
						</motion.div>
						<motion.svg
							initial={{ opacity: 0.2, y: 0 }}
							animate={{ opacity: 1, y: "10px" }}
							transition={{
								repeat: Infinity,
								duration: 3,
								ease: "easeInOut",
							}}
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							width={50}
							height={50}
						>
							<path
								d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
								stroke="#000000"
								strokeWidth="1"
							></path>
							<path
								d="M12 6V14"
								stroke="#000000"
								strokeWidth="1"
							></path>
							<path
								d="M15 11L12 14L9 11"
								stroke="#000000"
								strokeWidth="1"
							></path>
						</motion.svg>
					</div>
					<div
						className="flex flex-col gap-12 justify-center pb-48"
						ref={experienceRef}
					>
						<motion.h1
							initial={{ x: "-350px" }}
							animate={isExperienceRefInView ? { x: 0 } : {}}
							transition={{ delay: 0.2 }}
							className="font-bold text-2xl"
						>
							EXPERIENCE
						</motion.h1>
						<motion.div
							initial={{ x: "-450px" }}
							animate={isExperienceRefInView ? { x: 0 } : {}}
						>
							<div className="flex justify-between h-48">
								<div className="w-1/3">
									<div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
										Intern Software Engineer
									</div>
									<div className="p-3 text-sm italic">
										Worked on real-world projects, writing
										efficient code, debugging issues, and
										learning industry best practices.
									</div>
									<div className="p-3 text-red-400 text-sm font-semibold">
										2024 Jan - Present
									</div>
									<div className="p-1 rounded bg-white text-sm font-semibold w-fit">
										Asipiya Soft Solution
									</div>
								</div>
								<div className="w-1/6">
									<div className="w-1 h-full bg-gray-600 rounded relative">
										<div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
									</div>
								</div>
								<div className="w-1/3"></div>
							</div>
						</motion.div>
					</div>
				</div>
				<div className="hidden lg:block sticky top-0 z-30 lg:w-1/3 xl:w-1/2">
					<Brain scrollYProgress={scrollYProgress} />
				</div>
			</div>
		</motion.div>
	)
}

export default AboutPage
