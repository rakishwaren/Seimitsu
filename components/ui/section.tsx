import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: "white" | "gray" | "blue"
}

export function Section({ children, className, id, background = "white" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 px-4 sm:px-6 lg:px-8",
        {
          "bg-white": background === "white",
          "bg-gray-50": background === "gray",
          "bg-gradient-to-br from-blue-900 to-blue-800 text-white": background === "blue",
        },
        className
      )}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  )
}