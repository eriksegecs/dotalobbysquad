
import { NextResponse } from "next/server";

// Handles GET requests to /api
export async function GET(request: Request) {
  // ...
  return NextResponse.json({ message: "Hello World" });
}

// Handles POST requests to /api
export async function POST(request: Request) {
  // ...
  return NextResponse.json({ message: "Hello World" });
}
