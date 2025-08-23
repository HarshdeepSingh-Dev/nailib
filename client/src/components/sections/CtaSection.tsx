'use client';

import { motion } from 'framer-motion';

const CtaSection = () => {
    return (
        <section className="max-w-6xl shadow-md my-12 mx-auto relative flex flex-col pb-8 pt-16 lg:py-16 bg-gradient-to-tr from-indigo-50 via-indigo-100 to-indigo-200 bg-[url('/images/hero/vector.svg')] bg-no-repeat bg-cover bg-center overflow-hidden rounded-3xl border border-indigo-100">
            {/* Simulated indigo concentric circles background */}
            <div
                aria-hidden
                className="absolute right-0 top-0 h-full w-3/5 pointer-events-none"
            >
                <div
                    className="absolute right-0 top-0 h-full w-full"
                    style={{
                        background:
                            'radial-gradient(circle at 80% 50%, #f7f9fa 0%, #e0e7ff 45%, #c7d2fe 70%, transparent 100%)',
                        opacity: 0.8,
                    }}
                />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center px-4">
                {/* Heading */}
                <motion.h2
                    initial={{ y: -60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 60,
                        damping: 18,
                        delay: 0,
                    }}
                    className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900 text-center"
                >
                    Let&apos;s Get In Touch.
                </motion.h2>

                {/* Subtitle/info */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-5 text-base md:text-lg font-medium text-gray-700 text-center max-w-xl"
                >
                    Your laboratory instruments should serve you, not the other way around. We&apos;re happy to help you.
                </motion.p>

                {/* Button group */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="mt-8 flex gap-6 flex-col sm:flex-row items-center"
                >
                    <button
                        className="flex items-center gap-3 px-7 py-3 rounded-full bg-gray-800 text-white font-bold text-base md:text-lg shadow-lg border border-indigo-200 hover:scale-105 active:scale-95 transition-transform focus:outline-none"
                    >
                        Book a discovery call
                        <span className="w-5 h-5 rounded-full bg-gradient-to-t from-indigo-200 to-white shadow-inner inline-block" />
                    </button>
                    <button
                        className="flex items-center gap-3 px-7 py-3 rounded-full bg-gray-800 text-white font-bold text-base md:text-lg shadow-lg border border-indigo-200 hover:scale-105 active:scale-95 transition-transform focus:outline-none"
                    >
                        Test Your Samples
                        <span className="w-5 h-5 rounded-full bg-gradient-to-t from-indigo-200 to-white shadow-inner inline-block" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

export default CtaSection