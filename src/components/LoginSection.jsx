"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
    FiUser,
    FiLock,
    FiSettings,
    FiEye,
    FiEyeOff,
} from "react-icons/fi";

export default function LoginSection() {
    const [showMemberPassword, setShowMemberPassword] = useState(false);
    const [showAdminPassword, setShowAdminPassword] = useState(false);

    const {
        register: registerMember,
        handleSubmit: handleMemberSubmit,
        reset: resetMember,
        formState: {
            errors: memberErrors,
            isSubmitting: memberSubmitting,
        },
    } = useForm();

    const {
        register: registerAdmin,
        handleSubmit: handleAdminSubmit,
        reset: resetAdmin,
        formState: {
            errors: adminErrors,
            isSubmitting: adminSubmitting,
        },
    } = useForm();

    const onMemberSubmit = async (data) => {
        console.log("Member Login:", data);

        // API call এখানে করবেন
        // const res = await fetch("/api/member/login", {...});

        resetMember();
    };

    const onAdminSubmit = async (data) => {
        console.log("Admin Login:", data);

        // API call এখানে করবেন
        // const res = await fetch("/api/admin/login", {...});

        resetAdmin();
    };

    return (
        <section className="grid gap-6 py-8 sm:mx-10 mx-2 md:grid-cols-2">

            {/* Member Login */}
            <div className="rounded-xl border border-green-100 bg-gradient-to-br from-[#f0faf4] to-[#ffffff] p-5 shadow-sm sm:p-7">

                <div className="mb-6 text-center">
                    <FiUser className="mx-auto text-4xl text-green-600" />

                    <h2 className="mt-2 text-2xl font-bold text-[#163d35]">
                        সদস্য লগইন
                    </h2>

                    <p className="text-sm text-gray-500">
                        আপনার হিসাব দেখতে এখানে লগইন করুন
                    </p>
                </div>

                <form
                    onSubmit={handleMemberSubmit(onMemberSubmit)}
                    className="space-y-4"
                >

                    {/* Member ID */}
                    <div>
                        <div className="relative">
                            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                            <input
                                type="text"
                                placeholder="আপনার সদস্য আইডি দিন"
                                className={`w-full rounded-lg border py-3 pl-12 pr-4 outline-none transition focus:border-green-500 ${memberErrors.memberId
                                        ? "border-red-500"
                                        : "border-gray-200"
                                    }`}
                                {...registerMember("memberId", {
                                    required: "সদস্য আইডি দিন",
                                })}
                            />
                        </div>

                        {memberErrors.memberId && (
                            <p className="mt-1 text-xs text-red-500">
                                {memberErrors.memberId.message}
                            </p>
                        )}
                    </div>

                    {/* Member Password */}
                    <div>
                        <div className="relative">
                            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                            <input
                                type={
                                    showMemberPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="আপনার পাসওয়ার্ড দিন"
                                className={`w-full rounded-lg border py-3 pl-12 pr-12 outline-none transition focus:border-green-500 ${memberErrors.password
                                        ? "border-red-500"
                                        : "border-gray-200"
                                    }`}
                                {...registerMember("password", {
                                    required: "পাসওয়ার্ড দিন",
                                    minLength: {
                                        value: 6,
                                        message:
                                            "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে",
                                    },
                                })}
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowMemberPassword(
                                        !showMemberPassword
                                    )
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                aria-label={
                                    showMemberPassword
                                        ? "পাসওয়ার্ড লুকান"
                                        : "পাসওয়ার্ড দেখুন"
                                }
                            >
                                {showMemberPassword ? (
                                    <FiEyeOff />
                                ) : (
                                    <FiEye />
                                )}
                            </button>
                        </div>

                        {memberErrors.password && (
                            <p className="mt-1 text-xs text-red-500">
                                {memberErrors.password.message}
                            </p>
                        )}
                    </div>

                    <Link
                        href="/forgot-password"
                        className="text-sm text-green-700 hover:underline"
                    >
                        পাসওয়ার্ড ভুলে গেছেন?
                    </Link>

                    <button
                        type="submit"
                        disabled={memberSubmitting}
                        className="flex mt-3 w-full items-center justify-center rounded-lg bg-[#08633f] py-3 font-semibold text-white transition hover:bg-[#074f33] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {memberSubmitting ? (
                            <span className="loading loading-spinner loading-sm" />
                        ) : (
                            "লগইন করুন"
                        )}
                    </button>

                </form>
            </div>

            {/* Admin Login */}
            <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-[#f3f7ff] to-white p-5 shadow-sm sm:p-7">

                <div className="mb-6 text-center">
                    <FiSettings className="mx-auto text-4xl text-blue-600" />

                    <h2 className="mt-2 text-2xl font-bold text-[#163d35]">
                        অ্যাডমিন লগইন
                    </h2>

                    <p className="text-sm text-gray-500">
                        শুধুমাত্র অ্যাডমিনের জন্য
                    </p>
                </div>

                <form
                    onSubmit={handleAdminSubmit(onAdminSubmit)}
                    className="space-y-4"
                >

                    {/* Admin ID */}
                    <div>
                        <div className="relative">
                            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                            <input
                                type="text"
                                placeholder="অ্যাডমিন আইডি দিন"
                                className={`w-full rounded-lg border py-3 pl-12 pr-4 outline-none transition focus:border-blue-500 ${adminErrors.adminId
                                        ? "border-red-500"
                                        : "border-gray-200"
                                    }`}
                                {...registerAdmin("adminId", {
                                    required: "অ্যাডমিন আইডি দিন",
                                })}
                            />
                        </div>

                        {adminErrors.adminId && (
                            <p className="mt-1 text-xs text-red-500">
                                {adminErrors.adminId.message}
                            </p>
                        )}
                    </div>

                    {/* Admin Password */}
                    <div>
                        <div className="relative">
                            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                            <input
                                type={
                                    showAdminPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="পাসওয়ার্ড দিন"
                                className={`w-full rounded-lg border py-3 pl-12 pr-12 outline-none transition focus:border-blue-500 ${adminErrors.password
                                        ? "border-red-500"
                                        : "border-gray-200"
                                    }`}
                                {...registerAdmin("password", {
                                    required: "পাসওয়ার্ড দিন",
                                    minLength: {
                                        value: 6,
                                        message:
                                            "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে",
                                    },
                                })}
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowAdminPassword(
                                        !showAdminPassword
                                    )
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                aria-label={
                                    showAdminPassword
                                        ? "পাসওয়ার্ড লুকান"
                                        : "পাসওয়ার্ড দেখুন"
                                }
                            >
                                {showAdminPassword ? (
                                    <FiEyeOff />
                                ) : (
                                    <FiEye />
                                )}
                            </button>
                        </div>

                        {adminErrors.password && (
                            <p className="mt-1 text-xs text-red-500">
                                {adminErrors.password.message}
                            </p>
                        )}
                    </div>

                    <Link
                        href="/forgot-password"
                        className="text-sm text-green-700 hover:underline"
                    >
                        পাসওয়ার্ড ভুলে গেছেন?
                    </Link>

                    <button
                        type="submit"
                        disabled={adminSubmitting}
                        className="flex w-full mt-3 items-center justify-center rounded-lg bg-[#125785] py-3 font-semibold text-white transition hover:bg-[#0d456b] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {adminSubmitting ? (
                            <span className="loading loading-spinner loading-sm" />
                        ) : (
                            "লগইন করুন"
                        )}
                    </button>

                </form>
            </div>

        </section>
    );
}