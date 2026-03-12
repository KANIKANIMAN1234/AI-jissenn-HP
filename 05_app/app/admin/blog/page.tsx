"use client"

import { auth } from "@/auth"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, GripVertical, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from "@dnd-kit/core"
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

interface BlogArticle {
  id: string
  noteUrl: string
  title: string
  description: string
  thumbnail: string
  category: string
  publishedAt: string
  featured: boolean
}

interface BlogData {
  articles: BlogArticle[]
  categories: string[]
}

function SortableArticleCard({ article, onEdit, onDelete }: { article: BlogArticle; onEdit: () => void; onDelete: () => void }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: article.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <div ref={setNodeRef} style={style} className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors">
      <div className="flex items-start gap-3">
        <button
          className="mt-1 cursor-grab active:cursor-grabbing text-muted-foreground hover:text-foreground"
          {...attributes}
          {...listeners}
        >
          <GripVertical className="h-5 w-5" />
        </button>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex-1">
              <h3 className="font-bold text-foreground mb-1 line-clamp-2">{article.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{article.description}</p>
            </div>
            {article.featured && (
              <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">注目</span>
            )}
          </div>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <span className="px-2 py-1 bg-muted rounded">{article.category}</span>
            <span>{article.publishedAt}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a href={article.noteUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3 mr-1" />
                noteで見る
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onEdit}
            >
              <Edit className="h-3 w-3 mr-1" />
              編集
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onDelete}
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="h-3 w-3 mr-1" />
              削除
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AdminBlogPage() {
  const [blogData, setBlogData] = useState<BlogData>({ articles: [], categories: [] })
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingArticle, setEditingArticle] = useState<BlogArticle | null>(null)
  const [formData, setFormData] = useState({
    noteUrl: "",
    title: "",
    description: "",
    category: "",
    publishedAt: "",
    featured: false,
  })

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  useEffect(() => {
    loadBlogData()
  }, [])

  const loadBlogData = async () => {
    try {
      const response = await fetch("/api/blog")
      const data = await response.json()
      setBlogData(data)
    } catch (error) {
      console.error("Failed to load blog data:", error)
    }
  }

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const oldIndex = blogData.articles.findIndex((item) => item.id === active.id)
      const newIndex = blogData.articles.findIndex((item) => item.id === over.id)

      const newArticles = arrayMove(blogData.articles, oldIndex, newIndex)
      setBlogData({ ...blogData, articles: newArticles })

      try {
        await fetch("/api/blog/reorder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ articles: newArticles }),
        })
      } catch (error) {
        console.error("Failed to reorder articles:", error)
        loadBlogData()
      }
    }
  }

  const handleAdd = async () => {
    try {
      const newArticle = {
        id: Date.now().toString(),
        ...formData,
        thumbnail: "/placeholder.svg",
      }

      await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newArticle),
      })

      setIsAddDialogOpen(false)
      setFormData({
        noteUrl: "",
        title: "",
        description: "",
        category: "",
        publishedAt: "",
        featured: false,
      })
      loadBlogData()
    } catch (error) {
      console.error("Failed to add article:", error)
    }
  }

  const handleEdit = async () => {
    if (!editingArticle) return

    try {
      await fetch("/api/blog", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...editingArticle, ...formData }),
      })

      setIsEditDialogOpen(false)
      setEditingArticle(null)
      setFormData({
        noteUrl: "",
        title: "",
        description: "",
        category: "",
        publishedAt: "",
        featured: false,
      })
      loadBlogData()
    } catch (error) {
      console.error("Failed to edit article:", error)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("この記事を削除してもよろしいですか？")) return

    try {
      await fetch(`/api/blog?id=${id}`, {
        method: "DELETE",
      })
      loadBlogData()
    } catch (error) {
      console.error("Failed to delete article:", error)
    }
  }

  const openEditDialog = (article: BlogArticle) => {
    setEditingArticle(article)
    setFormData({
      noteUrl: article.noteUrl,
      title: article.title,
      description: article.description,
      category: article.category,
      publishedAt: article.publishedAt,
      featured: article.featured,
    })
    setIsEditDialogOpen(true)
  }

  return (
    <div className="min-h-screen bg-muted">
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                ダッシュボードに戻る
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">ブログ記事管理</h1>
              <p className="text-sm text-muted-foreground">記事の追加・編集・並び替え</p>
            </div>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                新規記事追加
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>新規記事追加</DialogTitle>
                <DialogDescription>note記事の情報を入力してください</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="noteUrl">note記事URL *</Label>
                  <Input
                    id="noteUrl"
                    placeholder="https://note.com/..."
                    value={formData.noteUrl}
                    onChange={(e) => setFormData({ ...formData, noteUrl: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">タイトル *</Label>
                  <Input
                    id="title"
                    placeholder="記事のタイトル"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">説明 *</Label>
                  <Textarea
                    id="description"
                    placeholder="記事の説明"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">カテゴリー *</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="カテゴリーを選択" />
                    </SelectTrigger>
                    <SelectContent>
                      {blogData.categories.filter(cat => cat !== "すべて").map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="publishedAt">公開日 *</Label>
                  <Input
                    id="publishedAt"
                    type="date"
                    value={formData.publishedAt}
                    onChange={(e) => setFormData({ ...formData, publishedAt: e.target.value })}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <Label htmlFor="featured" className="cursor-pointer">注目記事として表示</Label>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  キャンセル
                </Button>
                <Button onClick={handleAdd}>
                  追加
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            記事をドラッグして並び替えることができます。変更は自動的に保存されます。
          </p>
        </div>

        {blogData.articles.length === 0 ? (
          <Card>
            <CardContent className="py-16 text-center">
              <p className="text-muted-foreground">まだ記事がありません</p>
              <p className="text-sm text-muted-foreground mt-2">「新規記事追加」ボタンから記事を追加してください</p>
            </CardContent>
          </Card>
        ) : (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={blogData.articles.map(a => a.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-4">
                {blogData.articles.map((article) => (
                  <SortableArticleCard
                    key={article.id}
                    article={article}
                    onEdit={() => openEditDialog(article)}
                    onDelete={() => handleDelete(article.id)}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        )}

        {/* Edit Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>記事を編集</DialogTitle>
              <DialogDescription>記事の情報を編集してください</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="edit-noteUrl">note記事URL *</Label>
                <Input
                  id="edit-noteUrl"
                  placeholder="https://note.com/..."
                  value={formData.noteUrl}
                  onChange={(e) => setFormData({ ...formData, noteUrl: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-title">タイトル *</Label>
                <Input
                  id="edit-title"
                  placeholder="記事のタイトル"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-description">説明 *</Label>
                <Textarea
                  id="edit-description"
                  placeholder="記事の説明"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-category">カテゴリー *</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="カテゴリーを選択" />
                  </SelectTrigger>
                  <SelectContent>
                    {blogData.categories.filter(cat => cat !== "すべて").map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-publishedAt">公開日 *</Label>
                <Input
                  id="edit-publishedAt"
                  type="date"
                  value={formData.publishedAt}
                  onChange={(e) => setFormData({ ...formData, publishedAt: e.target.value })}
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="edit-featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-4 h-4"
                />
                <Label htmlFor="edit-featured" className="cursor-pointer">注目記事として表示</Label>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                キャンセル
              </Button>
              <Button onClick={handleEdit}>
                保存
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  )
}
