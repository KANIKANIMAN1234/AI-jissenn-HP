import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const stories = await sql`
      SELECT * FROM success_stories 
      ORDER BY display_order ASC, created_at DESC
    `
    
    // JSONBフィールドをパース
    const parsedStories = stories.map(story => ({
      ...story,
      achievements: typeof story.achievements === 'string' 
        ? JSON.parse(story.achievements) 
        : story.achievements
    }))
    
    return NextResponse.json({ stories: parsedStories })
  } catch (error) {
    console.error("Failed to read success data:", error)
    return NextResponse.json({ 
      error: "Failed to read success data",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const newStory = await request.json()
    console.log("Adding new story:", newStory)
    
    // 現在の最大display_orderを取得
    const maxOrder = await sql`
      SELECT COALESCE(MAX(display_order), -1) as max_order FROM success_stories
    `
    const displayOrder = (maxOrder[0]?.max_order ?? -1) + 1
    
    const result = await sql`
      INSERT INTO success_stories (
        id, icon, name, role, featured, title, title_url, description, achievements, quote, image_url, display_order
      ) VALUES (
        ${newStory.id},
        ${newStory.icon || 'Trophy'},
        ${newStory.name},
        ${newStory.role},
        ${newStory.featured || false},
        ${newStory.title},
        ${newStory.title_url || ''},
        ${newStory.description},
        ${JSON.stringify(newStory.achievements || [])}::jsonb,
        ${newStory.quote || ''},
        ${newStory.image_url || ''},
        ${displayOrder}
      )
      RETURNING *
    `
    
    console.log("Story added successfully")
    return NextResponse.json({ success: true, story: result[0] })
  } catch (error) {
    console.error("Failed to add story:", error)
    return NextResponse.json({ 
      error: "Failed to add story",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedStory = await request.json()
    console.log("Updating story:", updatedStory)
    
    const result = await sql`
      UPDATE success_stories SET
        icon = ${updatedStory.icon || 'Trophy'},
        name = ${updatedStory.name},
        role = ${updatedStory.role},
        featured = ${updatedStory.featured || false},
        title = ${updatedStory.title},
        title_url = ${updatedStory.title_url || ''},
        description = ${updatedStory.description},
        achievements = ${JSON.stringify(updatedStory.achievements || [])}::jsonb,
        quote = ${updatedStory.quote || ''},
        image_url = ${updatedStory.image_url || ''},
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ${updatedStory.id}
      RETURNING *
    `
    
    if (result.length === 0) {
      console.error("Story not found:", updatedStory.id)
      return NextResponse.json({ error: "Story not found" }, { status: 404 })
    }
    
    console.log("Story updated successfully")
    return NextResponse.json({ success: true, story: result[0] })
  } catch (error) {
    console.error("Failed to update story:", error)
    return NextResponse.json({ 
      error: "Failed to update story",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    
    if (!id) {
      return NextResponse.json({ error: "Story ID is required" }, { status: 400 })
    }
    
    await sql`DELETE FROM success_stories WHERE id = ${id}`
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to delete story:", error)
    return NextResponse.json({ 
      error: "Failed to delete story",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}
