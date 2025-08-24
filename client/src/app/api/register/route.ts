import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
    try {
        const { name, email, password, confirmPassword } = await req.json();

        if (!name || !email || !password || !confirmPassword) {
            return NextResponse.json({ message: "Missing fields" }, { status: 400 });
        }

        console.log("in api>>>>>>>>>>", name, email, password, confirmPassword);

        const backendRes = await axios.post(
            `${process.env.BACKEND_URL}/auth/register`,
            { name, email, password, confirmPassword },
            { headers: { "Content-Type": "application/json" } }
        );

        return NextResponse.json(backendRes.data, { status: backendRes.status });
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Backend error:", error.response?.data);
            return NextResponse.json(
                error.response?.data || { message: "Backend error" },
                { status: error.response?.status || 500 }
            );
        }
        console.error("Unexpected error:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
