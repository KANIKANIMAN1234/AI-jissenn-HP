"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash2, GripVertical, ArrowLeft, X, Upload, Image as ImageIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from "@dnd-kit/core"
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

interface SuccessStory {
  id: string
  icon: string
  name: string
  role: string
  featured: boolean
  title: string
  description: string
  achievements: string[]
  quote: string
  image_url?: string
}

interface SuccessData {
  stories: SuccessStory[]
  metrics: Array<{ value: string; label: string }>
}

function SortableStoryCard({ story, onEdit, onDelete }: { story: SuccessStory; onEdit: () => void; onDelete: () => void }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: story.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <div ref={setNodeRef} style={style} className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
      <div className="flex items-start gap-3">
        <button
          className="mt-1 cursor-grab active:cursor-grabbing text-muted-foreground hover:text-foreground"
          {...attributes}
          {...listeners}
        >
          <GripVertical className="h-5 w-5" />
        </button>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-3">
            <div>
              <h3 className="font-bold text-foreground text-lg mb-1">{story.name}</h3>
              <p className="text-sm text-primary font-medium">{story.role}</p>
            </div>
            {story.featured && (
              <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">Featured</span>
            )}
          </div>
          
          <h4 className="font-bold text-foreground mb-2">{story.title}</h4>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{story.description}</p>
          
          <div className="mb-3">
            <p className="text-xs font-semibold text-foreground mb-2">主な成果: {story.achievements.length}件</p>
          </div>
          
          <div className="flex items-center gap-2">
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

export default function AdminSuccessPage() {
  const [successData, setSuccessData] = useState<SuccessData>({ stories: [], metrics: [] })
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingStory, setEditingStory] = useState<SuccessStory | null>(null)
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState({
    icon: "Trophy",
    name: "",
    role: "",
    featured: false,
    title: "",
    description: "",
    achievements: [""],
    quote: "",
    image_url: "",
  })

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  useEffect(() => {
    loadSuccessData()
  }, [])

  const loadSuccessData = async () => {
    try {
      const response = await fetch("/api/success")
      const data = await response.json()
      setSuccessData(data)
    } catch (error) {
      console.error("Failed to load success data:", error)
    }
  }

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const oldIndex = successData.stories.findIndex((item) => item.id === active.id)
      const newIndex = successData.stories.findIndex((item) => item.id === over.id)

      const newStories = arrayMove(successData.stories, oldIndex, newIndex)
      setSuccessData({ ...successData, stories: newStories })

      try {
        await fetch("/api/success/reorder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ stories: newStories }),
        })
      } catch (error) {
        console.error("Failed to reorder stories:", error)
        loadSuccessData()
      }
    }
  }

  const handleAdd = async () => {
    try {
      const newStory = {
        id: Date.now().toString(),
        ...formData,
      }

      const response = await fetch("/api/success", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStory),
      })

      const result = await response.json()
      
      if (!response.ok) {
        console.error("Failed to add story:", result)
        alert(`実績の追加に失敗しました: ${result.error || result.details || '不明なエラー'}`)
        return
      }

      console.log("Story added successfully:", result)
      setIsAddDialogOpen(false)
      resetForm()
      loadSuccessData()
    } catch (error) {
      console.error("Failed to add story:", error)
      alert(`実績の追加に失敗しました: ${error instanceof Error ? error.message : '不明なエラー'}`)
    }
  }

  const handleEdit = async () => {
    if (!editingStory) return

    try {
      const response = await fetch("/api/success", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...editingStory, ...formData }),
      })

      const result = await response.json()
      
      if (!response.ok) {
        console.error("Failed to edit story:", result)
        alert(`実績の編集に失敗しました: ${result.error || result.details || '不明なエラー'}`)
        return
      }

      console.log("Story updated successfully:", result)
      setIsEditDialogOpen(false)
      setEditingStory(null)
      resetForm()
      loadSuccessData()
    } catch (error) {
      console.error("Failed to edit story:", error)
      alert(`実績の編集に失敗しました: ${error instanceof Error ? error.message : '不明なエラー'}`)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("この実績を削除してもよろしいですか？")) return

    try {
      await fetch(`/api/success?id=${id}`, {
        method: "DELETE",
      })
      loadSuccessData()
    } catch (error) {
      console.error("Failed to delete story:", error)
    }
  }

  const openEditDialog = (story: SuccessStory) => {
    setEditingStory(story)
    setFormData({
      icon: story.icon,
      name: story.name,
      role: story.role,
      featured: story.featured,
      title: story.title,
      description: story.description,
      achievements: story.achievements,
      quote: story.quote,
      image_url: story.image_url || "",
    })
    setIsEditDialogOpen(true)
  }

  const resetForm = () => {
    setFormData({
      icon: "Trophy",
      name: "",
      role: "",
      featured: false,
      title: "",
      description: "",
      achievements: [""],
      quote: "",
      image_url: "",
    })
  }

  const addAchievement = () => {
    setFormData(prev => ({ ...prev, achievements: [...prev.achievements, ""] }))
  }

  const updateAchievement = (index: number, value: string) => {
    setFormData(prev => {
      const newAchievements = [...prev.achievements]
      newAchievements[index] = value
      return { ...prev, achievements: newAchievements }
    })
  }

  const removeAchievement = (index: number) => {
    setFormData(prev => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index)
    }))
  }

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      alert('画像ファイルを選択してください')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('ファイルサイズは5MB以下にしてください')
      return
    }

    setUploading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('アップロードに失敗しました')
      }

      const data = await response.json()
      setFormData(prev => ({ ...prev, image_url: data.url }))
    } catch (error) {
      console.error('Upload error:', error)
      alert('画像のアップロードに失敗しました')
    } finally {
      setUploading(false)
    }
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
              <h1 className="text-2xl font-bold text-foreground">実績管理</h1>
              <p className="text-sm text-muted-foreground">成功事例の追加・編集・並び替え</p>
            </div>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                新規実績追加
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>新規実績追加</DialogTitle>
                <DialogDescription>成功事例の情報を入力してください</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="add-icon">アイコン *</Label>
                  <Select value={formData.icon} onValueChange={(value) => setFormData(prev => ({ ...prev, icon: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="アイコンを選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Trophy">トロフィー (Trophy)</SelectItem>
                      <SelectItem value="Briefcase">ブリーフケース (Briefcase)</SelectItem>
                      <SelectItem value="GraduationCap">卒業帽 (GraduationCap)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="add-name">名前 *</Label>
                  <Input
                    id="add-name"
                    placeholder="エレンさん"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="add-role">役職・肩書き *</Label>
                  <Input
                    id="add-role"
                    placeholder="元会社員 → 独立AIエンジニア"
                    value={formData.role}
                    onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="add-title">タイトル *</Label>
                  <Input
                    id="add-title"
                    placeholder="プログラミング経験ゼロから独立へ"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="add-description">説明 *</Label>
                  <Textarea
                    id="add-description"
                    placeholder="成功事例の詳細な説明"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label>主な成果 *</Label>
                  {formData.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input
                        placeholder={`成果 ${index + 1}`}
                        value={achievement}
                        onChange={(e) => updateAchievement(index, e.target.value)}
                      />
                      {formData.achievements.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeAchievement(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addAchievement}
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    成果を追加
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="add-image">画像（任意）</Label>
                  <div className="space-y-3">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploading}
                      className="w-full"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      {uploading ? 'アップロード中...' : '画像をアップロード'}
                    </Button>
                    {formData.image_url && (
                      <div className="relative w-full h-[200px] rounded-lg overflow-hidden bg-muted border border-border">
                        <Image
                          src={formData.image_url}
                          alt="プレビュー"
                          fill
                          className="object-cover"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2"
                          onClick={() => setFormData(prev => ({ ...prev, image_url: '' }))}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">推奨サイズ: 1200px × 600px（最大5MB）</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="add-quote">コメント（任意）</Label>
                  <Textarea
                    id="add-quote"
                    placeholder="本人のコメント"
                    value={formData.quote}
                    onChange={(e) => setFormData(prev => ({ ...prev, quote: e.target.value }))}
                    rows={3}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="add-featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                    className="w-4 h-4"
                  />
                  <Label htmlFor="add-featured" className="cursor-pointer">注目の実績として表示</Label>
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
            実績をドラッグして並び替えることができます。変更は自動的に保存されます。
          </p>
        </div>

        {successData.stories.length === 0 ? (
          <Card>
            <CardContent className="py-16 text-center">
              <p className="text-muted-foreground">まだ実績がありません</p>
              <p className="text-sm text-muted-foreground mt-2">「新規実績追加」ボタンから実績を追加してください</p>
            </CardContent>
          </Card>
        ) : (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={successData.stories.map(s => s.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-4">
                {successData.stories.map((story) => (
                  <SortableStoryCard
                    key={story.id}
                    story={story}
                    onEdit={() => openEditDialog(story)}
                    onDelete={() => handleDelete(story.id)}
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
              <DialogTitle>実績を編集</DialogTitle>
              <DialogDescription>成功事例の情報を編集してください</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="edit-icon">アイコン *</Label>
                <Select value={formData.icon} onValueChange={(value) => setFormData(prev => ({ ...prev, icon: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="アイコンを選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Trophy">トロフィー (Trophy)</SelectItem>
                    <SelectItem value="Briefcase">ブリーフケース (Briefcase)</SelectItem>
                    <SelectItem value="GraduationCap">卒業帽 (GraduationCap)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-name">名前 *</Label>
                <Input
                  id="edit-name"
                  placeholder="エレンさん"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-role">役職・肩書き *</Label>
                <Input
                  id="edit-role"
                  placeholder="元会社員 → 独立AIエンジニア"
                  value={formData.role}
                  onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-title">タイトル *</Label>
                <Input
                  id="edit-title"
                  placeholder="プログラミング経験ゼロから独立へ"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-description">説明 *</Label>
                <Textarea
                  id="edit-description"
                  placeholder="成功事例の詳細な説明"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label>主な成果 *</Label>
                {formData.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      placeholder={`成果 ${index + 1}`}
                      value={achievement}
                      onChange={(e) => updateAchievement(index, e.target.value)}
                    />
                    {formData.achievements.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeAchievement(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addAchievement}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  成果を追加
                </Button>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-image">画像（任意）</Label>
                <div className="space-y-3">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="w-full"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    {uploading ? 'アップロード中...' : '画像をアップロード'}
                  </Button>
                  {formData.image_url && (
                    <div className="relative w-full h-[200px] rounded-lg overflow-hidden bg-muted border border-border">
                      <Image
                        src={formData.image_url}
                        alt="プレビュー"
                        fill
                        className="object-cover"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => setFormData(prev => ({ ...prev, image_url: '' }))}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">推奨サイズ: 1200px × 600px（最大5MB）</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-quote">コメント（任意）</Label>
                <Textarea
                  id="edit-quote"
                  placeholder="本人のコメント"
                  value={formData.quote}
                  onChange={(e) => setFormData(prev => ({ ...prev, quote: e.target.value }))}
                  rows={3}
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="edit-featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                  className="w-4 h-4"
                />
                <Label htmlFor="edit-featured" className="cursor-pointer">注目の実績として表示</Label>
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
