import React from "react"

export const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-md ${className}`}>{children}</div>
)

export const CardHeader = ({ children, className = "" }) => (
  <div className={`border-b p-4 ${className}`}>{children}</div>
)

export const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>
)

export const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>{children}</div>
)
