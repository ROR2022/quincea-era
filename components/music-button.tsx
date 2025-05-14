"use client"

import { useMusicContext } from "@/context/music-context"
import { Volume2, VolumeX } from "lucide-react"

export default function MusicButton() {
  const { isPlaying, togglePlay } = useMusicContext()

  return (
    <button
      onClick={togglePlay}
      className="flex items-center justify-center p-3 bg-pink-50 hover:bg-pink-100 text-primary rounded-full transition-all shadow-sm hover:shadow mx-auto"
      aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
    >
      {isPlaying ? (
        <Volume2 size={20} className="text-primary" />
      ) : (
        <VolumeX size={20} className="text-primary" />
      )}
    </button>
  )
} 