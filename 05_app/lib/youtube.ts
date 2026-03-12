/**
 * YouTube動画URLからビデオIDを抽出
 */
export function extractYouTubeId(url: string): string | null {
  if (!url) return null
  
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/,
  ]
  
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      return match[1]
    }
  }
  
  return null
}

/**
 * YouTube動画IDからサムネイルURLを生成
 */
export function getYouTubeThumbnail(videoUrl: string): string | null {
  const videoId = extractYouTubeId(videoUrl)
  if (!videoId) return null
  
  // 高画質サムネイル (maxresdefault) を優先
  // 存在しない場合は hqdefault にフォールバック
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
}

/**
 * サムネイルURLを取得（カスタムサムネイル優先、なければYouTubeから自動取得）
 */
export function getThumbnailUrl(customThumbnail: string | null | undefined, videoUrl: string | null | undefined): string | null {
  if (customThumbnail) return customThumbnail
  if (videoUrl) return getYouTubeThumbnail(videoUrl)
  return null
}
