/* eslint-disable react/jsx-key */
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdAlternateEmail } from "react-icons/md"

const Socials = () =>
{
    const arr = [ [ <FaGithub size={ 20 } />, "https://github.com/udara885" ], [ <FaLinkedin size={ 20 } />, "https://www.linkedin.com/in/udara-lakshan/"], [<MdAlternateEmail size={ 20 } />, "mailto:ulakshan061@gmail.com"]]
    return (
        <div className="flex w-full gap-6">
            { arr.map( ([logo, url]) =>
                <a key={url} href={url} target="_blank">
                    <div className="border-2 border-black p-3 w-12 h-12 rounded cursor-pointer hover:bg-black hover:text-white">
                        { logo }
                    </div>
                </a> ) }
        </div>
    )
}

export default Socials