import { NextResponse } from "next/server";
import { productDatabase } from "@/data/db";

export async function GET() {
  return NextResponse.json(productDatabase);
}
