import { FaGithub } from "react-icons/fa"

const Projects = () =>
{
  return (
    <div id="work" className="flex flex-col px-4 items-center justify-center py-10 bg-black text-white w-full gap-3 md:py-[3.75rem] md:px-20">
      <h1 className="font-extrabold text-3xl normal-case">Want to see My Work ?</h1>
      <div>
        <a className="cursor-pointer" href="https://github.com/udara885?tab=repositories" target="_blank">
          <FaGithub size={ 200 } />
        </a>
      </div>
    </div>
  )
}

export default Projects