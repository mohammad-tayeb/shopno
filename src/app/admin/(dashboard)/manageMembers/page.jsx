"use client";

import { useQuery } from "@tanstack/react-query";

async function getMembers() {
    const response = await fetch("/api/admin/members");

    if (!response.ok) {
        throw new Error("সদস্যদের তথ্য লোড করা যায়নি");
    }

    return response.json();
}

export default function ManageMembers() {
    const {
        data: members = [],
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["members"],
        queryFn: getMembers,
    });

    if (isLoading) {
        return <div>Loading members...</div>;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    return (
        <div className="p-6">
            <h1 className="mb-6 text-2xl font-bold">
                সদস্য তালিকা
            </h1>

            <div className="overflow-x-auto rounded-lg bg-white shadow">
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-4 text-left">নাম</th>
                            <th className="p-4 text-left">ইমেইল</th>
                            <th className="p-4 text-left">ফোন</th>
                            <th className="p-4 text-left">সদস্য ID</th>
                            <th className="p-4 text-left">স্ট্যাটাস</th>
                            <th className="p-4 text-left">
                                মাসিক সঞ্চয়
                            </th>
                            <th className="p-4 text-left">
                                মোট সঞ্চয়
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {members.map((member) => (
                            <tr
                                key={member._id}
                                className="border-t"
                            >
                                <td className="p-4">
                                    {member.name}
                                </td>

                                <td className="p-4">
                                    {member.email}
                                </td>

                                <td className="p-4">
                                    {member.phone}
                                </td>

                                <td className="p-4">
                                    {member.memberId}
                                </td>

                                <td className="p-4">
                                    {member.status}
                                </td>

                                <td className="p-4">
                                    ৳ {member.monthlySavings}
                                </td>

                                <td className="p-4">
                                    ৳ {member.totalSavings}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}