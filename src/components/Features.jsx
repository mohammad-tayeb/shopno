import {
    FiShield,
    FiDollarSign,
    FiUsers,
    FiBarChart2,
    FiLock,
} from "react-icons/fi";

const features = [
    {
        title: "নিরাপদ ও স্বচ্ছ হিসাব",
        description: "প্রত্যেক লেনদেন নিরাপদভাবে পরিচালিত",
        icon: FiShield,
    },
    {
        title: "নিয়মিত সঞ্চয়",
        description: "ছোট সঞ্চয়, বড় স্বপ্ন পূরণের হাতিয়ার",
        icon: FiDollarSign,
    },
    {
        title: "পারস্পরিক সহযোগিতা",
        description: "আপনার সহায়তায় আমাদের সম্মিলিত শক্তি",
        icon: FiUsers,
    },
    {
        title: "সহজ হিসাব দেখুন",
        description: "যেকোনো সময়ে হিসাব দেখুন সহজে",
        icon: FiBarChart2,
    },
    {
        title: "নিরাপদ লগইন",
        description: "আপনার তথ্য থাকবে সম্পূর্ণ নিরাপদ",
        icon: FiLock,
    },
];

export default function Features() {
    return (
        <section className="py-8 sm:mx-10 mx-6">

            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-[#163d35]">
                    আমাদের বৈশিষ্ট্য
                </h2>

                <div className="mx-auto mt-3 h-1 w-12 rounded bg-green-600" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 grid-cols-2">

                {features.map((feature, index) => {
                    const Icon = feature.icon;

                    return (
                        <div
                            key={index}
                            className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="mb-5 flex justify-center text-5xl text-[#13765c]">
                                <Icon />
                            </div>

                            <h3 className="font-bold text-[#173d35]">
                                {feature.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}

            </div>

        </section>
    );
}