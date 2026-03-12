import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { signOut } from "@/auth"
import { LogOut, FileText, Trophy, Settings } from "lucide-react"
import Link from "next/link"

export default async function AdminDashboardPage() {
  const session = await auth()

  if (!session) {
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen bg-muted">
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">管理者ダッシュボード</h1>
            <p className="text-sm text-muted-foreground">AI実践起業塾</p>
          </div>
          <form
            action={async () => {
              "use server"
              await signOut({ redirectTo: "/" })
            }}
          >
            <Button type="submit" variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              ログアウト
            </Button>
          </form>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            ようこそ、{session.user?.name}さん
          </h2>
          <p className="text-muted-foreground">管理機能にアクセスできます</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>ブログ記事管理</CardTitle>
                  <CardDescription>記事の追加・編集</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                note記事の追加・編集・削除、並び替えができます
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/admin/blog">
                  記事管理へ
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>実績管理</CardTitle>
                  <CardDescription>成功事例の管理</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                塾生の成功事例を追加・編集・削除、並び替えができます
              </p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/admin/success">
                  実績管理へ
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>サイト設定</CardTitle>
                  <CardDescription>サイト全体の設定</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                サイトの基本設定やコンテンツを管理できます
              </p>
              <Button variant="outline" size="sm" className="w-full" disabled>
                準備中
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 p-6 bg-card rounded-lg border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">クイックアクセス</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" asChild>
              <a href="/blog" target="_blank" rel="noopener noreferrer">
                ブログページを表示
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/" target="_blank" rel="noopener noreferrer">
                TOPページを表示
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
