import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { seminars } = await request.json()
    
    // 各セミナーのdisplay_orderを更新
    for (let i = 0; i < seminars.length; i++) {
      await sql`
        UPDATE seminars 
        SET display_order = ${i}
        WHERE id = ${seminars[i].id}
      `
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to reorder seminars:", error)
    return NextResponse.json({ 
      error: "Failed to reorder seminars",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}
