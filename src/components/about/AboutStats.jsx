import {
    FiUsers,
    FiDollarSign,
    FiTrendingUp,
    FiAward,
} from "react-icons/fi";

const stats = [
    {
        icon: FiUsers,
        value: "১৪+",
        title: "সক্রিয় সদস্য",
    },
    {
        icon: FiDollarSign,
        value: "৳ ২ লাখ+",
        title: "মোট তহবিল",
    },
    {
        icon: FiTrendingUp,
        value: "১০০%",
        title: "স্বচ্ছ হিসাব",
    },
    {
        icon: FiAward,
        value: "১টি",
        title: "একটি শক্তিশালী পরিবার",
    },
];

export default function AboutStats() {
    return (
        <section className="my-16 rounded-3xl bg-[#063d32] p-8 md:my-24 md:p-6">

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 grid-cols-2">

                {stats.map((stat, index) => {
                    const Icon = stat.icon;

                    return (
                        <div
                            key={index}
                            className="text-center"
                        >
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-2xl text-green-300">
                                <Icon />
                            </div>

                            <h3 className="mt-4 sm:text-2xl text-xl font-bold text-white">
                                {stat.value}
                            </h3>

                            <p className="mt-2 text-sm text-gray-300">
                                {stat.title}
                            </p>
                        </div>
                    );
                })}

            </div>
        </section>
    );
}