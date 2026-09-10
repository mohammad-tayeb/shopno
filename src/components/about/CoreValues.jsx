import {
    FiShield,
    FiHeart,
    FiUsers,
    FiCheckCircle,
} from "react-icons/fi";

const values = [
    {
        icon: FiShield,
        title: "বিশ্বাসযোগ্যতা",
        description:
            "সদস্যদের বিশ্বাস আমাদের সবচেয়ে বড় শক্তি।",
    },
    {
        icon: FiCheckCircle,
        title: "স্বচ্ছতা",
        description:
            "প্রতিটি হিসাব ও কার্যক্রম স্বচ্ছভাবে পরিচালিত হয়।",
    },
    {
        icon: FiHeart,
        title: "সহযোগিতা",
        description:
            "আমরা একে অপরের পাশে দাঁড়াতে বিশ্বাস করি।",
    },
    {
        icon: FiUsers,
        title: "একতা",
        description:
            "সকল সদস্য মিলে আমরা একটি শক্তিশালী পরিবার।",
    },
];

export default function CoreValues() {
    return (
        <section className="px-4 py-10 sm:px-6 sm:py-16">

            {/* Heading */}
            <div className="text-center">

                <p className="text-sm font-semibold text-green-700 sm:text-base">
                    আমাদের মূল্যবোধ
                </p>

                <h2 className="mt-3 text-2xl font-bold leading-tight text-[#163d35] sm:text-3xl md:text-4xl">
                    যে মূল্যবোধ আমাদের পরিচালিত করে
                </h2>

            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:mt-12 sm:gap-6 lg:grid-cols-4">

                {values.map((value, index) => {
                    const Icon = value.icon;

                    return (
                        <div
                            key={index}
                            className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 sm:hover:-translate-y-2"
                        >
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-2xl text-green-700 sm:h-16 sm:w-16 sm:text-3xl">
                                <Icon />
                            </div>

                            <h3 className="mt-4 text-lg font-bold text-[#163d35] sm:mt-5 sm:text-xl">
                                {value.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-500 sm:mt-3 sm:leading-7">
                                {value.description}
                            </p>
                        </div>
                    );
                })}

            </div>

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
    );
}