"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const closeMenu = () => {
        setIsOpen(false);
    };

    const navLinks = [
        {
            name: "হোম",
            href: "/",
        },
        {
            name: "আমাদের সম্পর্কে",
            href: "/about",
        },
        {
            name: "নিয়মাবলী",
            href: "/rule",
        },
        {
            name: "বিজ্ঞপ্তিসমূহ",
            href: "/allNotices",
        }
    ];

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-[#063d32] text-white shadow-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">

                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="flex items-center gap-3"
                >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white sm:h-14 sm:w-14">
                        <Image
                            src="/2.png"
                            alt="স্বপ্ন লোগো"
                            width={56}
                            height={56}
                            className="h-full w-full object-contain p-1"
                        />
                    </div>

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
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`border-b-2 pb-2 transition ${isActive
                                        ? "border-green-400 text-green-300"
                                        : "border-transparent text-white hover:text-green-300"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-lg p-2 text-2xl transition hover:bg-white/10 md:hidden"
                    aria-label={isOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden border-t border-white/10 bg-[#063d32] transition-all duration-300 md:hidden ${isOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="mx-auto max-w-7xl px-4 py-3">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className={`mt-1 block rounded-lg px-4 py-3 transition ${isActive
                                        ? "bg-white/10 font-semibold text-green-300"
                                        : "text-white hover:bg-white/10 hover:text-green-300"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}