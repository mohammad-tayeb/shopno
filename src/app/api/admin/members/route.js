import dbConnect, {
    collectionNameObj,
} from "@/app/lib/dbConnect";

import { NextResponse } from "next/server";

export async function GET() {
    try {
        const membersCollection = await dbConnect(
            collectionNameObj.memberCollection
        );

        const members = await membersCollection
            .find({})
            .sort({ createdAt: -1 })
            .toArray();

        const formattedMembers = members.map((member) => ({
            ...member,
            _id: member._id.toString(),
        }));

        return NextResponse.json(formattedMembers);
    } catch (error) {
        console.error("Members API Error:", error);

        return NextResponse.json(
            {
                message: "সদস্যদের তথ্য লোড করা যায়নি",
                error: error.message,
            },
            {
                status: 500,
            }
        );
    }
}