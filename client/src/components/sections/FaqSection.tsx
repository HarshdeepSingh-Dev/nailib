"use client";
import { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const faqData = [
    {
        question: "What subjects does NailIB cover?",
        answer: "We offer comprehensive resources for all IB subjects including Math, Physics, Chemistry, Languages, Visual Arts, and more.",
    },
    {
        question: "How do I register for courses?",
        answer: "Simply click on the 'Get Started' button, create an account, and browse available courses to enroll.",
    },
    {
        question: "Are the study materials up-to-date with the IB curriculum?",
        answer: "Yes, all our materials are regularly reviewed and updated to align with the latest IB syllabus and exam guidelines.",
    },
    {
        question: "Can I access the content offline?",
        answer: "Currently, the platform requires an internet connection for video streaming and resources. We plan to add offline capabilities soon.",
    },
    {
        question: "Do you offer any free trial or sample content?",
        answer: "Yes, select courses have free sample lessons and practice questions available for you to explore before enrolling.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className=" py-16 px-6 md:px-12 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border border-indigo-200 rounded-lg cursor-pointer overflow-hidden"
                        onClick={() => toggle(index)}
                    >
                        <div className="flex justify-between items-center bg-indigo-50 px-6 py-4">
                            <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                            <span className="text-gray-500 text-xl">{openIndex === index ? "−" : "+"}</span>
                        </div>
                        <AnimatePresence initial={false}>
                            {openIndex === index && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 py-4 bg-indigo-25 text-gray-800">
                                        <p>{item.answer}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQSection;