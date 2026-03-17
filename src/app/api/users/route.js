import { getDB } from "@/lib/db";

export async function GET() {
  try {
    const db = await getDB();
    const [rows] = await db.query("SELECT id, name, phone, created_at FROM users");
    return Response.json(rows);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Error fetching users" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { name, phone, password } = await req.json();

    if (!name || !phone || !password) {
      return Response.json({ error: "name, phone, and password are required" }, { status: 400 });
    }

    const db = await getDB();
    await db.query(
      "INSERT INTO users (name, phone, password) VALUES (?, ?, ?)",
      [name, phone, password]
    );

    return Response.json({ message: "User added successfully" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Error inserting user" }, { status: 500 });
  }
}
