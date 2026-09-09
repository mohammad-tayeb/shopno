import {
    FiUsers,
    FiDollarSign,
    FiTrendingUp,
    FiHeart,
} from "react-icons/fi";

const stats = [
    {
        title: "মোট সদস্য",
        value: "১৪ জন",
        subtitle: "আপনার আপনজনের মতো",
        icon: FiUsers,
        color: "bg-green-600",
    },
    {
        title: "মোট তহবিল",
        value: "৳ ২০৫,৫০০.০০",
        subtitle: "সর্বমোট তহবিল",
        icon: FiDollarSign,
        color: "bg-blue-500",
    },
    {
        title: "মোট জমা",
        value: "৳ ২৩০,৫০০.০০",
        subtitle: "সদস্যদের মোট জমা",
        icon: FiTrendingUp,
        color: "bg-purple-600",
    },
    {
        title: "ঋণ বিতরণ",
        value: "৳ ৮৫,০০০.০০",
        subtitle: "সদস্যদের জন্য ঋণ",
        icon: FiHeart,
        color: "bg-orange-500",
    },
];

export default function Statistics() {
    return (
        <section className="sm:mx-10 mx-2 relative z-10">
            <div className="grid overflow-hidden rounded-2xl bg-white shadow-xl md:grid-cols-4">

                {stats.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className="flex items-center gap-4 border-b border-gray-200 p-6 last:border-b-0 md:border-b-0 md:border-r"
                        >
                            <div
                                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-2xl text-white ${item.color}`}
                            >
                                <Icon />
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    {item.title}
                                </p>

                                <h3 className="text-xl font-bold text-gray-800">
                                    {item.value}
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