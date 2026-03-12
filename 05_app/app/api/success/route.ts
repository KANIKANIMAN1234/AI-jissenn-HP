import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const dataFilePath = path.join(process.cwd(), "data", "success-stories.json")

async function readSuccessData() {
  const fileContent = await fs.readFile(dataFilePath, "utf-8")
  return JSON.parse(fileContent)
}

async function writeSuccessData(data: any) {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), "utf-8")
}

export async function GET() {
  try {
    const data = await readSuccessData()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: "Failed to read success data" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const newStory = await request.json()
    const data = await readSuccessData()
    
    data.stories.push(newStory)
    await writeSuccessData(data)
    
    return NextResponse.json({ success: true, story: newStory })
  } catch (error) {
    return NextResponse.json({ error: "Failed to add story" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedStory = await request.json()
    const data = await readSuccessData()
    
    const index = data.stories.findIndex((s: any) => s.id === updatedStory.id)
    if (index === -1) {
      return NextResponse.json({ error: "Story not found" }, { status: 404 })
    }
    
    data.stories[index] = updatedStory
    await writeSuccessData(data)
    
    return NextResponse.json({ success: true, story: updatedStory })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update story" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    
    if (!id) {
      return NextResponse.json({ error: "Story ID is required" }, { status: 400 })
    }
    
    const data = await readSuccessData()
    data.stories = data.stories.filter((s: any) => s.id !== id)
    await writeSuccessData(data)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete story" }, { status: 500 })
  }
}
