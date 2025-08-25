'use client';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = { name: string; email: string; message: string };

const Page = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
    const [success, setSuccess] = useState(false);

    const onSubmit = async (data: FormData) => {
        try {
            reset();
            setSuccess(true);
        } catch (error) {
            alert('Failed to send message');
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 pb-12">
            {/* Hero Section */}
            <section className="relative h-auto -mt-[80px] flex flex-col items-center justify-center text-center bg-white rounded-b-3xl shadow-lg pb-16 pt-32 mb-12 overflow-hidden">
                <img
                    src="/images/contact/contact-page.jpg"
                    alt="Abstract AI Art"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
                />
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-black mb-3">LET&apos;S TALK</h2>
                    <p className="text-md md:text-xl text-black font-light">
                        We’re here to help and answer any questions you might have.<br />
                        Feel free to reach out — we’d love to hear from you!
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="lg:max-w-3xl max-w-2xl md:mx-auto bg-white rounded-xl shadow-lg p-8 mx-4">
                <form className="flex flex-col space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register('name', { required: true })}
                        placeholder="Your Name"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-5 py-4 text-gray-900 placeholder-gray-400 transition outline-none"
                    />
                    {errors.name && <p className="text-red-600 text-sm">Name is required</p>}

                    <input
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        placeholder="Your Email"
                        type="email"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-5 py-4 text-gray-900 placeholder-gray-400 transition outline-none"
                    />
                    {errors.email && <p className="text-red-600 text-sm">Valid email is required</p>}

                    <textarea
                        {...register('message', { required: true })}
                        placeholder="Your Message"
                        rows={5}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-5 py-4 text-gray-900 placeholder-gray-400 resize-none transition outline-none"
                    />
                    {errors.message && <p className="text-red-600 text-sm">Message is required</p>}

                    <button
                        type="submit"
                        className="w-full py-4 rounded-lg bg-gray-800 text-white font-semibold text-lg tracking-wide shadow-md transition"
                    >
                        Send Message
                    </button>
                </form>
                {success && (
                    <p className="mt-6 text-center text-green-600 font-medium text-base animate-fadeIn">
                        Message sent successfully!
                    </p>
                )}
            </section>
        </main>
    );
}

export default Page;