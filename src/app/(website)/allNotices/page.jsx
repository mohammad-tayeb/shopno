"use client";

import { useState } from "react";
import {
    FiBell,
    FiCalendar,
    FiChevronDown,
    FiFileText,
} from "react-icons/fi";

export default function NoticePage() {
    const [openNotice, setOpenNotice] = useState(null);

    const notices = [
        {
            id: 1,
            title: "মাসিক সঞ্চয় জমা দেওয়ার সময়সূচি",
            date: "১২ সেপ্টেম্বর ২০২৬",
            category: "সাধারণ নোটিশ",
            description:
                "সকল সদস্যকে নির্ধারিত সময়ের মধ্যে মাসিক সঞ্চয়ের অর্থ জমা দেওয়ার জন্য অনুরোধ করা যাচ্ছে।",
        },
        {
            id: 2,
            title: "আগামী মাসিক সভা সম্পর্কে বিজ্ঞপ্তি",
            date: "১০ সেপ্টেম্বর ২০২৬",
            category: "সভা",
            description:
                "আগামী মাসের মাসিক সভা নির্ধারিত তারিখ ও সময় অনুযায়ী অনুষ্ঠিত হবে। সকল সদস্যের উপস্থিতি প্রত্যাশিত।",
        },
        {
            id: 3,
            title: "নতুন সদস্য নিবন্ধন কার্যক্রম",
            date: "০৮ সেপ্টেম্বর ২০২৬",
            category: "সদস্য",
            description:
                "নতুন সদস্যদের নিবন্ধন কার্যক্রম শুরু হয়েছে। আগ্রহী সদস্যদের নির্ধারিত প্রক্রিয়া অনুসরণ করার জন্য অনুরোধ করা হচ্ছে।",
        },
        {
            id: 4,
            title: "সঞ্চয় ও হিসাব সংক্রান্ত গুরুত্বপূর্ণ নির্দেশনা",
            date: "০৫ সেপ্টেম্বর ২০২৬",
            category: "গুরুত্বপূর্ণ",
            description:
                "সদস্যদের সঞ্চয় ও হিসাব সংক্রান্ত তথ্য হালনাগাদ রাখার জন্য প্রয়োজনীয় নির্দেশনা প্রদান করা হয়েছে।",
        },
        {
            id: 5,
            title: "সমিতির হিসাব সংক্রান্ত বিজ্ঞপ্তি",
            date: "০১ সেপ্টেম্বর ২০২৬",
            category: "হিসাব",
            description:
                "সমিতির বর্তমান হিসাব ও আর্থিক কার্যক্রম সম্পর্কে সদস্যদের অবগত করা যাচ্ছে।",
        },
        {
            id: 6,
            title: "সদস্যদের জন্য নতুন নিয়মাবলী",
            date: "২৮ আগস্ট ২০২৬",
            category: "নিয়মাবলী",
            description:
                "সমিতির কার্যক্রম আরও সুশৃঙ্খল ও স্বচ্ছ করার লক্ষ্যে কিছু নতুন নিয়মাবলী কার্যকর করা হয়েছে।",
        },
    ];

    const toggleNotice = (id) => {
        setOpenNotice(openNotice === id ? null : id);
    };

    return (
        <main className="min-h-screen bg-green-50">
            <section className="mt-10 px-4 py-10 sm:py-14">
                <div className="mx-auto max-w-6xl">
                    {/* Header */}
                    <div className="mb-7 flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-green-900 sm:text-2xl">
                                সাম্প্রতিক নোটিশ
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                সর্বশেষ প্রকাশিত বিজ্ঞপ্তিসমূহ
                            </p>
                        </div>

                        <div className="hidden items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 sm:flex">
                            <FiBell />
                            মোট {notices.length}টি
                        </div>
                    </div>

                    {/* FAQ List */}
                    <div className="space-y-3">
                        {notices.map((notice) => {
                            const isOpen = openNotice === notice.id;

                            return (
                                <div
                                    key={notice.id}
                                    className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                                        isOpen
                                            ? "border-green-300 shadow-md"
                                            : "border-green-100 shadow-sm"
                                    }`}
                                >
                                    {/* Question */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            toggleNotice(notice.id)
                                        }
                                        className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                                    >
                                        {/* Icon */}
                                        <div
                                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition ${
                                                isOpen
                                                    ? "bg-green-700 text-white"
                                                    : "bg-green-50 text-green-700"
                                            }`}
                                        >
                                            <FiFileText className="text-lg" />
                                        </div>

                                        {/* Content */}
                                        <div className="min-w-0 flex-1">
                                            <div className="mb-1.5 flex flex-wrap items-center gap-2">
                                                <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                                                    {notice.category}
                                                </span>

                                                <span className="flex items-center gap-1 text-xs text-gray-400">
                                                    <FiCalendar />
                                                    {notice.date}
                                                </span>
                                            </div>

                                            <h3
                                                className={`text-sm font-bold sm:text-base ${
                                                    isOpen
                                                        ? "text-green-700"
                                                        : "text-gray-800"
                                                }`}
                                            >
                                                {notice.title}
                                            </h3>
                                        </div>

                                        {/* Chevron */}
                                        <FiChevronDown
                                            className={`shrink-0 text-xl text-gray-400 transition-transform duration-300 ${
                                                isOpen
                                                    ? "rotate-180 text-green-700"
                                                    : ""
                                            }`}
                                        />
                                    </button>

                                    {/* Answer */}
                                    <div
                                        className={`grid transition-all duration-300 ${
                                            isOpen
                                                ? "grid-rows-[1fr]"
                                                : "grid-rows-[0fr]"
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="border-t border-green-100 px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pl-20">
                                                <p className="text-sm leading-7 text-gray-600">
                                                    {notice.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Empty State */}
                    {notices.length === 0 && (
                        <div className="rounded-2xl border border-green-100 bg-white px-6 py-16 text-center shadow-sm">
                            <FiBell className="mx-auto text-4xl text-gray-300" />

                            <h3 className="mt-4 text-lg font-semibold text-gray-700">
                                কোনো নোটিশ পাওয়া যায়নি
                            </h3>

                            <p className="mt-1 text-sm text-gray-400">
                                বর্তমানে প্রদর্শনের জন্য কোনো নোটিশ নেই।
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}