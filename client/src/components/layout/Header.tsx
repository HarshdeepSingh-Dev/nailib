"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from 'framer-motion';

// ball to header animation
const headerVariants: Variants = {
    hidden: {
        y: -100,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 60, damping: 15, duration: 0.8, delay: 3.2 }
    }
};

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.header
            variants={headerVariants}
            initial="hidden"
            animate="show"
            className="sticky top-4 z-50 mx-4 xl:max-w-7xl lg:max-w-4xl max-w-xl md:mx-auto rounded-full bg-[linear-gradient(to_right,theme(colors.slate.50),theme(colors.indigo.100))/30] backdrop-blur-lg border border-white/30 shadow-[0_0_20px_rgba(79,70,229,0.4)]">
            <div className=" mx-auto flex items-center justify-between px-6 lg:py-4 py-2">
                {/* Logo */}
                <div className="lg:text-2xl text-xl font-bold text-gray-900">
                    NailIB
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 lg:text-xl text-md font-semibold">
                    <a href="#features" className="text-gray-800 opacity-80 hover:opacity-100 transition">Features</a>
                    <a href="#pricing" className="text-gray-800 opacity-80 hover:opacity-100 transition">Pricing</a>
                    <a href="#about" className="text-gray-800 opacity-80 hover:opacity-100 transition">About</a>
                </nav>

                {/* CTA */}
                <div className="hidden md:block">
                    <button className="px-6 py-2 rounded-full bg-gray-800 text-white shadow hover:scale-105 transition">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, x: 20, y: -20, scale: 0.80 }}
                        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, y: -20, scale: 0.80 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <nav className="md:hidden font-semibold absolute right-4 bg-indigo-50/96 rounded-lg backdrop-blur-xl border border-white/30 shadow-lg px-6 py-4 flex flex-col gap-4">
                            <a href="#features" className="text-gray-800">Features</a>
                            <a href="#pricing" className="text-gray-800">Pricing</a>
                            <a href="#about" className="text-gray-800">About</a>
                            <button className="mt-2 px-6 py-2 rounded-full bg-gray-800 text-white shadow">
                                Get Started
                            </button>
                        </nav>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
