import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const url = searchParams.get('url')

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 })
  }

  try {
    // noteのURLからHTMLを取得
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch URL')
    }

    const html = await response.text()

    // OG:imageタグを抽出
    const ogImageMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i)
    const ogImage = ogImageMatch ? ogImageMatch[1] : null

    // OG:titleタグを抽出
    const ogTitleMatch = html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i)
    const ogTitle = ogTitleMatch ? ogTitleMatch[1] : null

    // OG:descriptionタグを抽出
    const ogDescriptionMatch = html.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i)
    const ogDescription = ogDescriptionMatch ? ogDescriptionMatch[1] : null

    return NextResponse.json({
      thumbnail: ogImage,
      title: ogTitle,
      description: ogDescription,
    })
  } catch (error) {
    console.error('Failed to fetch OG image:', error)
    return NextResponse.json(
      { error: 'Failed to fetch OG image' },
      { status: 500 }
    )
  }
}
