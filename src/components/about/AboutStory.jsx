import {
    FiUsers,
    FiShield,
    FiTrendingUp,
} from "react-icons/fi";

export default function AboutStory() {
    return (
        <section className="grid gap-10 px-4 py-12 sm:px-6 md:gap-12 md:py-16 lg:grid-cols-2 lg:px-8">

            {/* Left Side */}
            <div>
                <p className="text-sm font-semibold text-green-700 sm:text-base">
                    আমাদের পরিচয়
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-[#163d35] sm:text-4xl md:text-5xl">
                    একসাথে সঞ্চয় করি,
                    <br />
                    একসাথে গড়ি
                    <span className="text-green-700">
                        {" "}সুন্দর ভবিষ্যৎ।
                    </span>
                </h2>

                <div className="mt-6 space-y-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">

                    <p>
                        স্বপ্ন (সাতকানিয়া-লোহাগড়া) একটি আর্থিক সমিতি,
                        যেখানে সদস্যদের পারস্পরিক সহযোগিতা এবং নিয়মিত
                        সঞ্চয়ের মাধ্যমে একটি শক্তিশালী আর্থিক ভবিষ্যৎ
                        গড়ে তোলার চেষ্টা করা হয়।
                    </p>

                    <p>
                        আমাদের মূল উদ্দেশ্য হলো সদস্যদের মধ্যে সঞ্চয়ের
                        অভ্যাস তৈরি করা এবং প্রয়োজনের সময় পারস্পরিক
                        সহযোগিতার মাধ্যমে আর্থিক সহায়তা প্রদান করা।
                    </p>

                    <p>
                        আমরা স্বচ্ছতা, বিশ্বাস এবং দায়িত্বশীলতার মাধ্যমে
                        একটি সুন্দর ও নিরাপদ আর্থিক পরিবেশ তৈরি করতে চাই।
                    </p>

                </div>

                {/* Small Features */}
                <div className="mt-8 grid grid-cols-1 gap-4 min-[480px]:grid-cols-3">

                    <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm min-[480px]:block">
                        <FiUsers className="shrink-0 text-2xl text-green-600" />

                        <p className="font-semibold text-[#163d35] min-[480px]:mt-3">
                            একতা
                        </p>
                    </div>

                    <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm min-[480px]:block">
                        <FiShield className="shrink-0 text-2xl text-green-600" />

                        <p className="font-semibold text-[#163d35] min-[480px]:mt-3">
                            নিরাপত্তা
                        </p>
                    </div>

                    <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm min-[480px]:block">
                        <FiTrendingUp className="shrink-0 text-2xl text-green-600" />

                        <p className="font-semibold text-[#163d35] min-[480px]:mt-3">
                            উন্নয়ন
                        </p>
                    </div>

                </div>
            </div>

            {/* Right Side */}
            <div className="relative">

                <div className="rounded-2xl bg-gradient-to-br from-[#0b5c47] to-[#063d32] p-6 sm:rounded-3xl sm:p-8 md:p-12">

                    <div className="text-center">

                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-4xl sm:h-24 sm:w-24 sm:text-5xl md:h-28 md:w-28 md:text-6xl">
                            🌱
                        </div>

                        <h3 className="mt-6 text-2xl font-bold text-white sm:mt-8 sm:text-3xl">
                            স্বপ্ন
                        </h3>

                        <p className="mt-2 text-sm text-green-200 sm:text-base">
                            (সাতকানিয়া-লোহাগড়া)
                        </p>

                        <div className="mx-auto my-5 h-px w-20 bg-green-400/50 sm:my-6 sm:w-24" />

                        <p className="text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
                            ছোট ছোট সঞ্চয় থেকেই শুরু হয়
                            <br className="hidden sm:block" />
                            {" "}বড় একটি স্বপ্নের যাত্রা।
                        </p>

                    </div>

                </div>

                {/* Floating Card */}
                <div className="relative mx-auto -mt-6 w-[90%] rounded-xl bg-white p-5 text-center shadow-xl sm:-mt-8 sm:w-[85%] sm:rounded-2xl sm:p-6">

                    <p className="text-xs text-gray-500 sm:text-sm">
                        আমাদের মূল বিশ্বাস
                    </p>

                    <h4 className="mt-2 text-lg font-bold leading-relaxed text-[#163d35] sm:text-xl">
                        বিশ্বাস • সহযোগিতা • সমৃদ্ধি
                    </h4>

                </div>

            </div>
        </section>
    );
}