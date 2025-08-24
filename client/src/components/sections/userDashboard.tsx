"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const [username, setUsername] = useState<string>("");
    const router = useRouter();


    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            router.replace("/sign-in"); // redirect if not logged in
        }
        if (storedUser) {
            try {
                const userObj = JSON.parse(storedUser);
                setUsername(userObj.name || "");
            } catch {
                setUsername("");
            }
        }
    }, [router]);

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/";
    };

    return (
        <div className="relative min-h-screen flex bg-[linear-gradient(to_right,theme(colors.slate.50),theme(colors.indigo.100))]">
            {/* Main Content */}
            <main className="flex-1 px-6 py-10 md:px-10 md:py-16 lg:py-20 overflow-y-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 60 }}
                    className="text-3xl font-bold text-gray-800 mb-6"
                >
                    Welcome back, <span className="text-indigo-600">{username}</span> 👋
                </motion.h2>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {[
                        { title: "Enrolled Courses", value: 6 },
                        { title: "Completed Lessons", value: 18 },
                        { title: "Study Hours", value: 42 },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 * i }}
                            className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl hover:scale-[1.02] transition"
                        >
                            <h3 className="text-gray-600 font-medium">{stat.title}</h3>
                            <p className="text-3xl font-extrabold text-indigo-600">
                                {stat.value}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Courses */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-10"
                >
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">My Courses</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {["IB Math AA HL", "IB Physics SL", "IB CS HL", "IB Chemistry"].map(
                            (course, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.03 }}
                                    className="p-6 rounded-xl bg-white shadow-md transition cursor-pointer"
                                >
                                    <h4 className="font-semibold text-lg text-gray-800 mb-2">
                                        {course}
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        Progress: <span className="text-indigo-600">50%</span>
                                    </p>
                                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-indigo-600 h-2 rounded-full w-1/2"></div>
                                    </div>
                                </motion.div>
                            )
                        )}
                    </div>
                </motion.div>

                <button
                    onClick={logout}
                    className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition mx-auto block"
                >
                    Logout
                </button>
            </main>
        </div>
    );
}
