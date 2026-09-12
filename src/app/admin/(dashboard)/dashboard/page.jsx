import {
    FiUsers,
    FiDollarSign,
    FiUserCheck,
    FiTrendingUp,
} from "react-icons/fi";

export default function AdminDashboard() {
    return (
        <div className="p-4 sm:p-6 lg:p-8">

            {/* Header */}
            <div className="mb-8">

                <h1 className="text-2xl font-bold text-green-900 sm:text-3xl">
                    ড্যাশবোর্ড
                </h1>

                <p className="mt-1 text-sm text-gray-500 sm:text-base">
                    স্বপ্ন আর্থিক সমিতির প্রশাসনিক ড্যাশবোর্ড
                </p>

            </div>

            {/* Statistics */}
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

                {/* Total Members */}
                <div className="rounded-2xl bg-white p-5 shadow-sm">

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-sm text-gray-500">
                                মোট সদস্য
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-green-800">
                                ১৪
                            </h2>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                            <FiUsers size={23} />
                        </div>

                    </div>

                    <p className="mt-4 text-xs text-green-600">
                        মোট নিবন্ধিত সদস্য
                    </p>

                </div>

                {/* Active Members */}
                <div className="rounded-2xl bg-white p-5 shadow-sm">

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-sm text-gray-500">
                                সক্রিয় সদস্য
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-green-800">
                                ১২
                            </h2>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                            <FiUserCheck size={23} />
                        </div>

                    </div>

                    <p className="mt-4 text-xs text-blue-600">
                        বর্তমানে সক্রিয়
                    </p>

                </div>

                {/* Total Savings */}
                <div className="rounded-2xl bg-white p-5 shadow-sm">

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-sm text-gray-500">
                                মোট সঞ্চয়
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-green-800">
                                ৳ ২.৪৫ লাখ
                            </h2>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                            <FiDollarSign size={23} />
                        </div>

                    </div>

                    <p className="mt-4 text-xs text-amber-600">
                        সদস্যদের মোট সঞ্চয়
                    </p>

                </div>

                {/* Monthly Collection */}
                <div className="rounded-2xl bg-white p-5 shadow-sm">

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-sm text-gray-500">
                                মাসিক জমা
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-green-800">
                                ৳ ৩৫,০০০
                            </h2>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                            <FiTrendingUp size={23} />
                        </div>

                    </div>

                    <p className="mt-4 text-xs text-purple-600">
                        চলতি মাসের জমা
                    </p>

                </div>

            </div>

            {/* Recent Activity */}
            <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm sm:p-6">

                <div className="mb-5 flex items-center justify-between">

                    <div>
                        <h2 className="text-lg font-bold text-gray-800">
                            সাম্প্রতিক কার্যক্রম
                        </h2>

                        <p className="text-sm text-gray-500">
                            সর্বশেষ সদস্য কার্যক্রম
                        </p>
                    </div>

                </div>

                <div className="space-y-4">

                    <div className="flex items-center justify-between border-b pb-4">

                        <div>
                            <p className="font-medium">
                                মোঃ রাকিব হাসান
                            </p>

                            <p className="text-xs text-gray-500">
                                মাসিক সঞ্চয় জমা
                            </p>
                        </div>

                        <p className="font-semibold text-green-700">
                            + ৳ ৩,০০০
                        </p>

                    </div>

                    <div className="flex items-center justify-between border-b pb-4">

                        <div>
                            <p className="font-medium">
                                মোঃ সাইফুল ইসলাম
                            </p>

                            <p className="text-xs text-gray-500">
                                মাসিক সঞ্চয় জমা
                            </p>
                        </div>

                        <p className="font-semibold text-green-700">
                            + ৳ ৫,০০০
                        </p>

                    </div>

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="font-medium">
                                মোঃ আরিফুল ইসলাম
                            </p>

                            <p className="text-xs text-gray-500">
                                নতুন সদস্য হিসেবে যোগদান
                            </p>
                        </div>

                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                            নতুন সদস্য
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}