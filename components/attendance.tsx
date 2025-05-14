"use client"

import { useState, useRef, type FormEvent } from "react"
import { useInView } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export default function Attendance() {
  const [name, setName] = useState("")
  const [attendance, setAttendance] = useState<string | null>(null)
  const [companions, setCompanions] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!name || !attendance || !phone) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Formatear el mensaje para WhatsApp
      const attendanceResponse = attendance === "yes" ? "¡Claro, ahí estaré!" : "Lo siento, no podré asistir."
      
      let message = `*Confirmación de Asistencia a Quinceañera Joanny Valeria*\n\n`
      message += `*Nombre:* ${name}\n`
      message += `*Respuesta:* ${attendanceResponse}\n`
      
      if (companions.trim()) {
        message += `*Acompañantes:* ${companions}\n`
      } else {
        message += `*Acompañantes:* Ninguno\n`
      }
      
      message += `*Teléfono:* ${phone}\n`

      // Número de WhatsApp en México (agregando prefijo +52)
      const whatsappNumber = "5217771616864" // +52 es el prefijo de México

      // Crear la URL de WhatsApp
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
      
      // Abrir WhatsApp en una nueva ventana
      window.open(whatsappUrl, "_blank")
      
      toast({
        title: "¡Gracias!",
        description: "Redireccionando a WhatsApp para confirmar tu asistencia.",
      })

      // Reset form
      setName("")
      setAttendance(null)
      setCompanions("")
      setPhone("")
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu respuesta. Intenta de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 px-4 bg-primary/5">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="section-title">ASISTENCIA</h2>

        <div className="mt-4 mb-8 text-center">
          <p className="text-lg">Respetuosamente</p>
          <p className="text-lg font-medium my-2">&lt;No Niños&gt;</p>
          <p className="text-lg">Espero que no sea impedimento para que ustedes puedan asistir a mi fiesta.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mt-8">
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <Label htmlFor="name" className="text-base">
                Nombre
              </Label>
              <Input
                id="name"
                placeholder="Ingresa tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label className="text-base mb-2 block">Respuesta</Label>
              <RadioGroup value={attendance || ""} onValueChange={setAttendance}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">Lo siento, no podré asistir.</Label>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">¡Claro, ahí estaré!</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="companions" className="text-base">
                Nombre(s) de acompañante(s)
              </Label>
              <Textarea
                id="companions"
                placeholder="Nombre y apellido"
                value={companions}
                onChange={(e) => setCompanions(e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-base">
                Número de celular
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Para enviarte algún aviso de importancia."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div className="text-center pt-4">
              <Button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-6 font-medium shadow-md border border-pink-600 rounded-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "ENVIANDO..." : "ENVIAR RESPUESTA"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
