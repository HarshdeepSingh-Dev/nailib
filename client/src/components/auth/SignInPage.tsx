"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

interface SignInData {
  email: string;
  password: string;
};

interface ApiError {
  response?: {
    data?: {
      error?: string;
    };
  };
}

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>();

  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const router = useRouter();


  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      router.replace("/dashboard"); // redirect if logged in
    }
  }, [router]);


  const onSubmit = async (data: SignInData) => {
    setSubmitError(null);
    setSuccessMsg(null);
    setLoading(true);

    try {
      const response = await axios.post("/api/login", data);
      console.log(response.data);
      if (response.status === 200) {
        const { token, user } = response.data;

        //  Save token in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        setSuccessMsg("Signed in successfully!");

        // Redirect to dashboard
        router.push("/dashboard");
      } else {
        setSubmitError("Something went wrong, please try again.");
      }
    } catch (error: unknown) {
  if (error instanceof AxiosError) {
    setSubmitError(error.response?.data?.message || "Unexpected error");
  } else {
    setSubmitError("Unexpected error");
  }
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
          Welcome Back
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 mt-3 text-center font-semibold"
        >
          Sign in to continue learning smarter
        </motion.p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
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
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
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
              {...register("password", { required: "Password is required" })}
              placeholder="••••••••"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none text-gray-800"
            />
            {errors.password && (
              <p className="text-red-600 mt-1">{errors.password.message}</p>
            )}
          </motion.div>

          {/* Error / Success Messages */}
          {submitError && <p className="text-red-600">{submitError}</p>}
          {successMsg && <p className="text-green-600">{successMsg}</p>}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="w-full py-2.5 font-semibold rounded-lg bg-gray-800 text-white hover:scale-105 transition shadow-[0_0_20px_rgba(79,70,229,0.4)]"
          >
            {loading ? "Signing In…" : "Sign In"}
          </motion.button>
        </form>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 text-center text-gray-600"
        >
          <p>
            Don’t have an account?{" "}
            <a
              href="/register"
              className="text-indigo-600 font-medium hover:underline"
            >
              Register
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SignInPage;
