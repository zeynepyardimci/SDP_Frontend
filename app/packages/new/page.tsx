"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";

export default function NewPackage() {
  const [formData, setFormData] = useState({ name: "", version: "", status: "Draft" as "Published" | "Draft" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating package", formData);
  };

  return (
    <div className="max-w-2xl space-y-8">
      <div className="flex items-center gap-4">
        <Link href="/packages">
          <Button variant="ghost" size="icon" className="text-gray-700">
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Create New Package</h1>
          <p className="text-gray-600 mt-2">Define a new pricing or service bundle</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700 font-medium">Package Name</Label>
            <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} className="border-gray-300" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="version" className="text-gray-700 font-medium">Version</Label>
            <Input id="version" name="version" type="text" value={formData.version} onChange={handleChange} className="border-gray-300" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status" className="text-gray-700 font-medium">Status</Label>
            <select id="status" name="status" value={formData.status} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Link href="/packages">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">Cancel</Button>
          </Link>
          <Button type="submit" className="gap-2 bg-blue-500 hover:bg-blue-600 text-white">Create Package</Button>
        </div>
      </form>
    </div>
  );
}


