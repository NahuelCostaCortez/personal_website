import { NextResponse } from "next/server"
import { getAllServices } from "@/lib/services-data"

export async function GET() {
  try {
    const services = getAllServices()
    return NextResponse.json({ services })
  } catch (error) {
    console.error("Error fetching services:", error)
    return NextResponse.json({ services: [] }, { status: 500 })
  }
}
