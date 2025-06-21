import { useState } from "react"

export const useForm = (initial = {}) => {
  const [form, setForm] = useState(initial)
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }
  return [form, handleChange]
}