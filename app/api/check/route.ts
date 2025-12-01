import { NextResponse } from "next/server";
import { riddles } from "../../lib/riddles";

export async function POST(req: Request) {
  try {
    const { id, answer } = await req.json();
    const r = riddles.find(r => r.id === id);
    if (!r) return NextResponse.json({ ok: false, error: "unknown" }, { status: 404 });

    const normalized = (answer || "").toString().trim().toUpperCase();
    const expected = r.code.trim().toUpperCase();

    return NextResponse.json({
      ok: normalized === expected,
      expected: normalized === expected ? null : expected,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "invalid-json" }, { status: 400 });
  }
}