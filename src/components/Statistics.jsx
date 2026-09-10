"use client";

import {
    FiUsers,
    FiDollarSign,
    FiTrendingUp,
    FiHeart,
} from "react-icons/fi";
import CountUp from "react-countup";

const stats = [
    {
        title: "মোট সদস্য",
        value: 14,
        suffix: " জন",
        icon: FiUsers,
        color: "bg-green-600",
    },
    {
        title: "মোট তহবিল",
        value: 205500,
        icon: FiDollarSign,
        color: "bg-blue-500",
    },
    {
        title: "মোট জমা",
        value: 230500,
        suffix: "",
        icon: FiTrendingUp,
        color: "bg-purple-600",
    },
    {
        title: "ঋণ বিতরণ",
        value: 85000,
        icon: FiHeart,
        color: "bg-orange-500",
    },
];

export default function Statistics() {
    return (
        <section className="relative z-10 mx-2 sm:mx-10">
            <div className="grid overflow-hidden rounded-2xl bg-white shadow-xl sm:grid-cols-4 grid-cols-2">

                {stats.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className="flex items-center gap-4 border-b border-gray-200 p-6 last:border-b-0 md:border-b-0 md:border-r"
                        >
                            <div
                                className={`flex sm:h-14 sm:w-14 h-10 w-10  shrink-0 items-center justify-center rounded-full text-2xl text-white ${item.color}`}
                            >
                                <Icon />
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    {item.title}
                                </p>

                                <h3 className="sm:text-xl text-sm font-bold text-gray-800">
                                    {item.title === "মোট সদস্য" ? (
                                        <>
                                            <CountUp
                                                end={item.value}
                                                duration={2.5}
                                                enableScrollSpy
                                                scrollSpyOnce
                                            />
                                            {item.suffix}
                                        </>
                                    ) : (
                                        <>
                                            ৳{" "}
                                            <CountUp
                                                end={item.value}
                                                duration={2.5}
                                                separator=","
                                            />
                                        </>
                                    )}
                                </h3>

                                <p className="mt-1 text-xs text-gray-500">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    );
                })}

            </div>
        </section>
    );
}