import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { stories } = await request.json()
    
    // 各実績のdisplay_orderを更新
    for (let i = 0; i < stories.length; i++) {
      await sql`
        UPDATE success_stories 
        SET display_order = ${i}
        WHERE id = ${stories[i].id}
      `
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to reorder stories:", error)
    return NextResponse.json({ 
      error: "Failed to reorder stories",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}
