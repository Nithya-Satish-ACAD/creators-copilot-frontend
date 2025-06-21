import React, { useState } from "react";
import Layout from "./Layout";
import { Button } from "./ui/button";
import Form from "./Form";
import CoursePage from "./CoursePage"; // imported from separate file

export default function CreatorCoPilot() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showCoursePage, setShowCoursePage] = useState(false);
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [errors, setErrors] = useState({ title: "", description: "" });
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      title: formData.title.trim() === "" ? "Course name is required" : "",
      description:
        formData.description.trim() === "" ? "Keywords are required" : "",
    };
    setErrors(newErrors);
    if (!newErrors.title && !newErrors.description) {
      console.log("Course created:", formData);
      setShowCreateForm(false);
      setShowCoursePage(true);
      setSidebarCollapsed(true); // Collapse sidebar on course page load
    }
  };

  const resetForm = () => {
    setFormData({ title: "", description: "" });
    setErrors({ title: "", description: "" });
    setShowCreateForm(false);
  };

  if (showCoursePage) {
    return (
      <Layout
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      >
        <CoursePage
          courseData={formData}
          onBack={() => {
            setShowCoursePage(false);
            setSidebarCollapsed(false);
          }}
        />
      </Layout>
    );
  }

  return (
    <Layout
      sidebarCollapsed={sidebarCollapsed}
      setSidebarCollapsed={setSidebarCollapsed}
    >
      <div className="flex-1 flex flex-col bg-white h-[calc(100vh-80px)] min-h-0 overflow-hidden">
        <h1 className="text-2xl font-bold px-6 py-4 mt-5">Courses</h1>

        {!showCreateForm ? (
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-lg text-black mb-4">No courses created</p>
            <Button onClick={() => setShowCreateForm(true)}>Create New</Button>
          </div>
        ) : (
          <Form
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            resetForm={resetForm}
          />
        )}
      </div>
    </Layout>
  );
}
