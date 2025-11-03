"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";

export default function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({ projectName: "", description: "", scaleType: "Horizontal" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating new project:", formData);
    router.push("/projects");
  };

  return (
    <div className="max-w-2xl space-y-8">
      <div className="flex items-center gap-4">
        <Link href="/projects">
          <Button variant="ghost" size="icon" className="text-gray-700">
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Create New Project</h1>
          <p className="text-gray-600 mt-2">Set up a new project for your development platform</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="projectName" className="text-gray-700 font-medium">Project Name</Label>
            <Input id="projectName" name="projectName" type="text" value={formData.projectName} onChange={handleChange} className="border-gray-300" placeholder="Enter project name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-700 font-medium">Description</Label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Describe your project" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="scaleType" className="text-gray-700 font-medium">Scale Type</Label>
            <select id="scaleType" name="scaleType" value={formData.scaleType} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="Horizontal">Horizontal</option>
              <option value="Vertical">Vertical</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Link href="/projects">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">Cancel</Button>
          </Link>
          <Button type="submit" className="gap-2 bg-blue-500 hover:bg-blue-600 text-white">Create Project</Button>
        </div>
      </form>
    </div>
  );
}


