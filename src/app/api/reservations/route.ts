import { NextResponse } from "next/server";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      date,
      time,
      guests,
      notes,
      website,
    }: Record<string, unknown> = body;

    if (website) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof phone !== "string" ||
      typeof date !== "string" ||
      typeof time !== "string" ||
      typeof guests !== "number"
    ) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    if (!emailRegex.test(email) || guests < 1 || guests > 12) {
      return NextResponse.json(
        { error: "Please provide valid reservation details." },
        { status: 400 },
      );
    }

    const reservation = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      date,
      time,
      guests,
      notes: typeof notes === "string" ? notes.trim() : "",
      createdAt: new Date().toISOString(),
    };

    console.log("[RESERVATION_REQUEST]", reservation);

    return NextResponse.json({
      ok: true,
      message:
        "Reservation request received. Our team will confirm your table shortly.",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to submit reservation right now." },
      { status: 500 },
    );
  }
}
