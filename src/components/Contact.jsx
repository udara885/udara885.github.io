import Socials from "./Socials"

const Contact = () =>
{
    return (
        <div id="contact" className="px-4 py-10 flex flex-col self-stretch items-start md:py-[3.75rem] md:px-20">
            <div className="flex flex-col items-start self-stretch md:px-8 md:justify-between md:items-center md:flex-row md:gap-10">
                <div className="flex py-5 flex-col justify-center items-start gap-5 self-stretch md:flex-1">
                    <div className="flex flex-col items-start gap-5 self-stretch">
                        <input type="text" name="name" className="flex h-14 py-4 px-6 items-center self-stretch rounded border border-black md:w-[31.25rem]" placeholder="Your name" autoComplete="true" />
                        <input type="text" name="email" className="flex h-14 py-4 px-6 items-center self-stretch rounded border border-black md:w-[31.25rem]" placeholder="Your Email" autoComplete="true" />
                        <input type="text" name="website" className="flex h-14 py-4 px-6 items-center self-stretch rounded border border-black md:w-[31.25rem]" placeholder="Your website (If exists)" />
                        <textarea type="text" name="description" className="flex h-[8.75rem] py-4 px-6 items-center self-stretch rounded border border-black md:w-[31.25rem]" placeholder="How can I help?*" />
                        <button className="bg-black text-white font-medium rounded px-4 py-3 flex items-center justify-center">Get In Touch</button>
                        <Socials />
                    </div>
                </div>
                <div className="flex py-5 flex-col justify-center items-center gap-8 self-stretch md:items-start md:gap-10 h-full">
                    <div className="flex flex-col justify-center items-start text-3xl gap-3 font-extrabold self-stretch md:items-start md:gap-5 md:text-5xl">
                        <h1>{ "Let's" } <span className="text-stroke">talk</span> for</h1>
                        <h1> Something special</h1>
                    </div>
                    <p className="text-zinc-500 self-stretch leading-6">I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                    <div className="flex flex-col justify-center items-center gap-3 self-stretch text-xl md:text-3xl font-bold md:gap-6">
                        <h3 className="self-stretch leading-6">ulakshan061@gmail.com</h3>
                        <h3 className="self-stretch leading-6">+94 77 013 4638</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact