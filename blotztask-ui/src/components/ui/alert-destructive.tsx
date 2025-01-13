import { AlertCircle } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

type AlertDestructiveProps = {
    title: string
    description: string
    variant ?: "destructive" | "default"
}

export function AlertDestructive({ title, description, variant = "destructive" } : AlertDestructiveProps) {
  return (
    <Alert variant={variant}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
}
