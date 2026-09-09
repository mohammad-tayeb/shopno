export default function Hero() {
    return (
        <section
            id="home"
            className="
                relative overflow-hidden
                min-h-[600px]
                sm:min-h-[520px]
                md:min-h-[600px]
            "
        >
            {/* ================= DESKTOP ================= */}
            <div className="absolute inset-0 hidden sm:block">
                <img
                    src="/hero-large.png"
                    alt="স্বপ্ন"
                    className="h-full w-full object-cover object-center"
                />

                <div
                    className="
                        absolute inset-0
                        bg-gradient-to-r
                        from-white/95
                        via-white/60
                        to-transparent
                    "
                />
            </div>

            {/* ================= MOBILE ================= */}
            <div className="absolute inset-0 sm:hidden">
                <img
                    src="/hero-small.png"
                    alt="স্বপ্ন"
                    className="
                        absolute inset-0
                        h-full w-full
                        object-cover
                        object-[65%_center]
                    "
                />

                {/* Professional mobile overlay */}
                <div
                    className="
                        absolute inset-0
                        bg-gradient-to-r
                        from-white
                        via-white/90
                        via-55%
                        to-white/25
                    "
                />

                {/* Bottom fade */}
                <div
                    className="
                        absolute inset-x-0 bottom-0 h-32
                        bg-gradient-to-t
                        from-white/40
                        to-transparent
                    "
                />
            </div>

            {/* ================= CONTENT ================= */}
            <div
                className="
                    relative mx-auto
                    flex max-w-7xl items-center
                    min-h-[600px]
                    px-5
                    sm:min-h-[520px] sm:px-6
                    md:min-h-[600px] md:px-8
                "
            >
                <div
                    className="
                        w-full max-w-xl
                        text-left
                        md:ms-10
                    "
                >
                    {/* Small label */}
                    <div
                        className="
                            mb-4 flex items-center gap-2
                            text-sm font-semibold
                            tracking-wide text-green-800
                            sm:mb-5
                        "
                    >
                        <span className="h-[2px] w-7 bg-green-700" />
                        <span>একটি আর্থিক সমিতি</span>
                    </div>

                    {/* Main title */}
                    <h1
                        className="
                            text-5xl font-bold
                            leading-[1.05]
                            tracking-tight
                            text-[#063d32]
                            sm:text-6xl
                            md:text-8xl
                        "
                    >
                        স্বপ্ন
                    </h1>

                    {/* Location */}
                    <h2
                        className="
                            mt-2
                            text-xl font-bold
                            text-[#173d35]
                            sm:text-2xl
                            md:text-3xl
                        "
                    >
                        (সাতকানিয়া-লোহাগড়া)
                    </h2>

                    {/* Description */}
                    <p
                        className="
                            mt-5
                            max-w-[500px]
                            text-[15px]
                            leading-7
                            text-gray-700
                            sm:mt-6
                            sm:text-base
                            sm:leading-8
                        "
                    >
                        আমাদের লক্ষ্য হলো সদস্যদের উন্নত করা, সদস্যদের
                        আর্থিক নিরাপত্তা নিশ্চিত করা এবং পারস্পরিক
                        সহযোগিতার মাধ্যমে একটি সুন্দর ভবিষ্যৎ গড়ে তোলা।
                    </p>

                    {/* Quote */}
                    <div
                        className="
                            mt-6
                            border-l-[3px]
                            border-green-700
                            pl-4
                            sm:mt-7
                        "
                    >
                        <p
                            className="
                                text-base
                                font-semibold
                                leading-7
                                text-green-800
                                sm:text-lg
                            "
                        >
                            ❝ সঞ্চয় করুন, নিরাপদ থাকুন,
                            সমৃদ্ধ ভবিষ্যৎ গড়ুন ❞
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}