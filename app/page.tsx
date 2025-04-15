import type { Metadata } from "next"
import Hero from "@/components/hero"
import Invitation from "@/components/invitation"
import Countdown from "@/components/countdown"
import EventDetails from "@/components/event-details"
import Attendance from "@/components/attendance"
import GiftOptions from "@/components/gift-options"
import Gallery from "@/components/gallery"
import ThankYou from "@/components/thank-you"
import MusicPlayer from "@/components/music-player"

export const metadata: Metadata = {
  title: "Joanny Valeria - Mis XV Años",
  description: "Te invito a celebrar mis XV años",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <MusicPlayer />
      <Hero />
      <Invitation />
      <Countdown />
      <EventDetails />
      <Attendance />
      <GiftOptions />
      <Gallery />
      <ThankYou />
    </main>
  )
}
