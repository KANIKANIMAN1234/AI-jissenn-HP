import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const dataFilePath = path.join(process.cwd(), "data", "seminars.json")

async function readSeminarData() {
  const fileContent = await fs.readFile(dataFilePath, "utf-8")
  return JSON.parse(fileContent)
}

async function writeSeminarData(data: any) {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), "utf-8")
}

export async function GET() {
  try {
    const data = await readSeminarData()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: "Failed to read seminar data" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const newSeminar = await request.json()
    const data = await readSeminarData()
    
    data.seminars.push(newSeminar)
    await writeSeminarData(data)
    
    return NextResponse.json({ success: true, seminar: newSeminar })
  } catch (error) {
    return NextResponse.json({ error: "Failed to add seminar" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedSeminar = await request.json()
    const data = await readSeminarData()
    
    const index = data.seminars.findIndex((s: any) => s.id === updatedSeminar.id)
    if (index === -1) {
      return NextResponse.json({ error: "Seminar not found" }, { status: 404 })
    }
    
    data.seminars[index] = updatedSeminar
    await writeSeminarData(data)
    
    return NextResponse.json({ success: true, seminar: updatedSeminar })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update seminar" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    
    if (!id) {
      return NextResponse.json({ error: "Seminar ID is required" }, { status: 400 })
    }
    
    const data = await readSeminarData()
    data.seminars = data.seminars.filter((s: any) => s.id !== id)
    await writeSeminarData(data)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete seminar" }, { status: 500 })
  }
}
