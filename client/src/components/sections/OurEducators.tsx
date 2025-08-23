'use client'
import EducatorCard from "./EducatorCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const educators = [
    {
        name: "Patrick Jones",
        description: "1.2M+ YouTube subscribers, 30+ years' experience, Ivy League visiting faculty!",
    },
    {
        name: "Dr. Adam Nazha",
        description: "Top IB Math Tutor: 45/45 IBDP, 7/7 Further Math, 7 Yrs Exp, Medicine Student",
    },
    {
        name: "Ilan Grapel",
        description: "Tech & Law Grad Educator: Boost IB Math/CS Skills with Real-World Projects & Expertise!",
    },
    {
        name: "Ruchi Singh",
        description: "14+ yrs in IB English A LAL, avg score 6, unique insights as IB Examiner. Thrive with her!",
    },
    {
        name: "David McKay",
        description: "Ivy league graduate, 4+ yrs of experience, vetted IB Examiner!",
    },
    {
        name: "Mrs. Cicy Irna",
        description:
            "Master IB Chemistry with Cicy Irna’s engaging videos. Unlock your potential with the ultimate Chemistry learning experience!",
    },
    {
        name: "Mrs. Devlina Singh",
        description:
            "Discover Devlina Singh, a visionary IB ESS educator with 18+ years of transformative teaching expertise.",
    },
    {
        name: "Ishan Roy",
        description:
            "Expert IB DT Instructor: 5+ yrs, Masters in Product Design, IB Examiner",
    },
    {
        name: "Amay Ganguly",
        description:
            "7/7 IB Econ HL, 6A* CIE, SAT '20 top; MUN leader; Expert & engaging instructor",
    },
];

const OurEducators = () => {

    return (
        <div className="bg-indigo-100 py-16">
            <div className=" w-full mx-auto">
                <h2 className="text-4xl md:text-5xl text-center font-extrabold text-gray-600 mb-4">
                    Meet The Best IB Educators
                </h2>
                <p className="mt-3 text-xl font-semibold text-gray-400 max-w-3xl text-center mx-auto mb-8">
                    AI-powered guidance, taught by world-class IB experts and examiners.
                </p>

                {/* educators */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={8}
                    slidesPerView={1}
                    speed={5000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: true
                    }}
                    loop={true}
                    freeMode={true}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1440: { slidesPerView: 4 },
                    }}
                    className="max-w-6xl w-full mx-auto"
                >
                    {educators.map((teacher, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-auto py-6 mx-6">
                                <EducatorCard
                                    name={teacher.name}
                                    description={teacher.description}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default OurEducators;