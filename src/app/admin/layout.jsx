"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FiHome,
    FiUsers,
    FiDollarSign,
    FiBarChart2,
    FiSettings,
    FiLogOut,
    FiMenu,
    FiX,
} from "react-icons/fi";
import { signOut } from "next-auth/react";

export default function AdminLayout({ children }) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const menuItems = [
        {
            name: "ড্যাশবোর্ড",
            href: "/admin/dashboard",
            icon: FiHome,
        },
        {
            name: "সদস্যবৃন্দ",
            href: "/admin/manageMembers",
            icon: FiUsers,
        },
        {
            name: "সঞ্চয়",
            href: "/admin/savings",
            icon: FiDollarSign,
        },
        {
            name: "লেনদেন",
            href: "/admin/transactions",
            icon: FiBarChart2,
        },
        {
            name: "সেটিংস",
            href: "/admin/settings",
            icon: FiSettings,
        },
    ];

    return (
        <div className="min-h-screen bg-green-50">

            {/* Mobile Header */}
            <header className="flex h-16 items-center justify-between bg-green-900 px-4 text-white md:hidden">

                <Link href="/" className="text-xl font-bold">
                    স্বপ্ন
                </Link>

                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? (
                        <FiX size={24} />
                    ) : (
                        <FiMenu size={24} />
                    )}
                </button>

            </header>

            {/* Sidebar */}
            <aside
                className={`
                    fixed left-0 top-0 z-50
                    h-screen w-64
                    bg-green-900 text-white
                    transition-transform
                    ${sidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }
                    md:translate-x-0
                `}
            >

                {/* Logo */}
                <div className="border-b border-green-800 p-6">
                    <Link href="/" className="text-xl font-bold">
                        স্বপ্ন
                    </Link>

                    <p className="text-sm text-green-300">
                        প্রশাসনিক প্যানেল
                    </p>

                </div>

                {/* Navigation */}
                <nav className="space-y-1 p-4">

                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        const active =
                            pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() =>
                                    setSidebarOpen(false)
                                }
                                className={`
                                    flex items-center gap-3
                                    rounded-lg px-4 py-3
                                    ${active
                                        ? "bg-white text-green-800"
                                        : "text-green-100 hover:bg-green-800"
                                    }
                                `}
                            >
                                <Icon size={19} />

                                <span>
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}

                </nav>

                {/* Logout */}
                <div className="absolute bottom-5 left-4 right-4">

                    <button
                        onClick={() =>
                            signOut({
                                callbackUrl: "/login",
                            })
                        }
                        className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-red-300 hover:bg-red-500/10"
                    >
                        <FiLogOut size={19} />

                        লগআউট
                    </button>

                </div>

            </aside>

            {/* Admin Content */}
            <main className="min-h-screen md:ml-64">
                {children}
            </main>

        </div>
    );
}