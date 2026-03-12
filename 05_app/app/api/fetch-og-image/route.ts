import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const url = searchParams.get('url')

  console.log('Fetching OG data for URL:', url)

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 })
  }

  try {
    // noteのURLからHTMLを取得
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'ja,en-US;q=0.9,en;q=0.8',
      },
    })

    console.log('Fetch response status:', response.status)

    if (!response.ok) {
      throw new Error(`Failed to fetch URL: ${response.status} ${response.statusText}`)
    }

    const html = await response.text()
    console.log('HTML length:', html.length)

    // OG:imageタグを抽出（複数のパターンに対応、より柔軟に）
    const ogImageMatch = html.match(/<meta\s+(?:property|name)=["']og:image["']\s+content=["']([^"']+)["']/i) ||
                         html.match(/<meta\s+content=["']([^"']+)["']\s+(?:property|name)=["']og:image["']/i) ||
                         html.match(/property=["']og:image["'][^>]*content=["']([^"']+)["']/i) ||
                         html.match(/content=["']([^"']+)["'][^>]*property=["']og:image["']/i)
    const ogImage = ogImageMatch ? ogImageMatch[1].trim() : null

    // OG:titleタグを抽出
    const ogTitleMatch = html.match(/<meta\s+(?:property|name)=["']og:title["']\s+content=["']([^"']+)["']/i) ||
                         html.match(/<meta\s+content=["']([^"']+)["']\s+(?:property|name)=["']og:title["']/i) ||
                         html.match(/property=["']og:title["'][^>]*content=["']([^"']+)["']/i) ||
                         html.match(/content=["']([^"']+)["'][^>]*property=["']og:title["']/i)
    const ogTitle = ogTitleMatch ? ogTitleMatch[1].trim() : null

    // OG:descriptionタグを抽出
    const ogDescriptionMatch = html.match(/<meta\s+(?:property|name)=["']og:description["']\s+content=["']([^"']+)["']/i) ||
                               html.match(/<meta\s+content=["']([^"']+)["']\s+(?:property|name)=["']og:description["']/i) ||
                               html.match(/property=["']og:description["'][^>]*content=["']([^"']+)["']/i) ||
                               html.match(/content=["']([^"']+)["'][^>]*property=["']og:description["']/i)
    const ogDescription = ogDescriptionMatch ? ogDescriptionMatch[1].trim() : null

    console.log('Extracted OG data:', { ogImage, ogTitle, ogDescription })
    
    // デバッグ用：og:imageタグの周辺を出力
    if (!ogImage) {
      const ogImageSection = html.match(/<meta[^>]*og:image[^>]*>/gi)
      console.log('Found og:image tags:', ogImageSection)
    }

    return NextResponse.json({
      thumbnail: ogImage,
      title: ogTitle,
      description: ogDescription,
    })
  } catch (error) {
    console.error('Failed to fetch OG image:', error)
    return NextResponse.json(
      { 
        error: 'Failed to fetch OG image',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}
