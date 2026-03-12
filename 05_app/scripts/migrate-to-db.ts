/**
 * JSONファイルからNeon Postgresへのデータ移行スクリプト
 * 
 * 使用方法:
 * 1. DATABASE_URL環境変数を設定
 * 2. npm run migrate または npx tsx scripts/migrate-to-db.ts を実行
 */

import { neon } from '@neondatabase/serverless'
import * as fs from 'fs'
import * as path from 'path'

const DATABASE_URL = process.env.DATABASE_URL

if (!DATABASE_URL) {
  console.error('❌ DATABASE_URL環境変数が設定されていません')
  process.exit(1)
}

const sql = neon(DATABASE_URL)

async function migrateSeminars() {
  console.log('\n📚 セミナーデータを移行中...')
  
  const filePath = path.join(process.cwd(), 'data', 'seminars.json')
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  
  for (let i = 0; i < data.seminars.length; i++) {
    const seminar = data.seminars[i]
    try {
      await sql`
        INSERT INTO seminars (
          id, number, title, video_url, description, thumbnail, display_order
        ) VALUES (
          ${seminar.id},
          ${seminar.number || 0},
          ${seminar.title},
          ${seminar.videoUrl || ''},
          ${seminar.description || ''},
          ${seminar.thumbnail || ''},
          ${i}
        )
        ON CONFLICT (id) DO UPDATE SET
          number = EXCLUDED.number,
          title = EXCLUDED.title,
          video_url = EXCLUDED.video_url,
          description = EXCLUDED.description,
          thumbnail = EXCLUDED.thumbnail,
          display_order = EXCLUDED.display_order
      `
      console.log(`  ✓ セミナー ${i + 1}/${data.seminars.length}: ${seminar.title}`)
    } catch (error) {
      console.error(`  ✗ セミナー ${seminar.title} の移行に失敗:`, error)
    }
  }
  
  console.log(`✅ ${data.seminars.length}件のセミナーを移行しました`)
}

async function migrateBlogArticles() {
  console.log('\n📝 ブログ記事データを移行中...')
  
  const filePath = path.join(process.cwd(), 'data', 'blog-articles.json')
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  
  for (let i = 0; i < data.articles.length; i++) {
    const article = data.articles[i]
    try {
      await sql`
        INSERT INTO blog_articles (
          id, note_url, title, description, thumbnail, category, published_at, featured, display_order
        ) VALUES (
          ${article.id},
          ${article.noteUrl},
          ${article.title},
          ${article.description || ''},
          ${article.thumbnail || ''},
          ${article.category || ''},
          ${article.publishedAt || ''},
          ${article.featured || false},
          ${i}
        )
        ON CONFLICT (id) DO UPDATE SET
          note_url = EXCLUDED.note_url,
          title = EXCLUDED.title,
          description = EXCLUDED.description,
          thumbnail = EXCLUDED.thumbnail,
          category = EXCLUDED.category,
          published_at = EXCLUDED.published_at,
          featured = EXCLUDED.featured,
          display_order = EXCLUDED.display_order
      `
      console.log(`  ✓ 記事 ${i + 1}/${data.articles.length}: ${article.title}`)
    } catch (error) {
      console.error(`  ✗ 記事 ${article.title} の移行に失敗:`, error)
    }
  }
  
  console.log(`✅ ${data.articles.length}件のブログ記事を移行しました`)
}

async function migrateSuccessStories() {
  console.log('\n🏆 実績データを移行中...')
  
  const filePath = path.join(process.cwd(), 'data', 'success-stories.json')
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  
  for (let i = 0; i < data.stories.length; i++) {
    const story = data.stories[i]
    try {
      await sql`
        INSERT INTO success_stories (
          id, icon, name, role, featured, title, description, achievements, quote, display_order
        ) VALUES (
          ${story.id},
          ${story.icon || 'Trophy'},
          ${story.name},
          ${story.role},
          ${story.featured || false},
          ${story.title},
          ${story.description},
          ${JSON.stringify(story.achievements || [])}::jsonb,
          ${story.quote || ''},
          ${i}
        )
        ON CONFLICT (id) DO UPDATE SET
          icon = EXCLUDED.icon,
          name = EXCLUDED.name,
          role = EXCLUDED.role,
          featured = EXCLUDED.featured,
          title = EXCLUDED.title,
          description = EXCLUDED.description,
          achievements = EXCLUDED.achievements,
          quote = EXCLUDED.quote,
          display_order = EXCLUDED.display_order
      `
      console.log(`  ✓ 実績 ${i + 1}/${data.stories.length}: ${story.name}`)
    } catch (error) {
      console.error(`  ✗ 実績 ${story.name} の移行に失敗:`, error)
    }
  }
  
  console.log(`✅ ${data.stories.length}件の実績を移行しました`)
}

async function main() {
  console.log('🚀 データ移行を開始します...')
  console.log(`📊 データベース: ${DATABASE_URL.split('@')[1]?.split('?')[0] || 'unknown'}`)
  
  try {
    await migrateSeminars()
    await migrateBlogArticles()
    await migrateSuccessStories()
    
    console.log('\n✨ すべてのデータ移行が完了しました！')
  } catch (error) {
    console.error('\n❌ データ移行中にエラーが発生しました:', error)
    process.exit(1)
  }
}

main()
