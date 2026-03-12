import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const dataFilePath = path.join(process.cwd(), "data", "blog-articles.json")

export async function POST(request: NextRequest) {
  try {
    const { articles } = await request.json()
    
    const fileContent = await fs.readFile(dataFilePath, "utf-8")
    const data = JSON.parse(fileContent)
    
    data.articles = articles
    
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), "utf-8")
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to reorder articles" }, { status: 500 })
  }
}
