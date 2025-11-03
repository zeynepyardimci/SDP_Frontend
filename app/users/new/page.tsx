"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";

export default function NewUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Member" as "Admin" | "Member" | "Viewer",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating user", formData);
  };

  return (
    <div className="max-w-2xl space-y-8">
      <div className="flex items-center gap-4">
        <Link href="/users">
          <Button variant="ghost" size="icon" className="text-gray-700">
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Create New User</h1>
          <p className="text-gray-600 mt-2">Invite a new teammate to the platform</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
            <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} className="border-gray-300" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="border-gray-300" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role" className="text-gray-700 font-medium">Role</Label>
            <select id="role" name="role" value={formData.role} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="Admin">Admin</option>
              <option value="Member">Member</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Link href="/users">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">Cancel</Button>
          </Link>
          <Button type="submit" className="gap-2 bg-blue-500 hover:bg-blue-600 text-white">Create User</Button>
        </div>
      </form>
    </div>
  );
}


