import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, MoreHorizontal } from "lucide-react";
import { MainLayout } from "@/components/MainLayout";

interface Scale {
  id: string;
  name: string;
  status: "Running" | "Stopped";
  type: string;
  createdDate: string;
}

const scales: Scale[] = [
  {
    id: "1",
    name: "Web Server Auto-Scale",
    status: "Running",
    type: "Horizontal",
    createdDate: "2024-01-10",
  },
  {
    id: "2",
    name: "Database Vertical Scale",
    status: "Stopped",
    type: "Vertical",
    createdDate: "2024-01-08",
  },
  {
    id: "3",
    name: "Cache Layer Scale",
    status: "Running",
    type: "Horizontal",
    createdDate: "2024-01-12",
  },
  {
    id: "4",
    name: "Load Balancer Scale",
    status: "Running",
    type: "Horizontal",
    createdDate: "2024-01-14",
  },
  {
    id: "5",
    name: "Storage Scale",
    status: "Stopped",
    type: "Vertical",
    createdDate: "2024-01-06",
  },
];

function getStatusColor(
  status: "Running" | "Stopped",
): "default" | "secondary" {
  switch (status) {
    case "Running":
      return "default";
    case "Stopped":
      return "secondary";
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Scales() {
  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Scales</h1>
            <p className="text-gray-600 mt-2">Configure and manage scaling policies</p>
          </div>
          <Button className="gap-2 bg-blue-500 hover:bg-blue-600 text-white w-full md:w-auto">
            <Plus className="w-4 h-4" />
            Create New Scale
          </Button>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow className="hover:bg-gray-50 border-gray-200">
                <TableHead className="text-gray-700 font-semibold">
                  Scale Name
                </TableHead>
                <TableHead className="text-gray-700 font-semibold">
                  Status
                </TableHead>
                <TableHead className="text-gray-700 font-semibold">
                  Type
                </TableHead>
                <TableHead className="text-gray-700 font-semibold">
                  Created Date
                </TableHead>
                <TableHead className="w-12 text-gray-700 font-semibold">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scales.map((scale) => (
                <TableRow
                  key={scale.id}
                  className="border-gray-200 hover:bg-gray-50"
                >
                  <TableCell className="font-medium text-gray-900">
                    {scale.name}
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(scale.status)}>
                      {scale.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-700">
                    {scale.type}
                  </TableCell>
                  <TableCell className="text-gray-600 text-sm">
                    {formatDate(scale.createdDate)}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="cursor-pointer">
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-red-600">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </MainLayout>
  );
}
