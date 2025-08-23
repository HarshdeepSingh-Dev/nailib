'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const slides = [
    {
        name: "Aarav Sharma",
        Review:
            "I used to struggle with my TOK essays, but this platform really helped me understand the concepts. With the personalized mentoring, I improved my essay scores by 30% and felt more confident during exams.",
        img: '/images/clients/client-boy.png',
    },
    {
        name: "Sofia Martinez",
        Review:
            "Writing my Extended Essay was overwhelming at first. The research support and guidance here helped me stay on track, complete my essay ahead of schedule, and achieve top marks. I’m so proud of my results!",
        img: '/images/clients/client-girl.png',
    },
    {
        name: "Liam Wong",
        Review:
            "Math HL used to be my biggest challenge. The step-by-step practice modules on this platform made difficult problems much easier. I went from a 5 to a 7, and now I actually enjoy solving math problems!",
        img: '/images/clients/client-boy.png',
    },
    {
        name: "Emma Dubois",
        Review:
            "Balancing CAS projects, IA submissions, and exams was really stressful. This platform helped me organize my schedule and gave me tips to manage my time effectively. I feel so much more in control of my studies now!",
        img: '/images/clients/client-girl.png',
    },
    {
        name: "Noah Patel",
        Review:
            "Physics IA was intimidating, but the experimental guides and feedback system here made it much easier. I completed my IA confidently and got an A. I really recommend this platform to all HL students.",
        img: '/images/clients/client-boy.png',
    },
    {
        name: "Isabella Rossi",
        Review:
            "I improved my Language & Literature skills so much using the reading strategies and analysis tools here. My internal assessment results improved, and I felt ready and confident for my exams.",
        img: '/images/clients/client-girl.png',
    },
];

const ClientReviewsCarousal = () => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    });

    return (
        <div className="flex items-center justify-center w-full pb-12 mb-10 relative h-auto bg-transparent py-8 z-10">
            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                className="text-black hover:text-gray-600 text-4xl md:text-3xl absolute xl:left-[40%] md:left-[5%] left-1 bottom-[-2%]"
            >
                <ArrowLeft />
            </button>

            {/* Carousel Content */}
            <div className="flex flex-col md:flex-row items-center w-[95%] max-w-6xl space-y-4 md:space-y-0 md:space-x-4 h-auto ">
                {/* image */}
                <div className="flex-[0.3] bg-white rounded-xl overflow-hidden relative w-full min-h-[250px] md:h-[400px] shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                    <Image
                        src={slides[current].img}
                        alt="customer-name"
                        fill
                        loading="eager"
                        className="object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="flex-[0.7] flex flex-col bg-white rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.4)] p-4 md:p-6 h-auto md:h-[400px] w-full">
                    <h3 className='mb-6 font-semibold lg:text-2xl md:text-lg text-sm'>{slides[current].name}</h3>
                    <p className="text-lg lg:text-xl mb-2  font-poppins">
                        {slides[current].Review}
                    </p>
                    <span className="mt-6">⭐️⭐️⭐️⭐️⭐️</span>

                </div>
            </div>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="text-black hover:text-gray-600 text-4xl md:text-3xl absolute xl:right-[40%] md:right-[5%] right-1 bottom-[-2%]"
            >
                <ArrowRight />
            </button>

            {/* Dots */}
            <div className="absolute bottom-0 flex justify-center w-full space-x-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-2 h-2 rounded-full cursor-pointer ${current === index ? 'bg-gray-800' : 'bg-gray-300'
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ClientReviewsCarousal;
