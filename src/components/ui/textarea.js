import React from "react"

export const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
    {...props}
  />
)
