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

### 3. データベースとストレージのセットアップ

#### Neon Postgresの作成

1. [Vercelダッシュボード](https://vercel.com/dashboard)にログイン
2. プロジェクトを選択
3. **Storage** タブをクリック
4. **Create Database** → **Neon Postgres** を選択
5. データベース名を入力して作成
6. **Connection String** をコピーして`.env.local`の`DATABASE_URL`に設定

#### Vercel Blob Storageの作成

1. Vercelダッシュボードのプロジェクトで **Storage** タブをクリック
2. **Create Database** → **Blob** を選択
3. ストレージ名を入力して作成
4. **Read-Write Token** が自動的に環境変数 `BLOB_READ_WRITE_TOKEN` に追加されます
5. ローカル開発の場合は、`.env.local` にトークンをコピーしてください

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
   - `BLOB_READ_WRITE_TOKEN`: Vercel Blob Storageから自動設定済み
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
- **Storage**: Vercel Blob Storage
- **Deployment**: Vercel

## コンテンツ管理

### 管理者画面へのアクセス

1. サイトの右上にある人型アイコンをクリック
2. 管理者ログインページで認証情報を入力
3. ダッシュボードから各コンテンツを管理

### ブログ記事の登録

1. 管理者ダッシュボードから「ブログ記事管理」を選択
2. 「新規記事を追加」ボタンをクリック
3. 以下の情報を入力：
   - **noteのURL**: note記事のURL（必須）
   - **タイトル**: 記事のタイトル
   - **説明**: 記事の概要（カードに表示されます）
   - **サムネイルURL**: 記事のサムネイル画像URL（任意）
   - **カテゴリ**: 記事のカテゴリ（例：AI技術、ビジネス活用など）
   - **公開日**: 記事の公開日
   - **注目記事**: チェックを入れると「注目」バッジが表示されます
4. 「追加」ボタンをクリックして保存
5. 登録した記事は即座にブログページにカード形式で表示されます

### セミナー情報の登録

1. 管理者ダッシュボードから「セミナー管理」を選択
2. セミナー番号、タイトル、動画URL、概要を入力
3. YouTubeのURLを入力すると、サムネイルが自動的に取得されます

### 実績情報の登録

1. 管理者ダッシュボードから「実績管理」を選択
2. 塾生名、肩書き、実績内容を入力
3. 「画像をアップロード」ボタンから画像ファイルを選択（自動的にVercel Blob Storageに保存されます）
4. 複数の実績項目を追加できます

**画像について**:
- 推奨サイズ: 1200px × 600px（アスペクト比 2:1）
- 最大ファイルサイズ: 5MB
- 対応形式: JPG、PNG、WebP

## ライセンス

© 2025 AI実践起業塾. All rights reserved.
