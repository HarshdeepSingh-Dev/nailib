import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    // Call your backend's login endpoint
    const backendRes = await axios.post(
      `${process.env.BACKEND_URL}/auth/signin`,
      { email, password },
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
