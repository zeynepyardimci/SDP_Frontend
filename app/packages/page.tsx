"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, MoreHorizontal } from "lucide-react";
import Link from "next/link";

interface Package {
  id: string;
  name: string;
  version: string;
  status: "Published" | "Draft";
  lastUpdated: string;
}

const packages: Package[] = [
  { id: "1", name: "Basic Plan", version: "1.0.0", status: "Published", lastUpdated: "2024-01-15" },
  { id: "2", name: "Professional Plan", version: "2.1.5", status: "Published", lastUpdated: "2024-01-14" },
  { id: "3", name: "Enterprise Plan", version: "3.0.0-beta", status: "Draft", lastUpdated: "2024-01-12" },
  { id: "4", name: "Starter Bundle", version: "1.2.3", status: "Published", lastUpdated: "2024-01-10" },
  { id: "5", name: "Advanced Features Pack", version: "2.0.0", status: "Draft", lastUpdated: "2024-01-08" },
];

function getStatusColor(status: Package["status"]): "default" | "secondary" {
  switch (status) {
    case "Published":
      return "default";
    case "Draft":
      return "secondary";
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function Page() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Packages</h1>
          <p className="text-gray-600 mt-2">Manage pricing and service packages</p>
        </div>
        <Link href="/packages/new">
          <Button className="gap-2 bg-blue-500 hover:bg-blue-600 text-white w/full md:w-auto">
            <Plus className="w-4 h-4" />
            Create New Package
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow className="hover:bg-gray-50 border-gray-200">
              <TableHead className="text-gray-700 font-semibold">Package Name</TableHead>
              <TableHead className="text-gray-700 font-semibold">Version</TableHead>
              <TableHead className="text-gray-700 font-semibold">Status</TableHead>
              <TableHead className="text-gray-700 font-semibold">Last Updated</TableHead>
              <TableHead className="w-12 text-gray-700 font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {packages.map((pkg) => (
              <TableRow key={pkg.id} className="border-gray-200 hover:bg-gray-50">
                <TableCell className="font-medium text-gray-900">{pkg.name}</TableCell>
                <TableCell className="text-gray-700 font-mono text-sm">{pkg.version}</TableCell>
                <TableCell><Badge variant={getStatusColor(pkg.status)}>{pkg.status}</Badge></TableCell>
                <TableCell className="text-gray-600 text-sm">{formatDate(pkg.lastUpdated)}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">Publish</DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}


