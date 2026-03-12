# AI実践起業塾 公式サイト

Next.js 16 + TypeScript + Tailwind CSSで構築されたAI実践起業塾の公式Webサイトです。

## 環境構築

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.example`をコピーして`.env.local`を作成してください：

```bash
cp .env.example .env.local
```

`.env.local`を編集して、以下の値を設定してください：

#### AUTH_SECRET（必須）
ランダムな文字列を生成します：

```bash
# Windowsの場合（PowerShell）
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }))

# Mac/Linuxの場合
openssl rand -base64 32
```

生成された文字列を`AUTH_SECRET`に設定してください。

#### 管理者アカウント
```env
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-secure-password-here
```

お好きなユーザー名とパスワードに変更してください。

#### DATABASE_URL（必須）
Neon Postgresのデータベース接続文字列を設定します。

```env
DATABASE_URL=postgresql://user:password@host/database?sslmode=require
```

詳細は後述の「データベースのセットアップ」を参照してください。

#### NEXTAUTH_URL
開発環境では`http://localhost:3000`のままでOKです。

### 3. データベースのセットアップ

#### Neon Postgresの作成

1. [Vercelダッシュボード](https://vercel.com/dashboard)にログイン
2. プロジェクトを選択
3. **Storage** タブをクリック
4. **Create Database** → **Neon Postgres** を選択
5. データベース名を入力して作成
6. **Connection String** をコピーして`.env.local`の`DATABASE_URL`に設定

#### データベーススキーマの作成

Neon SQLエディタまたはpsqlで以下のSQLを実行してください：

```bash
# db/schema.sqlの内容をコピーしてNeon SQLエディタで実行
```

または、Neonダッシュボードの**SQL Editor**で`db/schema.sql`の内容を実行してください。

#### 既存データの移行

JSONファイルからデータベースにデータを移行します：

```bash
npm run migrate
```

### 4. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 管理者機能

### 管理者ログイン

ヘッダー右上のユーザーアイコンをクリックするか、直接 `/admin/login` にアクセスしてログインできます。

- ログインURL: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
- ダッシュボード: [http://localhost:3000/admin/dashboard](http://localhost:3000/admin/dashboard)

### コンテンツ管理

管理者ダッシュボードから以下のコンテンツを管理できます：

- **ブログ記事管理**: note記事の追加・編集・削除・並び替え
- **実績管理**: 塾生の成功事例の追加・編集・削除・並び替え
- **セミナー管理**: セミナー情報の追加・編集・削除・並び替え

すべてのデータはNeon Postgresデータベースに保存されます。

## Vercelへのデプロイ

### 1. Neon Postgresの作成

1. Vercelダッシュボードでプロジェクトを選択
2. **Storage** タブ → **Create Database** → **Neon Postgres**
3. データベースを作成（自動的に`DATABASE_URL`が環境変数に追加されます）

### 2. データベーススキーマの作成

1. Neonダッシュボードの**SQL Editor**を開く
2. `db/schema.sql`の内容をコピー＆実行

### 3. データの移行

ローカル環境で以下を実行：

```bash
# Vercelの環境変数をローカルに取得
vercel env pull .env.local

# データ移行を実行
npm run migrate
```

### 4. 環境変数の設定

Vercelダッシュボードで以下の環境変数を確認・設定：

1. **Settings** → **Environment Variables** に移動
2. 以下の変数を確認・追加：
   - `DATABASE_URL`: Neon Postgresから自動設定済み
   - `AUTH_SECRET`: ランダムな文字列
   - `ADMIN_USERNAME`: 管理者のユーザー名
   - `ADMIN_PASSWORD`: 管理者のパスワード
   - `NEXTAUTH_URL`: 本番環境のURL（例: `https://ai-jissenn-hp.vercel.app`）

### 5. デプロイ設定

- **Root Directory**: `05_app`
- **Framework Preset**: Next.js
- **Build Command**: デフォルト（`next build`）
- **Output Directory**: デフォルト（`.next`）

## プロジェクト構造

```
05_app/
├── app/                    # Next.js App Router
│   ├── admin/             # 管理者ページ
│   │   ├── login/         # ログインページ
│   │   ├── dashboard/     # ダッシュボード
│   │   ├── blog/          # ブログ記事管理
│   │   ├── success/       # 実績管理
│   │   └── seminar/       # セミナー管理
│   ├── api/               # APIルート
│   │   ├── auth/          # NextAuth.js認証API
│   │   ├── blog/          # ブログAPI
│   │   ├── success/       # 実績API
│   │   └── seminar/       # セミナーAPI
│   ├── (pages)/           # 各ページ
│   └── layout.tsx         # ルートレイアウト
├── components/            # Reactコンポーネント
├── lib/                   # ライブラリ
│   └── db.ts              # データベース接続
├── db/                    # データベース
│   └── schema.sql         # スキーマ定義
├── scripts/               # スクリプト
│   └── migrate-to-db.ts   # データ移行スクリプト
├── data/                  # データファイル（移行元）
│   ├── blog-articles.json
│   ├── success-stories.json
│   └── seminars.json
├── public/                # 静的ファイル
└── auth.ts                # NextAuth.js設定
```

## 技術スタック

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Authentication**: NextAuth.js v5
- **Database**: Neon Postgres (Serverless)
- **Deployment**: Vercel

## ライセンス

© 2025 AI実践起業塾. All rights reserved.
