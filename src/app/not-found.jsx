"use client"
import Link from "next/link";
import { FiHome, FiArrowLeft, FiSearch } from "react-icons/fi";

export default function NotFound() {
    return (
        <section className="flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#f7f8f6] px-4 py-16">

            <div className="relative w-full max-w-3xl text-center">

                {/* Background decoration */}
                <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-green-200/30 blur-3xl" />

                <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-green-300/30 blur-3xl" />

                {/* 404 */}
                <h1 className="relative mt-8 text-8xl font-bold tracking-tight text-[#063d32] sm:text-9xl">
                    404
                </h1>

                <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-green-600" />

                {/* Text */}
                <h2 className="mt-8 text-3xl font-bold text-[#163d35] md:text-4xl">
                    পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
                </h2>

                <p className="mx-auto mt-4 max-w-xl leading-8 text-gray-600">
                    দুঃখিত! আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে,
                    পরিবর্তন করা হয়েছে অথবা এই ঠিকানাটি সঠিক নয়।
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#063d32] px-7 py-3.5 font-semibold text-white transition hover:bg-[#0a5645]"
                    >
                        <FiHome />
                        হোমে ফিরে যান
                    </Link>

                    <button
                        onClick={() => history.back()}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-700 px-7 py-3.5 font-semibold text-[#063d32] transition hover:bg-green-50"
                    >
                        <FiArrowLeft />
                        আগের পৃষ্ঠায় যান
                    </button>

                </div>
            </div>
        </section>
    );
}