import Form from "./Form"

const Contact = () =>
{
    return (
        <div id="contact" className="px-4 py-10 flex flex-col self-stretch items-start md:py-[3.75rem] md:px-20">
            <div className="flex flex-col-reverse items-start self-stretch md:px-8 md:justify-between md:items-center md:flex-row-reverse md:gap-10">
                <div className="flex py-5 flex-col justify-center items-start gap-5 self-stretch md:flex-1">
                    <Form />
                </div>
                <div className="flex py-5 flex-col justify-center items-center gap-8 self-stretch md:items-start md:gap-10 h-full">
                    <div className="flex flex-col justify-center items-start text-3xl gap-3 font-extrabold self-stretch md:items-start md:gap-5 md:text-5xl">
                        <h1>{ "Let's" } <span className="text-stroke">talk</span> for</h1>
                        <h1> Something special</h1>
                    </div>
                    <p className="text-zinc-500 self-stretch leading-6">I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                </div>
            </div>
        </div>
    )
}

export default Contact