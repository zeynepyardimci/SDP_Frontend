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

interface User {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Member" | "Viewer";
  dateJoined: string;
  initials: string;
  avatar?: string;
}

const users: User[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "Admin",
    dateJoined: "2023-12-01",
    initials: "SJ",
  },
  {
    id: "2",
    name: "Alex Chen",
    email: "alex.chen@example.com",
    role: "Member",
    dateJoined: "2024-01-05",
    initials: "AC",
  },
  {
    id: "3",
    name: "Marcus Williams",
    email: "marcus.williams@example.com",
    role: "Member",
    dateJoined: "2024-01-10",
    initials: "MW",
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    email: "emily.rodriguez@example.com",
    role: "Viewer",
    dateJoined: "2024-01-12",
    initials: "ER",
  },
  {
    id: "5",
    name: "James Park",
    email: "james.park@example.com",
    role: "Member",
    dateJoined: "2024-01-15",
    initials: "JP",
  },
];

function getRoleColor(
  role: "Admin" | "Member" | "Viewer",
): "default" | "secondary" | "outline" {
  switch (role) {
    case "Admin":
      return "default";
    case "Member":
      return "secondary";
    case "Viewer":
      return "outline";
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

export default function Users() {
  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Users</h1>
            <p className="text-gray-600 mt-2">Manage platform users and permissions</p>
          </div>
          <Button className="gap-2 bg-blue-500 hover:bg-blue-600 text-white w-full md:w-auto">
            <Plus className="w-4 h-4" />
            Create New User
          </Button>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow className="hover:bg-gray-50 border-gray-200">
                <TableHead className="text-gray-700 font-semibold">
                  User Name
                </TableHead>
                <TableHead className="text-gray-700 font-semibold">
                  Email
                </TableHead>
                <TableHead className="text-gray-700 font-semibold">
                  Role
                </TableHead>
                <TableHead className="text-gray-700 font-semibold">
                  Date Joined
                </TableHead>
                <TableHead className="w-12 text-gray-700 font-semibold">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.id}
                  className="border-gray-200 hover:bg-gray-50"
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback className="bg-blue-100 text-blue-700 text-xs font-semibold">
                          {user.initials}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-gray-900">
                        {user.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-700">{user.email}</TableCell>
                  <TableCell>
                    <Badge variant={getRoleColor(user.role)}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-600 text-sm">
                    {formatDate(user.dateJoined)}
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
                          Remove
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
