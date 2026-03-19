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
 * Vimeo動画URLからビデオIDを抽出
 */
export function extractVimeoId(url: string): string | null {
  if (!url) return null
  
  const patterns = [
    /vimeo\.com\/(\d+)/,
    /player\.vimeo\.com\/video\/(\d+)/,
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
 * Vimeo動画IDからサムネイルURLを生成（Vimeo oEmbed API使用）
 * 注: この関数は同期的にプレースホルダーURLを返し、実際のサムネイルは別途取得が必要
 */
export function getVimeoThumbnail(videoUrl: string): string {
  const videoId = extractVimeoId(videoUrl)
  if (!videoId) return ''
  
  // Vimeo oEmbed APIを使用してサムネイルを取得
  // サーバーサイドで使用する場合は、APIから取得する必要があります
  return `https://vumbnail.com/${videoId}.jpg`
}

/**
 * 動画URLからプラットフォームを判定
 */
export function getVideoPlatform(videoUrl: string | null | undefined): 'youtube' | 'vimeo' | null {
  if (!videoUrl) return null
  
  if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
    return 'youtube'
  }
  if (videoUrl.includes('vimeo.com')) {
    return 'vimeo'
  }
  
  return null
}

/**
 * サムネイルURLを取得（カスタムサムネイル優先、なければ自動取得）
 */
export function getThumbnailUrl(customThumbnail: string | null | undefined, videoUrl: string | null | undefined): string | null {
  if (customThumbnail) return customThumbnail
  if (!videoUrl) return null
  
  const platform = getVideoPlatform(videoUrl)
  
  if (platform === 'youtube') {
    return getYouTubeThumbnail(videoUrl)
  }
  if (platform === 'vimeo') {
    return getVimeoThumbnail(videoUrl)
  }
  
  return null
}
