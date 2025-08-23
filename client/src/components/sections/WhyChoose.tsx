'use client'
import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Hook to animate count-up
function useCounter(target: number, inView: boolean, duration = 2) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const end = target;
        const increment = end / (duration * 60);
        let raf: number;

        const step = () => {
            start += increment;
            if (start < end) {
                setCount(Math.ceil(start));
                raf = requestAnimationFrame(step);
            } else {
                setCount(end);
                cancelAnimationFrame(raf);
            }
        };

        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [target, inView, duration]);

    return count;
}

const stats = [
    { number: 5270, label: "IB Videos" },
    { number: 37522, label: "IB-Like Questions" },
    { number: 5912, label: "IB Notes" },
];

const WhyChoose = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section ref={ref} className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
                    Why Choose Us
                </h2>

                <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                    We combine innovation, expertise, and dedication to deliver solutions that
                    create real impact for our clients.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => {
                        const count = useCounter(stat.number, inView);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="bg-white shadow-[0_0_20px_rgba(79,70,229,0.4)] rounded-2xl p-8"
                            >
                                <div className="text-4xl lg:text-5xl font-extrabold text-primary mb-4">
                                    {count.toLocaleString()}+
                                </div>
                                <p className="text-lg text-gray-700 font-semibold">{stat.label}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default WhyChoose;