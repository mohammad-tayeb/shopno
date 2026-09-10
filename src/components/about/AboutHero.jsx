import { FiHome } from "react-icons/fi";
import Link from "next/link";

export default function AboutHero() {
    return (
        <section className="relative overflow-hidden bg-[#063d32]">
            {/* Background decoration */}
            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />

            <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-green-400/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 py-16 text-center md:py-24">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-green-300/30 bg-white/10 text-3xl">
                    🌱
                </div>

                <p className="mt-6 text-sm font-medium text-green-300">
                    আমাদের সম্পর্কে জানুন
                </p>

                <h1 className="mt-3 text-4xl font-bold text-white md:text-6xl">
                    আমাদের সম্পর্কে
                </h1>

                <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-300">
                    আমরা বিশ্বাস করি একসাথে সঞ্চয়, সহযোগিতা এবং পরিকল্পনার
                    মাধ্যমে একটি নিরাপদ ও সমৃদ্ধ ভবিষ্যৎ গড়ে তোলা সম্ভব।
                </p>

                {/* Breadcrumb */}
                <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-300">
                    <FiHome />

                    <Link
                        href="/"
                        className="transition hover:text-green-300"
                    >
                        হোম
                    </Link>

                    <span>/</span>

                    <span className="text-green-300">
                        আমাদের সম্পর্কে
                    </span>
                </div>
            </div>
        </section>
    );
}