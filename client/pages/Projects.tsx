import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

interface Project {
  id: string;
  name: string;
  status: "Active" | "Pending" | "Failed";
  scaleType: string;
  owner: {
    name: string;
    initials: string;
    avatar?: string;
  };
  lastModified: string;
}

const projects: Project[] = [
  {
    id: "1",
    name: "E-Commerce Platform Upgrade",
    status: "Active",
    scaleType: "Horizontal",
    owner: { name: "Sarah Johnson", initials: "SJ" },
    lastModified: "2024-01-15",
  },
  {
    id: "2",
    name: "Mobile App Redesign",
    status: "Pending",
    scaleType: "Vertical",
    owner: { name: "Alex Chen", initials: "AC" },
    lastModified: "2024-01-10",
  },
  {
    id: "3",
    name: "API Gateway Implementation",
    status: "Active",
    scaleType: "Horizontal",
    owner: { name: "Marcus Williams", initials: "MW" },
    lastModified: "2024-01-12",
  },
  {
    id: "4",
    name: "Database Migration",
    status: "Failed",
    scaleType: "Vertical",
    owner: { name: "Emily Rodriguez", initials: "ER" },
    lastModified: "2024-01-08",
  },
  {
    id: "5",
    name: "Analytics Dashboard Build",
    status: "Active",
    scaleType: "Horizontal",
    owner: { name: "James Park", initials: "JP" },
    lastModified: "2024-01-14",
  },
];

function getStatusColor(
  status: "Active" | "Pending" | "Failed",
): "default" | "secondary" | "destructive" {
  switch (status) {
    case "Active":
      return "default";
    case "Pending":
      return "secondary";
    case "Failed":
      return "destructive";
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

export default function Projects() {
  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
            <p className="text-gray-600 mt-2">Manage and monitor all your projects</p>
          </div>
          <Link to="/projects/new">
            <Button className="gap-2 bg-blue-500 hover:bg-blue-600 text-white w-full md:w-auto">
              <Plus className="w-4 h-4" />
              Create New Project
            </Button>
          </Link>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow className="hover:bg-gray-50 border-gray-200">
                <TableHead className="text-gray-700 font-semibold">
                  Project Name
                </TableHead>
                <TableHead className="text-gray-700 font-semibold">
                  Status
                </TableHead>
                <TableHead className="text-gray-700 font-semibold">
                  Scale Type
                </TableHead>
                <TableHead className="text-gray-700 font-semibold">
                  Owner
                </TableHead>
                <TableHead className="text-gray-700 font-semibold">
                  Last Modified
                </TableHead>
                <TableHead className="w-12 text-gray-700 font-semibold">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow
                  key={project.id}
                  className="border-gray-200 hover:bg-gray-50"
                >
                  <TableCell className="font-medium text-gray-900">
                    {project.name}
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-700">
                    {project.scaleType}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={project.owner.avatar} />
                        <AvatarFallback className="bg-blue-100 text-blue-700 text-xs font-semibold">
                          {project.owner.initials}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-gray-700 text-sm">
                        {project.owner.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-600 text-sm">
                    {formatDate(project.lastModified)}
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
