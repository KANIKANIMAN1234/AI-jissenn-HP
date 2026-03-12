-- AI実践起業塾 データベーススキーマ

-- セミナーテーブル
CREATE TABLE IF NOT EXISTS seminars (
  id TEXT PRIMARY KEY,
  number INTEGER NOT NULL DEFAULT 0,
  title TEXT NOT NULL,
  video_url TEXT DEFAULT '',
  description TEXT DEFAULT '',
  thumbnail TEXT DEFAULT '',
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ブログ記事テーブル
CREATE TABLE IF NOT EXISTS blog_articles (
  id TEXT PRIMARY KEY,
  note_url TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  thumbnail TEXT DEFAULT '',
  category TEXT DEFAULT '',
  published_at TEXT DEFAULT '',
  featured BOOLEAN DEFAULT FALSE,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 実績テーブル
CREATE TABLE IF NOT EXISTS success_stories (
  id TEXT PRIMARY KEY,
  icon TEXT NOT NULL DEFAULT 'Trophy',
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  featured BOOLEAN DEFAULT FALSE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  achievements JSONB DEFAULT '[]'::jsonb,
  quote TEXT DEFAULT '',
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- インデックスの作成
CREATE INDEX IF NOT EXISTS idx_seminars_display_order ON seminars(display_order);
CREATE INDEX IF NOT EXISTS idx_blog_articles_display_order ON blog_articles(display_order);
CREATE INDEX IF NOT EXISTS idx_blog_articles_featured ON blog_articles(featured);
CREATE INDEX IF NOT EXISTS idx_success_stories_display_order ON success_stories(display_order);
CREATE INDEX IF NOT EXISTS idx_success_stories_featured ON success_stories(featured);
