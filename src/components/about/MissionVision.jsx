import {
    FiTarget,
    FiEye,
} from "react-icons/fi";

export default function MissionVision() {
    return (
        <section className="py-8 sm:py-12">

            {/* Heading */}
            <div className="mx-auto mb-8 max-w-2xl px-4 text-center sm:mb-12 sm:px-6">

                <p className="text-sm font-semibold text-green-700 sm:text-base">
                    আমাদের লক্ষ্য
                </p>

                <h2 className="mt-3 text-2xl font-bold leading-tight text-[#163d35] sm:text-3xl md:text-4xl">
                    আমাদের উদ্দেশ্য ও ভবিষ্যৎ পরিকল্পনা
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                    আমরা শুধু সঞ্চয়ের কথা বলি না, আমরা সদস্যদের
                    একটি নিরাপদ এবং সমৃদ্ধ ভবিষ্যতের জন্য কাজ করি।
                </p>

            </div>

            <div className="grid gap-5 px-4 sm:gap-6 sm:px-6 md:grid-cols-2">

                {/* Mission */}
                <div className="group rounded-2xl border border-green-100 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl text-green-700 sm:h-16 sm:w-16 sm:rounded-2xl sm:text-3xl">
                        <FiTarget />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-[#163d35] sm:mt-6 sm:text-2xl">
                        আমাদের উদ্দেশ্য
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:mt-4 sm:text-base sm:leading-8">
                        সদস্যদের মধ্যে নিয়মিত সঞ্চয়ের অভ্যাস তৈরি করা,
                        আর্থিক সচেতনতা বৃদ্ধি করা এবং প্রয়োজনের সময়
                        পারস্পরিক সহযোগিতার মাধ্যমে আর্থিক সহায়তা
                        প্রদান করা।
                    </p>

                    <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-600 sm:mt-6 sm:text-base">

                        <li className="flex items-start gap-3">
                            <span className="mt-0.5 shrink-0 text-green-600">
                                ✓
                            </span>
                            <span>
                                নিয়মিত সঞ্চয়ে উৎসাহ প্রদান
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-0.5 shrink-0 text-green-600">
                                ✓
                            </span>
                            <span>
                                সদস্যদের আর্থিক নিরাপত্তা নিশ্চিত করা
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-0.5 shrink-0 text-green-600">
                                ✓
                            </span>
                            <span>
                                পারস্পরিক সহযোগিতা বৃদ্ধি করা
                            </span>
                        </li>

                    </ul>

                </div>

                {/* Vision */}
                <div className="rounded-2xl border border-blue-100 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-700 sm:h-16 sm:w-16 sm:rounded-2xl sm:text-3xl">
                        <FiEye />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-[#163d35] sm:mt-6 sm:text-2xl">
                        আমাদের ভবিষ্যৎ স্বপ্ন
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:mt-4 sm:text-base sm:leading-8">
                        একটি শক্তিশালী, স্বচ্ছ এবং বিশ্বাসযোগ্য আর্থিক
                        সম্প্রদায় তৈরি করা যেখানে প্রতিটি সদস্য
                        নিরাপদভাবে সঞ্চয় করতে এবং উন্নতির পথে এগিয়ে
                        যেতে পারে।
                    </p>

                    <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-600 sm:mt-6 sm:text-base">

                        <li className="flex items-start gap-3">
                            <span className="mt-0.5 shrink-0 text-blue-600">
                                ✓
                            </span>
                            <span>
                                একটি শক্তিশালী আর্থিক সম্প্রদায়
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-0.5 shrink-0 text-blue-600">
                                ✓
                            </span>
                            <span>
                                সম্পূর্ণ ডিজিটাল হিসাব ব্যবস্থা
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-0.5 shrink-0 text-blue-600">
                                ✓
                            </span>
                            <span>
                                সদস্যদের উন্নত ভবিষ্যৎ
                            </span>
                        </li>

                    </ul>

                </div>

            </div>
            <section className="px-4 py-10 sm:px-6 sm:py-16">
                {/* Quote */}
                <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#eaf5ee] to-[#f7faf8] px-5 py-8 text-center sm:mt-16 sm:rounded-3xl sm:px-6 sm:py-12">

                    <p className="text-3xl leading-none text-green-700 sm:text-4xl">
                        “
                    </p>

                    <h3 className="mx-auto mt-2 max-w-3xl text-xl font-bold leading-8 text-[#163d35] sm:mt-3 sm:text-2xl sm:leading-relaxed md:text-3xl">
                        একসাথে সঞ্চয় করি, একসাথে এগিয়ে যাই,
                        <br className="hidden sm:block" />
                        একসাথে গড়ি সুন্দর ভবিষ্যৎ।
                    </h3>

                    <p className="mt-4 text-sm font-semibold text-green-700 sm:mt-5 sm:text-base">
                        — স্বপ্ন (সাতকানিয়া-লোহাগড়া)
                    </p>

                </div>
            </section>
        </section>
    );
}