'use client'
import { delay, motion } from 'framer-motion';

const features = [
    "5,200+ Examiner-led videos",
    "1,100+ Hours of lessons",
    "230+ Solved past papers",
    "37,000+ Practice questions",
    "5,900+ Comprehensive IB notes",
    "53,000+ Digital flashcards",
];

// animation settings for list
const listVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.24,
            delayChildren: 1.2
        },
    },
}

// animation settings for each list item
const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 },
};

const Hero = () => {
    return (
        <section className="relative -mt-[80px] flex flex-col pb-16 pt-32 lg:py-36 bg-[url('/images/hero/vector.svg'),linear-gradient(to_right,theme(colors.slate.50),theme(colors.indigo.100))] bg-no-repeat bg-cover bg-center">
            {/* heading */}
            <motion.h1
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                    delay: 0
                }}
                className="text-3xl md:text-5xl xl:text-7xl text-center font-extrabold leading-tight text-gray-800 max-w-6xl mx-auto">
                The World’s #1 <br /> IB Resources Platform.<br />
                <span className="text-primary">Period.</span>
            </motion.h1>

            {/* more content */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5
                }}
                className="mt-6 text-lg md:text-2xl font-semibold text-gray-700 max-w-3xl mx-auto">
                Unlock unlimited access to:
            </motion.p>
            <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="show"
                className="text-start mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
                {features.map((feature, i) => (
                    <motion.li key={i} variants={itemVariants}>
                        <strong>{feature.split(" ")[0]}</strong>{" "}
                        {feature.replace(feature.split(" ")[0], "")}
                    </motion.li>
                ))}
            </motion.ul>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 2.6
                }}
                className="px-4 text-center mt-6 text-lg md:text-2xl font-semibold text-gray-700 max-w-3xl mx-auto">
                …and everything else you’ll ever need to crush the IB.
            </motion.p>

            <motion.button
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{
                duration: 0.8,
                delay: 3.4,
            }}
            className="mt-6 px-6 md:text-xl font-semibold py-2 rounded-lg w-fit mx-auto bg-gray-800 text-white hover:scale-105 transition shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                Try It Free
            </motion.button>

        </section>
    )
}

export default Hero;