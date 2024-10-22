import React from "react"
import { MdOutlineFileDownload } from "react-icons/md"
import { RxHamburgerMenu } from "react-icons/rx"

const Header = () => {
	const [toggle, setToggle] = React.useState(false)

	function click() {
		setToggle((prevState) => !prevState)
	}

	return (
		<header className="flex p-4 items-start flex-col self-stretch w-full md:py-6 md:px-20 md:flex-row bg-white sticky top-0">
			<div className="flex justify-between items-center w-full md:px-8 shrink-0">
				<a
					href="#"
					className="font-extrabold text-xl"
				>
					{"< Udara Lakshan />"}
				</a>
				{window.innerWidth > 768 && (
					<>
						<div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 mt-4 font-semibold text-lg">
							<a
								href="#about"
								className="border-b-2 border-white hover:border-b-black"
							>
								About
							</a>
							<a
								href="#skills"
								className="border-b-2 border-white hover:border-b-black"
							>
								Skills
							</a>
							<a
								href="#work"
								className="border-b-2 border-white hover:border-b-black"
							>
								Work
							</a>
							<a
								href="#contact"
								className="border-b-2 border-white hover:border-b-black"
							>
								Contact
							</a>
						</div>
						<a
							href="https://drive.google.com/file/d/1GYd1gxLF3KOX-BWSpo2rM3yGrReIFJMw/view?usp=sharing"
							target="_blank"
							className="flex h-14 py-4 px-5 items-center gap-2 bg-black text-white rounded"
						>
							Resume
							<MdOutlineFileDownload size={20} />
						</a>
					</>
				)}
				<button
					className="md:hidden"
					type="button"
					onClick={click}
				>
					<RxHamburgerMenu className="w-full h-9" />
				</button>
			</div>
			{toggle && (
				<div className="flex flex-col md:flex-row items-center justify-center w-full gap-3 mt-4 font-semibold text-lg">
					<a
						href="#about"
						className="border-b-2 border-white hover:border-b-black"
					>
						About
					</a>
					<a
						href="#skills"
						className="border-b-2 border-white hover:border-b-black"
					>
						Skills
					</a>
					<a
						href="#work"
						className="border-b-2 border-white hover:border-b-black"
					>
						Projects
					</a>
					<a
						href="#contact"
						className="border-b-2 border-white hover:border-b-black"
					>
						Contact
					</a>
					<a
						href="https://drive.google.com/file/d/1GYd1gxLF3KOX-BWSpo2rM3yGrReIFJMw/view?usp=sharing"
						target="_blank"
						className="flex h-14 py-4 px-5 items-center gap-2 bg-black text-white rounded"
					>
						Resume
						<MdOutlineFileDownload size={20} />
					</a>
				</div>
			)}
		</header>
	)
}

export default Header
