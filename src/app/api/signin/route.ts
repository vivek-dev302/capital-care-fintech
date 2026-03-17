import { getDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { phone, password } = await req.json();

    if (!phone || !password) {
      return NextResponse.json(
        { error: "Phone and password are required" },
        { status: 400 }
      );
    }

    const db = await getDB();

    const [rows] = await db.query(
      "SELECT id, name, phone, password FROM users WHERE phone = ?",
      [phone]
    ) as [Array<{ id: number; name: string; phone: string; password: string }>, unknown];

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Invalid phone number or password" },
        { status: 401 }
      );
    }

    const user = rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Invalid phone number or password" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: "Signed in successfully",
      user: { id: user.id, name: user.name, phone: user.phone },
    });
  } catch (error) {
    console.error("[signin]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
