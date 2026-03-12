import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const dataFilePath = path.join(process.cwd(), "data", "blog-articles.json")

async function readBlogData() {
  const fileContent = await fs.readFile(dataFilePath, "utf-8")
  return JSON.parse(fileContent)
}

async function writeBlogData(data: any) {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), "utf-8")
}

export async function GET() {
  try {
    const data = await readBlogData()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: "Failed to read blog data" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const newArticle = await request.json()
    const data = await readBlogData()
    
    data.articles.push(newArticle)
    await writeBlogData(data)
    
    return NextResponse.json({ success: true, article: newArticle })
  } catch (error) {
    return NextResponse.json({ error: "Failed to add article" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedArticle = await request.json()
    const data = await readBlogData()
    
    const index = data.articles.findIndex((a: any) => a.id === updatedArticle.id)
    if (index === -1) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 })
    }
    
    data.articles[index] = updatedArticle
    await writeBlogData(data)
    
    return NextResponse.json({ success: true, article: updatedArticle })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update article" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    
    if (!id) {
      return NextResponse.json({ error: "Article ID is required" }, { status: 400 })
    }
    
    const data = await readBlogData()
    data.articles = data.articles.filter((a: any) => a.id !== id)
    await writeBlogData(data)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete article" }, { status: 500 })
  }
}
