"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface RegisterData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

interface ApiError {
    response?: {
        data?: {
            error?: string;
        };
    };
}

const RegisterUserPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterData>();

    const [submitError, setSubmitError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);
    const router = useRouter();


    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            router.replace("/dashboard"); // redirect if logged in
        }
    }, [router]);

    // handle data submit
    const onSubmit = async (data: RegisterData) => {
        setSubmitError(null);
        setSuccessMsg(null);
        setLoading(true);

        if (data.password !== data.confirmPassword) {
            setSubmitError("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post("/api/register", data);

            if (response.status === 200 || response.status === 201) {
                setSuccessMsg("Account created successfully!");
            } else {
                setSubmitError("Something went wrong, please try again.");
            }
            router.push("/sign-in");
        } catch (error: unknown) {
            const err = error as ApiError;
            setSubmitError(err.response?.data?.error || "Unexpected error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-[url('/images/hero/vector.svg'),linear-gradient(to_right,theme(colors.slate.50),theme(colors.indigo.100))] bg-no-repeat bg-cover bg-center py-20">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 md:p-12 w-full max-w-md border border-gray-200 mx-4"
            >
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl font-bold text-gray-800 text-center"
                >
                    Create Your Account 🚀
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 mt-3 text-center font-semibold"
                >
                    Join us and unlock smarter learning.
                </motion.p>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                    {/* Name */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <label htmlFor="name" className="block text-gray-700 font-medium">
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            placeholder="John Doe"
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none text-gray-800"
                        />
                        {errors.name && (
                            <p className="text-red-600 mt-1">{errors.name.message}</p>
                        )}
                    </motion.div>

                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <label htmlFor="email" className="block text-gray-700 font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Invalid email address",
                                },
                            })}
                            placeholder="you@example.com"
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none text-gray-800"
                        />
                        {errors.email && (
                            <p className="text-red-600 mt-1">{errors.email.message}</p>
                        )}
                    </motion.div>

                    {/* Password */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-medium"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Minimum 6 characters",
                                },
                            })}
                            placeholder="••••••••"
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none text-gray-800"
                        />
                        {errors.password && (
                            <p className="text-red-600 mt-1">{errors.password.message}</p>
                        )}
                    </motion.div>

                    {/* Confirm Password */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 }}
                    >
                        <label
                            htmlFor="confirmPassword"
                            className="block text-gray-700 font-medium"
                        >
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            {...register("confirmPassword", {
                                required: "Please confirm your password",
                            })}
                            placeholder="••••••••"
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none text-gray-800"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-600 mt-1">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </motion.div>

                    {submitError && <p className="text-red-600">{submitError}</p>}
                    {successMsg && <p className="text-green-600">{successMsg}</p>}

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={loading}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3 }}
                        className="w-full py-2.5 font-semibold rounded-lg bg-gray-800 text-white hover:scale-105 transition shadow-[0_0_20px_rgba(79,70,229,0.4)]"
                    >
                        {loading ? "Creating Account…" : "Sign Up"}
                    </motion.button>
                </form>

                {/* Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="mt-6 text-center text-gray-600"
                >
                    <p>
                        Already have an account?{" "}
                        <a
                            href="/sign-in"
                            className="text-indigo-600 font-medium hover:underline"
                        >
                            Sign In
                        </a>
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default RegisterUserPage;
