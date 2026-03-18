import { put } from '@vercel/blob'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST(request: NextRequest) {
  try {
    console.log('Upload API called')
    
    // 環境変数チェック
    const token = process.env.BLOB_READ_WRITE_TOKEN
    console.log('BLOB_READ_WRITE_TOKEN exists:', !!token)
    
    if (!token) {
      console.error('BLOB_READ_WRITE_TOKEN is not set')
      return NextResponse.json(
        { 
          error: 'Blob Storageが設定されていません',
          details: 'BLOB_READ_WRITE_TOKEN環境変数を設定してください。Vercelダッシュボードの Storage > Blob から作成してください。'
        },
        { status: 500 }
      )
    }

    const formData = await request.formData()
    const file = formData.get('file') as File
    
    console.log('File received:', file?.name, 'Size:', file?.size)
    
    if (!file) {
      return NextResponse.json(
        { error: 'ファイルが選択されていません' },
        { status: 400 }
      )
    }

    // ファイルサイズチェック (5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'ファイルサイズは5MB以下にしてください' },
        { status: 400 }
      )
    }

    // ファイル名をユニークにする
    const timestamp = Date.now()
    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_')
    const fileName = `success/${timestamp}-${sanitizedFileName}`
    
    console.log('Uploading file:', fileName)

    const blob = await put(fileName, file, {
      token: token,
    })

    console.log('Upload successful:', blob.url)
    return NextResponse.json({ url: blob.url })
  } catch (error) {
    console.error('Upload error:', error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    const errorStack = error instanceof Error ? error.stack : undefined
    
    console.error('Error details:', {
      message: errorMessage,
      stack: errorStack,
    })
    
    return NextResponse.json(
      { 
        error: 'アップロードに失敗しました',
        details: errorMessage,
        stack: errorStack
      },
      { status: 500 }
    )
  }
}
