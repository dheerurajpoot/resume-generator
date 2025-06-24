"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

interface TemplateShowcaseProps {
  selectedTemplate: "modern" | "classic" | "minimal" | "professional"
  onTemplateSelect: (template: "modern" | "classic" | "minimal" | "professional") => void
}

export function TemplateShowcase({ selectedTemplate, onTemplateSelect }: TemplateShowcaseProps) {
  const templates: Array<{
    id: "modern" | "classic" | "minimal" | "professional";
    name: string;
    description: string;
    color: string;
  }> = [
    {
      id: "modern",
      name: "Modern",
      description: "Clean and contemporary design with balanced layout",
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
    },
    {
      id: "classic",
      name: "Classic",
      description: "Traditional format with clean sections and lines",
      color: "bg-gradient-to-br from-gray-600 to-gray-800",
    },
    {
      id: "minimal",
      name: "Minimal",
      description: "Simple and elegant with plenty of white space",
      color: "bg-gradient-to-br from-gray-400 to-gray-600",
    },
    {
      id: "professional",
      name: "Professional",
      description: "Two-column layout with sidebar for skills",
      color: "bg-gradient-to-br from-slate-700 to-blue-800",
    },
  ]

  const renderTemplatePreview = (templateId: "modern" | "classic" | "minimal" | "professional") => {
    switch (templateId) {
      case "modern":
        return (
          <div className="bg-white p-3 h-32 overflow-hidden text-gray-800 border rounded">
            <div className="text-center mb-2">
              <div className="font-bold text-sm">JOHN DOE</div>
              <div className="text-xs text-gray-600">john@email.com | linkedin.com/in/john</div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <div className="font-semibold border-b border-gray-300 mb-1">EXPERIENCE</div>
                <div className="space-y-1">
                  <div className="font-medium">Developer</div>
                  <div className="text-gray-600">Company Inc</div>
                </div>
              </div>
              <div>
                <div className="font-semibold border-b border-gray-300 mb-1">SKILLS</div>
                <div className="text-gray-600">React, Node.js, Python</div>
              </div>
            </div>
          </div>
        )

      case "classic":
        return (
          <div className="bg-white p-3 h-32 overflow-hidden text-gray-800 border rounded">
            <div className="text-center mb-2">
              <div className="font-bold text-sm">JOHN DOE</div>
              <div className="text-xs text-gray-600">john@email.com | linkedin.com/in/john</div>
              <div className="border-b border-gray-800 mt-1"></div>
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <div className="font-bold">SUMMARY</div>
                <div className="border-b border-gray-800 mb-1"></div>
                <div className="text-gray-700">Full Stack Developer with experience...</div>
              </div>
              <div>
                <div className="font-bold">WORK EXPERIENCE</div>
                <div className="border-b border-gray-800 mb-1"></div>
                <div className="font-semibold">Developer, Company Inc</div>
              </div>
            </div>
          </div>
        )

      case "minimal":
        return (
          <div className="bg-white p-3 h-32 overflow-hidden text-gray-800 border rounded">
            <div className="mb-2">
              <div className="font-bold text-sm text-blue-600">JOHN DOE</div>
              <div className="text-xs text-gray-600">john@email.com</div>
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <div className="font-bold text-blue-600 border-b border-blue-600">SUMMARY:</div>
                <div className="text-gray-700 mt-1">Full Stack Developer...</div>
              </div>
              <div>
                <div className="font-bold text-blue-600 border-b border-blue-600">EXPERIENCE:</div>
                <div className="text-gray-700 mt-1">• Developer at Company</div>
              </div>
            </div>
          </div>
        )

      case "professional":
        return (
          <div className="bg-white h-32 overflow-hidden border rounded flex">
            <div className="w-1/3 bg-gray-800 text-white p-2">
              <div className="text-xs font-bold mb-1">JOHN DOE</div>
              <div className="text-xs text-gray-300 mb-2">john@email.com</div>
              <div className="text-xs">
                <div className="text-blue-300 font-semibold mb-1">SKILLS</div>
                <div className="text-gray-400">React, Node.js</div>
              </div>
            </div>
            <div className="w-2/3 p-2">
              <div className="text-xs">
                <div className="font-bold text-gray-800 border-b-2 border-blue-500 mb-1">PROFILE</div>
                <div className="text-gray-700 mb-2">Full Stack Developer...</div>
                <div className="font-bold text-gray-800 border-b-2 border-blue-500 mb-1">EXPERIENCE</div>
                <div className="font-bold">Developer</div>
                <div className="text-blue-600">Company Inc</div>
              </div>
            </div>
          </div>
        )

      default:
        return <div className="bg-gray-100 h-32 rounded flex items-center justify-center text-gray-500">Preview</div>
    }
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {templates.map((template) => (
        <Card
          key={template.id}
          className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
            selectedTemplate === template.id ? "ring-2 ring-blue-500 shadow-lg" : ""
          }`}
          onClick={() => onTemplateSelect(template.id)}
        >
          <CardContent className="p-4">
            <div className="mb-3 relative">
              {renderTemplatePreview(template.id)}
              {selectedTemplate === template.id && (
                <div className="absolute top-2 right-2 bg-blue-500 rounded-full p-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
              )}
            </div>
            <h3 className="font-semibold text-sm mb-1">{template.name}</h3>
            <p className="text-xs text-gray-600">{template.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
