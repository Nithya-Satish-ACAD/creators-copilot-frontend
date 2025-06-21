import React from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

export default function Form({ formData, errors, handleInputChange, handleSubmit, resetForm }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="w-full max-w-xl mx-4 transition-all duration-300 transform scale-100 opacity-100 animate-fadeIn">
        <Card className="rounded-md shadow-lg border-none bg-white p-0">
          {/* Header */}
          <div className="px-6 pt-6 flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">Create New Course</CardTitle>
          </div>

          {/* Form Section */}
          <CardContent className="p-6 pt-4 mt-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Course title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g. Introduction to ML"
                />
                {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
              </div>

              <div>
                <Label htmlFor="description">Keywords to guide AI</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="e.g. python, algorithms, scikit-learn, beginner-friendly"
                  rows={4}
                />
                {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={resetForm}
                  className="h-9 px-4 bg-white text-black border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-150"
                >
                  Cancel
                </button>
                <Button type="submit" className="h-9">
                  Get started
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
