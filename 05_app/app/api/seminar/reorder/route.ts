import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const dataFilePath = path.join(process.cwd(), "data", "seminars.json")

export async function POST(request: NextRequest) {
  try {
    const { seminars } = await request.json()
    
    const fileContent = await fs.readFile(dataFilePath, "utf-8")
    const data = JSON.parse(fileContent)
    
    data.seminars = seminars
    
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), "utf-8")
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to reorder seminars" }, { status: 500 })
  }
}
