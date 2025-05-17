"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EventDetails() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-16 px-4 bg-white">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="section-title">¡LO QUE TIENES QUE SABER!</h2>

        <div className="divider">
          <div className="divider-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-12">
          <div className="flex flex-col items-center">
            <Calendar className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-medium mb-2">¿Cuándo?</h3>
            <p className="text-lg">Domingo</p>
            <p className="text-lg">8 de Junio 2025</p>
          </div>

          <div className="flex flex-col items-center">
            <Clock className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-medium mb-2">Ceremonia</h3>
            <p className="text-lg">14:00 hrs.</p>
            <p className="text-lg mt-2">Iglesia Señor de la Cosecha</p>
            <p className="text-sm mt-1">Jardin Juarez, Jiutepec Morelos</p>
            <Link 
              href="https://maps.google.com/?q=Iglesia+Señor+de+la+Cosecha+Jardin+Juarez+Jiutepec+Morelos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4"
            >
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-pink-100 hover:text-primary hover:border-primary transition-colors shadow-sm hover:shadow"
              >
                IR A MAPS
              </Button>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Clock className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-medium mb-2">Fiesta</h3>
            <p className="text-lg">15:00 hrs.</p>
            <p className="text-lg mt-2">Salón LLuvia de Oro</p>
            <p className="text-sm mt-1">Jardin Juarez, Jiutepec Morelos</p>
            <Link 
              href="https://maps.google.com/?q=Salón+LLuvia+de+Oro+Jardin+Juarez+Jiutepec+Morelos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4"
            >
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-pink-100 hover:text-primary hover:border-primary transition-colors shadow-sm hover:shadow"
              >
                IR A MAPS
              </Button>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <MapPin className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-medium mb-2">Código de Vestimenta</h3>
            <p className="text-lg text-primary font-medium">Formal</p>
          </div>
        </div>
      </div>
    </section>
  )
}
