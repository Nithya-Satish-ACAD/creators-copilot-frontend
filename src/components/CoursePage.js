
import React, { useState } from "react";
import { useToggle } from "./hooks/useToggle";
import { Wrench, Lightbulb, ChevronDown, Plus, Send } from "lucide-react";

export default function CoursePage({ courseData }) {
  const [useReferenceOnly, toggleReferenceOnly] = useToggle();
  const [showContent, setShowContent] = useState(true);

  const contentTopics = [
    "Course Outcomes",
    "Modules and Topics",
    "Lesson Plans",
    "Concept Maps",
    "Course Notes",
  ];

  return (
    <div className="px-4 pt-4 bg-white min-h-screen space-y-3">
      {/* TOP BAR */}
      <div className="flex items-center justify-between h-10">
        <div className="text-sm font-medium leading-none">
          <span className="text-gray-500">Home &gt; Courses &gt; </span>
          <span className="text-black">{courseData.title}</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-700">
          <div className="flex items-center space-x-2">
            <span>Use reference only</span>
            <label className="relative inline-block w-6 h-[10px] overflow-visible">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={useReferenceOnly}
                onChange={toggleReferenceOnly}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gray-300 rounded-full pointer-events-none" />
              <div
                className={`absolute top-[-3px] left-[1px] w-[16px] h-[16px] rounded-full z-10 transition-transform duration-200 peer-checked:translate-x-[14px] ${
                  useReferenceOnly ? "bg-black" : "bg-white"
                }`}
              />
            </label>
          </div>

          <button className="flex items-center gap-1 px-3 py-[6px] border border-gray-300 rounded bg-white shadow-sm hover:shadow transition text-sm">
            <Wrench className="w-5 h-5" />
            Output Tuner
          </button>
        </div>
      </div>

      {/* Course Title */}
      <h1 className="text-3xl font-bold mt-[-2px]">{courseData.title}</h1>

      {/* Main Container */}
      <div className="w-full rounded-lg p-6 mt-[-2px] bg-[#f8f8f8] min-h-[620px]">
        {/* Top Heading Boxes */}
        <div className="flex gap-4 mb-4">
          <div className="flex-[1.5] h-[49px] bg-[#f8f8f8] rounded shadow px-4 flex items-center justify-between min-w-0">
            <p className="text-black text-lg font-bold whitespace-nowrap">Component Library</p>
            <div className="flex items-center gap-1 bg-[#C0D7F3] text-sm text-gray-800 px-2 py-[2px] rounded-md shadow-sm font-normal whitespace-nowrap">
              <Lightbulb className="w-4 h-4 shrink-0" />
              <span className="truncate">AI-powered</span>
            </div>
          </div>

          <div className="flex-[2.5] h-[49px] bg-[#f8f8f8] rounded shadow px-4 flex items-center justify-start">
            <p className="text-black text-lg font-bold">AI Studio</p>
          </div>

          <div className="flex-[1.5] h-[49px] bg-[#f8f8f8] rounded shadow px-4 flex items-center">
            <p className="text-black text-lg font-bold">References</p>
          </div>
        </div>

        {/* Brainstorm */}
        <div className="flex gap-4 mb-6">
          <div className="flex-[1.5] h-[40px] bg-[#dddddd] rounded shadow px-1 flex items-center">
            <p className="text-black text-lg font-bold ml-2">Brainstorm</p>
          </div>
          <div className="flex-[2.5]" />
          <div className="flex-[1.5]" />
        </div>

        {/* Main Grid */}
        <div className="flex gap-4 items-start">
          {/* Content Section */}
          <div className="flex-[1.5]">
            <div
              className="flex items-center border-b pb-2 cursor-pointer"
              onClick={() => setShowContent((prev) => !prev)}
              style={{ borderColor: "#e0e0e0", borderBottomWidth: "1px" }}
            >
              <ChevronDown className="w-4 h-4 mr-2 text-gray-600" />
              <span className="text-gray-800 font-medium">Content</span>
            </div>

            {showContent && (
              <div className="pl-8 pt-6 space-y-6">
                {contentTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between pb-2 border-b"
                    style={{ borderColor: "#e0e0e0", borderBottomWidth: "1px" }}
                  >
                    <span className="text-sm text-black">{topic}</span>
                    <button className="w-5 h-5 border border-gray-400 rounded-sm flex items-center justify-center hover:bg-gray-200 transition">
                      <Plus className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center border-b pb-2 mt-6" style={{ borderColor: "#e0e0e0" }}>
              <ChevronDown className="w-4 h-4 mr-2 text-gray-600" />
              <span className="text-gray-800 font-medium">Assessment</span>
            </div>
            <div className="flex items-center border-b pb-2 mt-6" style={{ borderColor: "#e0e0e0" }}>
              <ChevronDown className="w-4 h-4 mr-2 text-gray-600" />
              <span className="text-gray-800 font-medium">Documentation</span>
            </div>
          </div>

          {/* Instruction Section */}
          <div className="flex-[2.5] min-h-[300px] relative">
            {/* Centered Instruction Text */}
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex items-center justify-center px-4 text-center pointer-events-none z-0">
              <p className="text-sm text-gray-700 font-medium leading-relaxed">
                Select an element from the Component Library to begin creating your course, or
                <br />
                type a prompt in the AI chat for a faster start
              </p>
            </div>

            {/* Prompt Input */}
            <div className="absolute left-0 right-0 px-4 z-10" style={{ bottom: "-150px" }}>
              <div className="relative w-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-md">
                <input
                  type="text"
                  placeholder="Type something..."
                  className="w-full pl-4 pr-14 py-3 text-sm text-gray-700 placeholder-gray-400 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center border border-gray-400">
                  <Send className="w-4 h-4 text-black transform rotate-45" />
                </div>
              </div>
            </div>
          </div>

          {/* Reference Info Section */}
          {/* Reference Info Section */}
<div className="flex-[1.5] min-h-[400px] relative">
  {/* Centered Reference Text and Box */}
  <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center pointer-events-none space-y-4">
    <p className="text-sm text-gray-700 font-medium leading-relaxed">
      Get started by uploading references now
    </p>

    <div className="bg-white border border-gray-300 rounded-md px-4 py-2 shadow hover:shadow-md cursor-pointer pointer-events-auto">
      <span className="text-sm text-black font-semibold">Add References</span>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
