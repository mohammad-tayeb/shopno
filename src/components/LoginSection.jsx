import {
    FiUser,
    FiLock,
    FiSettings,
    FiEye,
} from "react-icons/fi";

export default function LoginSection() {
    return (
        <section className="grid gap-6 py-8 md:grid-cols-2 sm:mx-10 mx-2">

            {/* Member Login */}
            <div className="rounded-xl border border-green-100 bg-gradient-to-br from-[#f0faf4] to-[#ffffff] p-7 shadow-sm">

                <div className="mb-6 text-center">
                    <FiUser className="mx-auto text-4xl text-green-600" />

                    <h2 className="mt-2 text-2xl font-bold text-[#163d35]">
                        সদস্য লগইন
                    </h2>

                    <p className="text-sm text-gray-500">
                        আপনার হিসাব দেখতে এখানে লগইন করুন
                    </p>
                </div>

                <form className="space-y-4">

                    <div className="relative">
                        <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                            type="text"
                            placeholder="আপনার সদস্য আইডি দিন"
                            className="w-full rounded-lg border border-gray-200 py-3 pl-12 pr-4 outline-none transition focus:border-green-500"
                        />
                    </div>

                    <div className="relative">
                        <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                            type="password"
                            placeholder="আপনার পাসওয়ার্ড দিন"
                            className="w-full rounded-lg border border-gray-200 py-3 pl-12 pr-12 outline-none transition focus:border-green-500"
                        />

                        <FiEye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>

                    <button
                        type="button"
                        className="text-sm text-green-700 hover:underline"
                    >
                        পাসওয়ার্ড ভুলে গেছেন?
                    </button>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-[#08633f] py-3 font-semibold text-white transition hover:bg-[#074f33]"
                    >
                        লগইন করুন
                    </button>

                </form>
            </div>

            {/* Admin Login */}
            <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-[#f3f7ff] to-white p-7 shadow-sm">

                <div className="mb-6 text-center">
                    <FiSettings className="mx-auto text-4xl text-blue-600" />

                    <h2 className="mt-2 text-2xl font-bold text-[#163d35]">
                        অ্যাডমিন লগইন
                    </h2>

                    <p className="text-sm text-gray-500">
                        শুধুমাত্র অ্যাডমিনের জন্য
                    </p>
                </div>

                <form className="space-y-4">

                    <div className="relative">
                        <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                            type="text"
                            placeholder="অ্যাডমিন আইডি দিন"
                            className="w-full rounded-lg border border-gray-200 py-3 pl-12 pr-4 outline-none transition focus:border-blue-500"
                        />
                    </div>

                    <div className="relative">
                        <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                        <input
                            type="password"
                            placeholder="পাসওয়ার্ড দিন"
                            className="w-full rounded-lg border border-gray-200 py-3 pl-12 pr-12 outline-none transition focus:border-blue-500"
                        />

                        <FiEye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>

                    <button
                        type="button"
                        className="text-sm text-blue-700 hover:underline"
                    >
                        পাসওয়ার্ড ভুলে গেছেন?
                    </button>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-[#125785] py-3 font-semibold text-white transition hover:bg-[#0d456b]"
                    >
                        লগইন করুন
                    </button>
                </form>
            </div>

        </section>
    );
}