"use client"

import { useEffect, useRef } from "react"
import { useMusicContext } from "@/context/music-context"

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { isPlaying, setIsPlaying, userHasInteracted, setUserHasInteracted } = useMusicContext()

  useEffect(() => {
    audioRef.current = new Audio("/music/quinceMusic.mp3")
    audioRef.current.loop = true

    const handleUserInteraction = () => {
      if (audioRef.current && !audioRef.current.paused) return

      if (!userHasInteracted) {
        setUserHasInteracted(true)
        // Al detectar la primera interacción, iniciamos la reproducción
        // e inmediatamente sincronizamos el estado con la realidad
        audioRef.current
          ?.play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch((error) => {
            console.error("Error playing audio:", error)
            setIsPlaying(false)
          })
      }

      // Remove event listeners after first interaction
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("touchstart", handleUserInteraction)
    }

    document.addEventListener("click", handleUserInteraction)
    document.addEventListener("touchstart", handleUserInteraction)

    return () => {
      audioRef.current?.pause()
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("touchstart", handleUserInteraction)
    }
  }, [setIsPlaying, userHasInteracted, setUserHasInteracted])

  useEffect(() => {
    if (!audioRef.current || !userHasInteracted) return

    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error)
        setIsPlaying(false) // Actualizar el estado si hay un error
      })
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying, userHasInteracted, setIsPlaying])

  return null
}
