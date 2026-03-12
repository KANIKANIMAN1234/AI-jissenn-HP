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

#### NEXTAUTH_URL
開発環境では`http://localhost:3000`のままでOKです。

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 管理者機能

### 管理者ログイン

ヘッダー右上のユーザーアイコンをクリックするか、直接 `/admin/login` にアクセスしてログインできます。

- ログインURL: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
- ダッシュボード: [http://localhost:3000/admin/dashboard](http://localhost:3000/admin/dashboard)

### ブログ記事の管理

`data/blog-articles.json` を編集してブログ記事を追加・編集できます。

## Vercelへのデプロイ

### 環境変数の設定

Vercelダッシュボードで以下の環境変数を設定してください：

1. **Settings** → **Environment Variables** に移動
2. 以下の変数を追加：
   - `AUTH_SECRET`: ランダムな文字列
   - `ADMIN_USERNAME`: 管理者のユーザー名
   - `ADMIN_PASSWORD`: 管理者のパスワード
   - `NEXTAUTH_URL`: 本番環境のURL（例: `https://ai-jissenn-hp.vercel.app`）

### デプロイ設定

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
│   │   └── dashboard/     # ダッシュボード
│   ├── api/               # APIルート
│   │   └── auth/          # NextAuth.js認証API
│   ├── (pages)/           # 各ページ
│   └── layout.tsx         # ルートレイアウト
├── components/            # Reactコンポーネント
├── data/                  # データファイル
│   └── blog-articles.json # ブログ記事データ
├── public/                # 静的ファイル
└── auth.ts                # NextAuth.js設定
```

## 技術スタック

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Authentication**: NextAuth.js v5
- **Deployment**: Vercel

## ライセンス

© 2025 AI実践起業塾. All rights reserved.
