"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-[#063d32] text-white shadow-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">

                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="flex items-center gap-3"
                >
                    {/* Logo Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white sm:h-14 sm:w-14">
                        <span className="text-xl text-green-700 sm:text-2xl">
                            🌱
                        </span>
                    </div>

                    {/* Brand Name */}
                    <div className="leading-tight">
                        <h2 className="text-lg font-bold tracking-wide text-white sm:text-xl">
                            স্বপ্ন
                        </h2>

                        <p className="mt-0.5 text-[11px] font-medium text-green-200 sm:text-sm">
                            একটি আর্থিক সমিতি
                        </p>
                    </div>
                </Link>
                {/* Desktop Menu */}
                <nav className="hidden items-center gap-8 md:flex">
                    <Link
                        href="#home"
                        className="border-b-2 border-green-400 pb-2 text-green-300 transition hover:text-white"
                    >
                        হোম
                    </Link>

                    <Link
                        href="#about"
                        className="transition hover:text-green-300"
                    >
                        আমাদের সম্পর্কে
                    </Link>

                    <Link
                        href="#rules"
                        className="transition hover:text-green-300"
                    >
                        নিয়মাবলী
                    </Link>

                    <Link
                        href="#contact"
                        className="transition hover:text-green-300"
                    >
                        যোগাযোগ
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="
                        rounded-lg p-2
                        text-2xl
                        transition
                        hover:bg-white/10
                        md:hidden
                    "
                    aria-label={isOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`
                    overflow-hidden border-t border-white/10
                    bg-[#063d32]
                    transition-all duration-300 md:hidden
                    ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                <nav className="mx-auto max-w-7xl px-4 py-3">

                    <Link
                        href="#home"
                        onClick={closeMenu}
                        className="
                            block rounded-lg
                            bg-white/10 px-4 py-3
                            font-semibold text-green-300
                            transition hover:bg-white/15
                        "
                    >
                        হোম
                    </Link>

                    <Link
                        href="#about"
                        onClick={closeMenu}
                        className="
                            mt-1 block rounded-lg
                            px-4 py-3
                            transition hover:bg-white/10
                            hover:text-green-300
                        "
                    >
                        আমাদের সম্পর্কে
                    </Link>

                    <Link
                        href="#rules"
                        onClick={closeMenu}
                        className="
                            mt-1 block rounded-lg
                            px-4 py-3
                            transition hover:bg-white/10
                            hover:text-green-300
                        "
                    >
                        নিয়মাবলী
                    </Link>

                    <Link
                        href="#contact"
                        onClick={closeMenu}
                        className="
                            mt-1 block rounded-lg
                            px-4 py-3
                            transition hover:bg-white/10
                            hover:text-green-300
                        "
                    >
                        যোগাযোগ
                    </Link>
                </nav>
            </div>
        </header>
    );
}