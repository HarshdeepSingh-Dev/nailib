'use client'
import React from "react";
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, desc }: { title: string, icon: React.ReactNode, desc: string }) => {
    return (
        <motion.div
            className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            {icon}
            <h3 className="md:text-xl text-lg lg:text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-center font-semibold">{desc}</p>
        </motion.div>
    )
};

export default ServiceCard;