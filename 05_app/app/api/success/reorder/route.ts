import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const dataFilePath = path.join(process.cwd(), "data", "success-stories.json")

export async function POST(request: NextRequest) {
  try {
    const { stories } = await request.json()
    
    const fileContent = await fs.readFile(dataFilePath, "utf-8")
    const data = JSON.parse(fileContent)
    
    data.stories = stories
    
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), "utf-8")
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to reorder stories" }, { status: 500 })
  }
}
