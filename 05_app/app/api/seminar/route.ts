import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const seminars = await sql`
      SELECT * FROM seminars 
      ORDER BY display_order ASC, created_at DESC
    `
    return NextResponse.json({ seminars })
  } catch (error) {
    console.error("Failed to read seminar data:", error)
    return NextResponse.json({ 
      error: "Failed to read seminar data",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const newSeminar = await request.json()
    console.log("Adding new seminar:", newSeminar)
    
    // 現在の最大display_orderを取得
    const maxOrder = await sql`
      SELECT COALESCE(MAX(display_order), -1) as max_order FROM seminars
    `
    const displayOrder = (maxOrder[0]?.max_order ?? -1) + 1
    
    const result = await sql`
      INSERT INTO seminars (
        id, number, title, video_url, description, thumbnail, display_order
      ) VALUES (
        ${newSeminar.id},
        ${newSeminar.number || 0},
        ${newSeminar.title},
        ${newSeminar.videoUrl || ''},
        ${newSeminar.description || ''},
        ${newSeminar.thumbnail || ''},
        ${displayOrder}
      )
      RETURNING *
    `
    
    console.log("Seminar added successfully")
    return NextResponse.json({ success: true, seminar: result[0] })
  } catch (error) {
    console.error("Failed to add seminar:", error)
    return NextResponse.json({ 
      error: "Failed to add seminar", 
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedSeminar = await request.json()
    console.log("Updating seminar:", updatedSeminar)
    
    const result = await sql`
      UPDATE seminars SET
        number = ${updatedSeminar.number || 0},
        title = ${updatedSeminar.title},
        video_url = ${updatedSeminar.videoUrl || ''},
        description = ${updatedSeminar.description || ''},
        thumbnail = ${updatedSeminar.thumbnail || ''},
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ${updatedSeminar.id}
      RETURNING *
    `
    
    if (result.length === 0) {
      console.error("Seminar not found:", updatedSeminar.id)
      return NextResponse.json({ error: "Seminar not found" }, { status: 404 })
    }
    
    console.log("Seminar updated successfully")
    return NextResponse.json({ success: true, seminar: result[0] })
  } catch (error) {
    console.error("Failed to update seminar:", error)
    return NextResponse.json({ 
      error: "Failed to update seminar",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    
    if (!id) {
      return NextResponse.json({ error: "Seminar ID is required" }, { status: 400 })
    }
    
    await sql`DELETE FROM seminars WHERE id = ${id}`
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to delete seminar:", error)
    return NextResponse.json({ 
      error: "Failed to delete seminar",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}
