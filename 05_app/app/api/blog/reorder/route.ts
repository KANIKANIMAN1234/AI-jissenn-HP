import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { articles } = await request.json()
    
    // 各記事のdisplay_orderを更新
    for (let i = 0; i < articles.length; i++) {
      await sql`
        UPDATE blog_articles 
        SET display_order = ${i}
        WHERE id = ${articles[i].id}
      `
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to reorder articles:", error)
    return NextResponse.json({ 
      error: "Failed to reorder articles",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}
