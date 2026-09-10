import { FiBell } from "react-icons/fi";

export default function Notice() {
    return (
        <section className="my-8 sm:mx-10 mx-0">
            <div className="flex flex-col items-start justify-between gap-5 rounded-xl border border-green-100 bg-gradient-to-r from-[#eef6ed] to-[#f6faf5] p-5 md:flex-row md:items-center">

                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-xl text-yellow-600">
                        <FiBell />
                    </div>

                    <div>
                        <h3 className="font-bold text-[#163d35]">
                            গুরুত্বপূর্ণ নোটিশ
                        </h3>

                        <p className="mt-1 text-sm text-gray-600">
                            প্রতি মাসের ১ থেকে ১০ তারিখের মধ্যে জমা প্রদান করার
                            জন্য সকল সদস্যদের অনুরোধ করা হলো।
                        </p>
                    </div>
                </div>

                <button className="rounded-lg bg-[#063d32] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#075441]">
                    সব নোটিশ দেখুন
                </button>

            </div>
        </section>
    );
}