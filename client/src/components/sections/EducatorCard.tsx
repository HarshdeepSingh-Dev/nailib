import Image from "next/image";

interface teacher {
    name: string,
    description: string,
}

const EducatorCard = ({ name, description }: teacher) => {
    return (
        <div className="rounded-2xl backdrop-blur-lg bg-white border border-white/20 shadow-xl transition hover:shadow-2xl hover:scale-105 duration-300">
            <div className="relative p-6 flex flex-col items-center w-full">
                <Image
                    src="/images/educators/profile.png"
                    alt="Patrick Jones"
                    height={80}
                    width={80}
                    loading="lazy"
                //   className="w-24 h-24 rounded-full border-4 border-slate-500 shadow-lg animate-pulse" 
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{name}</h3>
                <p className="text-gray-600 text-sm text-center mt-2 max-w-md h-[100px]">
                    {description}
                </p>
                <button className="cursor-pointer mt-4 px-4 py-2 rounded-xl bg-gray-800 text-white font-medium hover:scale-105 transition">
                    Watch Course →
                </button>
            </div>
        </div>

    )
}

export default EducatorCard;