"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";

export default function NewProduct() {
  const [formData, setFormData] = useState({ name: "", sku: "", price: "", stock: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating product", formData);
  };

  return (
    <div className="max-w-2xl space-y-8">
      <div className="flex items-center gap-4">
        <Link href="/products">
          <Button variant="ghost" size="icon" className="text-gray-700">
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Create New Product</h1>
          <p className="text-gray-600 mt-2">Add a product to your catalog</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700 font-medium">Product Name</Label>
            <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} className="border-gray-300" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sku" className="text-gray-700 font-medium">SKU</Label>
            <Input id="sku" name="sku" type="text" value={formData.sku} onChange={handleChange} className="border-gray-300" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price" className="text-gray-700 font-medium">Price (USD)</Label>
              <Input id="price" name="price" type="number" step="0.01" value={formData.price} onChange={handleChange} className="border-gray-300" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stock" className="text-gray-700 font-medium">Stock</Label>
              <Input id="stock" name="stock" type="number" value={formData.stock} onChange={handleChange} className="border-gray-300" required />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Link href="/products">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">Cancel</Button>
          </Link>
          <Button type="submit" className="gap-2 bg-blue-500 hover:bg-blue-600 text-white">Create Product</Button>
        </div>
      </form>
    </div>
  );
}


