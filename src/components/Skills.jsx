/* eslint-disable react/jsx-key */
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"

const Skills = () =>
{
    const arr = [ [ <FaHtml5 size={ 56 } />, 'HTML' ], [ <FaCss3Alt size={ 56 } />, 'CSS' ], [ <FaJs size={ 56 } />, 'JavaScript' ], [ <FaBootstrap size={ 56 } />, 'Bootstrap' ], [ <FaReact size={ 56 } />, 'React' ], [ <SiTailwindcss size={ 56 } />, 'Tailwind' ] ]
    return (
        <div id="skills" className="py-10 px-4 w-full flex flex-col items-start self-stretch md:py-[3.75rem] md:px-20 md:justify-center md:items-center">
            <div className="flex flex-col items-start gap-5 self-stretch md:px-8">
                <div className="flex py-5 justify-center items-center self-stretch md:self-stretch">
                    <h1 className="text-3xl leading-8 md:text-5xl">My <span className="font-extrabold">Skills</span></h1>
                </div>
                <div className="flex gap-5 items-center justify-center self-stretch flex-wrap md:py-5">
                    { arr.map( ( [ logo, title ] ) =>
                        <div key={ title } className="p-6 border-2 border-black rounded w-40 h-40 flex flex-col items-center justify-center gap-8 hover:bg-black hover:text-white">
                            { logo }
                            <h3 className="text-xl font-bold">{ title }</h3>
                        </div>
                    ) }
                </div>
            </div>
        </div>
    )
}

export default Skills