"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface ImageDialogProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function ImageDialog({ src, alt, width, height, className }: ImageDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div 
        className={`cursor-pointer transition-transform hover:scale-105 ${className}`}
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto rounded-lg"
        />
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[70vw] max-h-[70vh] p-2">
          <div className="relative w-full h-full flex items-center justify-center overflow-auto">
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="w-auto h-auto max-w-full max-h-full object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
