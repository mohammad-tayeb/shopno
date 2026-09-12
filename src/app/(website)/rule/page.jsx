import {
    FiCheckCircle,
    FiClock,
    FiDollarSign,
    FiUsers,
    FiShield,
    FiAlertCircle,
    FiFileText,
    FiArrowRight,
} from "react-icons/fi";

export const metadata = {
    title: "নিয়মাবলী | স্বপ্ন",
    description: "স্বপ্ন আর্থিক সমিতির নিয়মাবলী",
};

export default function RulesPage() {
    const rules = [
        {
            number: "০১",
            icon: FiUsers,
            title: "সদস্য হওয়ার নিয়ম",
            rules: [
                "সমিতির নির্ধারিত নিয়ম মেনে সদস্য হতে হবে।",
                "সকল সদস্যকে সঠিক এবং প্রয়োজনীয় তথ্য প্রদান করতে হবে।",
                "সমিতির সকল সদস্যের প্রতি সম্মানজনক আচরণ করতে হবে।",
            ],
        },
        {
            number: "০২",
            icon: FiDollarSign,
            title: "মাসিক সঞ্চয়ের নিয়ম",
            rules: [
                "প্রত্যেক সদস্যকে নির্ধারিত সময়ের মধ্যে মাসিক জমা প্রদান করতে হবে।",
                "মাসের ১ তারিখ থেকে ১০ তারিখের মধ্যে জমা প্রদান করার অনুরোধ করা হয়।",
                "জমা দেওয়ার পর হিসাব সঠিকভাবে যাচাই করা উচিত।",
            ],
        },
        {
            number: "০৩",
            icon: FiClock,
            title: "সময়মতো জমা প্রদান",
            rules: [
                "নির্ধারিত সময়ের মধ্যে জমা প্রদান করা সকল সদস্যের দায়িত্ব।",
                "বিশেষ কোনো সমস্যার কারণে জমা দিতে না পারলে কর্তৃপক্ষকে জানাতে হবে।",
                "বিলম্বিত জমার ক্ষেত্রে সমিতির সিদ্ধান্ত অনুযায়ী ব্যবস্থা নেওয়া হতে পারে।",
            ],
        },
        {
            number: "০৪",
            icon: FiShield,
            title: "হিসাবের স্বচ্ছতা",
            rules: [
                "সমিতির সকল আর্থিক কার্যক্রম স্বচ্ছভাবে পরিচালিত হবে।",
                "প্রত্যেক সদস্য তার ব্যক্তিগত হিসাব দেখার সুযোগ পাবেন।",
                "কোনো হিসাব সংক্রান্ত সমস্যায় দ্রুত কর্তৃপক্ষের সাথে যোগাযোগ করতে হবে।",
            ],
        },
        {
            number: "০৫",
            icon: FiFileText,
            title: "ঋণ ও আর্থিক সহায়তা",
            rules: [
                "সমিতির নিয়ম অনুযায়ী সদস্যরা আর্থিক সহায়তার জন্য আবেদন করতে পারবেন।",
                "ঋণের পরিমাণ এবং শর্ত সমিতির সিদ্ধান্ত অনুযায়ী নির্ধারিত হবে।",
                "নির্ধারিত সময় অনুযায়ী ঋণের অর্থ পরিশোধ করতে হবে।",
            ],
        },
        {
            number: "০৬",
            icon: FiUsers,
            title: "সদস্যদের দায়িত্ব",
            rules: [
                "সমিতির নিয়ম ও সিদ্ধান্ত মেনে চলতে হবে।",
                "অন্যান্য সদস্যদের সাথে সৌহার্দ্যপূর্ণ সম্পর্ক বজায় রাখতে হবে।",
                "সমিতির উন্নয়নে সক্রিয়ভাবে সহযোগিতা করতে হবে।",
            ],
        },
    ];

    return (
        <main className="max-w-6xl mx-auto mt-16">

            {/* Introduction */}
            <section className="mx-auto max-w-6xl px-6 py-12 md:py-20">

                <div className="mx-auto max-w-3xl text-center">

                    <p className="font-semibold text-green-700">
                        আমাদের নীতিমালা
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-[#163d35] md:text-4xl">
                        সবার জন্য একটি সুন্দর ও সুশৃঙ্খল ব্যবস্থা
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        আমাদের সমিতির প্রতিটি সদস্যের সুবিধা এবং নিরাপত্তার
                        কথা বিবেচনা করে এই নিয়মাবলী তৈরি করা হয়েছে।
                        আমরা বিশ্বাস করি, সকলের সহযোগিতা এবং নিয়ম মেনে চলার
                        মাধ্যমেই একটি শক্তিশালী আর্থিক পরিবার গড়ে তোলা সম্ভব।
                    </p>

                </div>


                {/* Rules Grid */}
                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {rules.map((rule) => {
                        const Icon = rule.icon;

                        return (
                            <div
                                key={rule.number}
                                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                {/* Rule Number */}
                                <span className="absolute right-6 top-5 text-5xl font-bold text-green-50 transition group-hover:text-green-100">
                                    {rule.number}
                                </span>

                                {/* Icon */}
                                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-2xl text-green-700 transition group-hover:bg-green-700 group-hover:text-white">
                                    <Icon />
                                </div>

                                <h3 className="relative mt-6 text-xl font-bold text-[#163d35]">
                                    {rule.title}
                                </h3>

                                <ul className="relative mt-5 space-y-3">

                                    {rule.rules.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                                        >
                                            <FiCheckCircle className="mt-1 shrink-0 text-green-600" />

                                            <span>{item}</span>
                                        </li>
                                    ))}

                                </ul>

                            </div>
                        );
                    })}

                </div>


                {/* Agreement Section */}
                <section className="mt-16 rounded-3xl bg-[#063d32] px-6 py-12 text-center md:px-12 md:py-16">

                    <div className="mx-auto max-w-3xl">

                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-3xl">
                            🤝
                        </div>

                        <h2 className="mt-6 text-3xl font-bold text-white">
                            একসাথে এগিয়ে চলুন
                        </h2>

                        <p className="mt-4 leading-8 text-gray-300">
                            আমাদের প্রত্যেকের দায়িত্বশীলতা এবং সহযোগিতাই
                            স্বপ্ন আর্থিক সমিতিকে আরও শক্তিশালী এবং
                            সফল করে তুলবে।
                        </p>

                        <div className="mx-auto mt-6 h-px w-24 bg-green-400/50" />

                        <p className="mt-6 font-semibold text-green-300">
                            🌱 একসাথে সঞ্চয় করি • একসাথে এগিয়ে যাই
                        </p>

                    </div>

                </section>

            </section>
        </main>
    );
}