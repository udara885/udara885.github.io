import { PiCertificateThin } from "react-icons/pi"

const Education = () =>
{
    return (
        <div id="education" className="py-10 flex flex-col items-start self-stretch bg-black text-white w-full px-4 md:py-[3.75rem] md:px-20">
            <div className="flex flex-col items-start gap-5 self-stretch md:px-8 md:justify-center md:items-center md:shrink-0">
                <div className="flex py-5 justify-center items-center gap-4 self-stretch">
                    <h1 className="text-3xl md:text-5xl text-center my-5 ">My <span className="font-extrabold">Education</span></h1>
                </div>
                <div className="flex flex-col gap-5 md:flex-row md:py-10 md:px-6 md:gap-8">
                    <div className="flex flex-col items-start gap-7 self-stretch px-6 py-[1.875rem] border border-zinc-500 rounded-lg">
                        <div className="flex flex-col items-start self-stretch gap-[1.875rem]">
                            <div className="flex items-center gap-[1.875rem] self-stretch">
                                <PiCertificateThin size={ 40 } />
                                <h2 className="text-xl font-semibold">Diploma in Software Engineering</h2>
                            </div>
                            <p className="text-zinc-300 font-semibold">2022 - 2023</p>
                        </div>
                        <p className="text-zinc-200">National Institute of Business Management</p>
                    </div>
                    <div className="flex flex-col items-start gap-7 self-stretch px-6 py-[1.875rem] border border-zinc-500 rounded-lg ">
                        <div className="flex flex-col items-start self-stretch gap-[1.875rem]">
                            <div className="flex items-center gap-[1.875rem] self-stretch">
                                <PiCertificateThin size={ 40 } />
                                <h2 className="text-xl font-semibold">Higher National Diploma in Software Engineering</h2>
                            </div>
                            <p className="text-zinc-300 font-semibold">2023 - Present</p>
                        </div>
                        <p className="text-zinc-200">National Institute of Business Management</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education