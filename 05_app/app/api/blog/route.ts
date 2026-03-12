import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const articles = await sql`
      SELECT * FROM blog_articles 
      ORDER BY display_order ASC, created_at DESC
    `
    return NextResponse.json(articles)
  } catch (error) {
    console.error("Failed to read blog data:", error)
    return NextResponse.json({ 
      error: "Failed to read blog data",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const newArticle = await request.json()
    console.log("Adding new article:", newArticle)
    
    // 現在の最大display_orderを取得
    const maxOrder = await sql`
      SELECT COALESCE(MAX(display_order), -1) as max_order FROM blog_articles
    `
    const displayOrder = (maxOrder[0]?.max_order ?? -1) + 1
    
    const result = await sql`
      INSERT INTO blog_articles (
        id, note_url, title, description, thumbnail, category, published_at, featured, display_order
      ) VALUES (
        ${newArticle.id},
        ${newArticle.noteUrl},
        ${newArticle.title},
        ${newArticle.description || ''},
        ${newArticle.thumbnail || ''},
        ${newArticle.category || ''},
        ${newArticle.publishedAt || ''},
        ${newArticle.featured || false},
        ${displayOrder}
      )
      RETURNING *
    `
    
    console.log("Article added successfully")
    return NextResponse.json({ success: true, article: result[0] })
  } catch (error) {
    console.error("Failed to add article:", error)
    return NextResponse.json({ 
      error: "Failed to add article",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedArticle = await request.json()
    console.log("Updating article:", updatedArticle)
    
    const result = await sql`
      UPDATE blog_articles SET
        note_url = ${updatedArticle.noteUrl},
        title = ${updatedArticle.title},
        description = ${updatedArticle.description || ''},
        thumbnail = ${updatedArticle.thumbnail || ''},
        category = ${updatedArticle.category || ''},
        published_at = ${updatedArticle.publishedAt || ''},
        featured = ${updatedArticle.featured || false},
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ${updatedArticle.id}
      RETURNING *
    `
    
    if (result.length === 0) {
      console.error("Article not found:", updatedArticle.id)
      return NextResponse.json({ error: "Article not found" }, { status: 404 })
    }
    
    console.log("Article updated successfully")
    return NextResponse.json({ success: true, article: result[0] })
  } catch (error) {
    console.error("Failed to update article:", error)
    return NextResponse.json({ 
      error: "Failed to update article",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    
    if (!id) {
      return NextResponse.json({ error: "Article ID is required" }, { status: 400 })
    }
    
    await sql`DELETE FROM blog_articles WHERE id = ${id}`
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to delete article:", error)
    return NextResponse.json({ 
      error: "Failed to delete article",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}
