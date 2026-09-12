"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiLock, FiMail, FiSend } from "react-icons/fi";

export default function ForgotPassword() {
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        toast.success("Email Sent Successfully!");

        // Start 2 minute timer
        setTimeLeft(120);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        return `${minutes}:${remainingSeconds
            .toString()
            .padStart(2, "0")}`;
    };

    return (
        <main className="flex min-h-screen items-center justify-center px-4 py-10">
            <div className="w-full max-w-md">
                <div className="mt-16 rounded-2xl border border-green-100 bg-white p-6 shadow-lg sm:p-8">

                    {/* Icon */}
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <FiLock className="text-2xl text-green-700" />
                    </div>

                    {/* Heading */}
                    <div className="mb-7 text-center">
                        <h1 className="text-2xl font-bold text-green-900 sm:text-3xl">
                            পাসওয়ার্ড ভুলে গেছেন?
                        </h1>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            আপনার অ্যাকাউন্টের ইমেইল ঠিকানা লিখুন।
                            পাসওয়ার্ড রিসেট করার জন্য আমরা আপনাকে
                            নির্দেশনা পাঠাব।
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                ইমেইল ঠিকানা
                            </label>

                            <div className="relative">
                                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="আপনার ইমেইল লিখুন"
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-100"
                                />
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={timeLeft > 0}
                            className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium text-white transition ${
                                timeLeft > 0
                                    ? "cursor-not-allowed bg-gray-400"
                                    : "bg-green-700 hover:bg-green-800"
                            }`}
                        >
                            <FiSend />

                            {timeLeft > 0
                                ? `আবার পাঠান (${formatTime(timeLeft)})`
                                : "রিসেট লিংক পাঠান"}
                        </button>

                        {/* Timer Message */}
                        {timeLeft > 0 && (
                            <p className="text-center text-sm text-gray-500">
                                রিসেট লিংক আবার পাঠাতে{" "}
                                <span className="font-semibold text-green-700">
                                    {formatTime(timeLeft)}
                                </span>{" "}
                                অপেক্ষা করুন।
                            </p>
                        )}
                    </form>

                    {/* Back to Login */}
                    <div className="mt-6 text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-medium text-green-700 transition hover:text-green-900"
                        >
                            <FiArrowLeft />
                            লগইন পেজে ফিরে যান
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}