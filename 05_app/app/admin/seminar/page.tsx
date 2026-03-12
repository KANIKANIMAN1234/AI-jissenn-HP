"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Edit, Trash2, GripVertical, ArrowLeft, Video, PlayCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from "@dnd-kit/core"
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

interface Seminar {
  id: string
  number: number
  title: string
  videoUrl: string
  description: string
  thumbnail: string
}

interface SeminarData {
  seminars: Seminar[]
}

function SortableSeminarCard({ seminar, onEdit, onDelete }: { seminar: Seminar; onEdit: () => void; onDelete: () => void }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: seminar.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <div ref={setNodeRef} style={style} className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors">
      <div className="flex items-start gap-3 p-4">
        <button
          className="mt-1 cursor-grab active:cursor-grabbing text-muted-foreground hover:text-foreground"
          {...attributes}
          {...listeners}
        >
          <GripVertical className="h-5 w-5" />
        </button>
        
        {/* Thumbnail */}
        <div className="relative w-32 h-20 bg-muted rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
          {seminar.thumbnail ? (
            <Image
              src={seminar.thumbnail}
              alt={seminar.title}
              fill
              className="object-cover"
            />
          ) : (
            <Video className="h-8 w-8 text-muted-foreground" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex-1">
              {seminar.number > 0 && (
                <span className="inline-block px-2 py-1 text-xs font-semibold bg-primary/10 text-primary rounded mb-2">
                  第{seminar.number}回
                </span>
              )}
              <h3 className="font-bold text-foreground text-base mb-1 line-clamp-2">{seminar.title}</h3>
              {seminar.description && (
                <p className="text-sm text-muted-foreground line-clamp-1">{seminar.description}</p>
              )}
              {seminar.videoUrl && (
                <a
                  href={seminar.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:underline"
                >
                  <PlayCircle className="h-3 w-3" />
                  動画URL
                </a>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-2 mt-3">
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

export default function AdminSeminarPage() {
  const [seminarData, setSeminarData] = useState<SeminarData>({ seminars: [] })
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingSeminar, setEditingSeminar] = useState<Seminar | null>(null)
  const [formData, setFormData] = useState({
    number: 0,
    title: "",
    videoUrl: "",
    description: "",
    thumbnail: "",
  })

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  useEffect(() => {
    loadSeminarData()
  }, [])

  const loadSeminarData = async () => {
    try {
      const response = await fetch("/api/seminar")
      const data = await response.json()
      setSeminarData(data)
    } catch (error) {
      console.error("Failed to load seminar data:", error)
    }
  }

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const oldIndex = seminarData.seminars.findIndex((item) => item.id === active.id)
      const newIndex = seminarData.seminars.findIndex((item) => item.id === over.id)

      const newSeminars = arrayMove(seminarData.seminars, oldIndex, newIndex)
      setSeminarData({ seminars: newSeminars })

      try {
        await fetch("/api/seminar/reorder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ seminars: newSeminars }),
        })
      } catch (error) {
        console.error("Failed to reorder seminars:", error)
        loadSeminarData()
      }
    }
  }

  const handleAdd = async () => {
    try {
      const newSeminar = {
        id: Date.now().toString(),
        ...formData,
      }

      const response = await fetch("/api/seminar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSeminar),
      })

      const result = await response.json()
      
      if (!response.ok) {
        console.error("Failed to add seminar:", result)
        alert(`セミナーの追加に失敗しました: ${result.error || result.details || '不明なエラー'}`)
        return
      }

      console.log("Seminar added successfully:", result)
      setIsAddDialogOpen(false)
      resetForm()
      loadSeminarData()
    } catch (error) {
      console.error("Failed to add seminar:", error)
      alert(`セミナーの追加に失敗しました: ${error instanceof Error ? error.message : '不明なエラー'}`)
    }
  }

  const handleEdit = async () => {
    if (!editingSeminar) return

    try {
      const response = await fetch("/api/seminar", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...editingSeminar, ...formData }),
      })

      const result = await response.json()
      
      if (!response.ok) {
        console.error("Failed to edit seminar:", result)
        alert(`セミナーの編集に失敗しました: ${result.error || result.details || '不明なエラー'}`)
        return
      }

      console.log("Seminar updated successfully:", result)
      setIsEditDialogOpen(false)
      setEditingSeminar(null)
      resetForm()
      loadSeminarData()
    } catch (error) {
      console.error("Failed to edit seminar:", error)
      alert(`セミナーの編集に失敗しました: ${error instanceof Error ? error.message : '不明なエラー'}`)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("このセミナーを削除してもよろしいですか？")) return

    try {
      await fetch(`/api/seminar?id=${id}`, {
        method: "DELETE",
      })
      loadSeminarData()
    } catch (error) {
      console.error("Failed to delete seminar:", error)
    }
  }

  const openEditDialog = (seminar: Seminar) => {
    setEditingSeminar(seminar)
    setFormData({
      number: seminar.number,
      title: seminar.title,
      videoUrl: seminar.videoUrl,
      description: seminar.description,
      thumbnail: seminar.thumbnail,
    })
    setIsEditDialogOpen(true)
  }

  const resetForm = () => {
    setFormData({
      number: 0,
      title: "",
      videoUrl: "",
      description: "",
      thumbnail: "",
    })
  }

  const FormFields = () => (
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="number">第〇回（0の場合は表示されません）</Label>
        <Input
          id="number"
          type="number"
          placeholder="1"
          value={formData.number}
          onChange={(e) => setFormData({ ...formData, number: parseInt(e.target.value) || 0 })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="title">セミナー題名 *</Label>
        <Input
          id="title"
          placeholder="商品開発の第一歩、自分の得意を見つけよう"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="videoUrl">動画URL</Label>
        <Input
          id="videoUrl"
          type="url"
          placeholder="https://youtube.com/..."
          value={formData.videoUrl}
          onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">セミナー概要</Label>
        <Textarea
          id="description"
          placeholder="セミナーの概要や補足情報"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={3}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="thumbnail">サムネイルURL</Label>
        <Input
          id="thumbnail"
          type="url"
          placeholder="https://example.com/thumbnail.jpg"
          value={formData.thumbnail}
          onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
        />
        <p className="text-xs text-muted-foreground">
          YouTubeのサムネイルは自動取得されます。カスタムサムネイルを使用する場合のみ入力してください。
        </p>
      </div>
    </div>
  )

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
              <h1 className="text-2xl font-bold text-foreground">セミナー管理</h1>
              <p className="text-sm text-muted-foreground">セミナー情報の追加・編集・並び替え</p>
            </div>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                新規セミナー追加
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>新規セミナー追加</DialogTitle>
                <DialogDescription>セミナー情報を入力してください</DialogDescription>
              </DialogHeader>
              <FormFields />
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
            セミナーをドラッグして並び替えることができます。変更は自動的に保存されます。
          </p>
        </div>

        {seminarData.seminars.length === 0 ? (
          <Card>
            <CardContent className="py-16 text-center">
              <p className="text-muted-foreground">まだセミナーがありません</p>
              <p className="text-sm text-muted-foreground mt-2">「新規セミナー追加」ボタンからセミナーを追加してください</p>
            </CardContent>
          </Card>
        ) : (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={seminarData.seminars.map(s => s.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-4">
                {seminarData.seminars.map((seminar) => (
                  <SortableSeminarCard
                    key={seminar.id}
                    seminar={seminar}
                    onEdit={() => openEditDialog(seminar)}
                    onDelete={() => handleDelete(seminar.id)}
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
              <DialogTitle>セミナーを編集</DialogTitle>
              <DialogDescription>セミナー情報を編集してください</DialogDescription>
            </DialogHeader>
            <FormFields />
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
