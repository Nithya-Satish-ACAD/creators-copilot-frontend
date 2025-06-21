import React from "react"
import clsx from "clsx"

export const Button = ({ children, variant = "default", size = "default", className = "", ...props }) => {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50",
        {
          "bg-gray-900 text-white hover:bg-gray-700": variant === "default",
          "bg-transparent hover:bg-gray-100 border": variant === "outline",
          "p-2": size === "icon",
          "h-10 px-4 py-2": size === "default",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
