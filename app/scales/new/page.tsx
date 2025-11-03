"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";

export default function NewScale() {
  const [formData, setFormData] = useState({ name: "", type: "Horizontal", min: "1", max: "5" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating scale", formData);
  };

  return (
    <div className="max-w-2xl space-y-8">
      <div className="flex items-center gap-4">
        <Link href="/scales">
          <Button variant="ghost" size="icon" className="text-gray-700">
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Create New Scale</h1>
          <p className="text-gray-600 mt-2">Configure a new scaling policy</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700 font-medium">Scale Name</Label>
            <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} className="border-gray-300" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="type" className="text-gray-700 font-medium">Type</Label>
            <select id="type" name="type" value={formData.type} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="Horizontal">Horizontal</option>
              <option value="Vertical">Vertical</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="min" className="text-gray-700 font-medium">Min Instances</Label>
              <Input id="min" name="min" type="number" value={formData.min} onChange={handleChange} className="border-gray-300" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="max" className="text-gray-700 font-medium">Max Instances</Label>
              <Input id="max" name="max" type="number" value={formData.max} onChange={handleChange} className="border-gray-300" />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Link href="/scales">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">Cancel</Button>
          </Link>
          <Button type="submit" className="gap-2 bg-blue-500 hover:bg-blue-600 text-white">Create Scale</Button>
        </div>
      </form>
    </div>
  );
}


