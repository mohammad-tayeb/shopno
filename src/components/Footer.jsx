import Image from "next/image";
import Link from "next/link";
import {
    FiMapPin,
    FiPhone,
    FiMail,
    FiFacebook,
    FiCalendar,
} from "react-icons/fi";

export default function Footer() {
    return (
        <footer id="contact" className="mt-10 bg-[#063d32] text-white">

            <div className="mx-auto max-w-7xl px-4 py-12 ms-6 me-6">

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

                    {/* About */}
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white sm:h-14 sm:w-14">
                                <Image
                                    src="/2.png"
                                    alt="স্বপ্ন লোগো"
                                    width={56}
                                    height={56}
                                    className="h-full w-full object-contain p-1"
                                />
                            </div>

                            <div>
                                <h3 className="font-bold">
                                    স্বপ্ন
                                </h3>

                                <p className="text-sm text-gray-300">
                                    একটি আর্থিক সমিতি
                                </p>
                            </div>
                        </div>

                        <p className="mt-5 leading-7 text-gray-300">
                            আমরা একসাথে সঞ্চয় করি, একসাথে এগিয়ে যাই,
                            একসাথে গড়ি সুন্দর ভবিষ্যৎ।
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold">
                            লিংক
                        </h3>

                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <Link href="/about" className="transition hover:text-white">
                                    আমাদের সম্পর্কে
                                </Link>
                            </li>

                            <li>
                                <Link href="/rule" className="transition hover:text-white">
                                    নিয়মাবলী
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold">
                            যোগাযোগ
                        </h3>

                        <div className="space-y-3 text-gray-300">
                            <p className="flex gap-3">
                                <FiMapPin />
                                সাতকানিয়া-লোহাগড়া, চট্টগ্রাম
                            </p>

                            <p className="flex gap-3">
                                <FiPhone />
                                ০১৮০০-০০০০০
                            </p>

                            <p className="flex gap-3">
                                <FiMail />
                                shopno.somity@gmail.com
                            </p>

                            <p className="flex gap-3">
                                <FiFacebook />
                                স্বপ্ন আর্থিক সমিতি
                            </p>
                        </div>
                    </div>


                </div>

                {/* Bottom */}
                <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-300 md:flex-row">
                    <p>
                        © ২০২৬ স্বপ্ন (সাতকানিয়া-লোহাগড়া) একটি আর্থিক সমিতি।
                        সর্বস্বত্ব সংরক্ষিত।
                    </p>
                </div>

            </div>
        </footer>
    );
}