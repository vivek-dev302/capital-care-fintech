import { getDB } from "@/libs/db";

// GET - fetch all users
export async function GET() {
  try {
    const db = await getDB();
    const [rows] = await db.query("SELECT * FROM users");
    return Response.json(rows);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Error fetching users" }, { status: 500 });
  }
}

// POST - insert a new user
export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return Response.json({ error: "name, email, and password are required" }, { status: 400 });
    }

    const db = await getDB();
    await db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, password]
    );

    return Response.json({ message: "User added successfully" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Error inserting user" }, { status: 500 });
  }
}
