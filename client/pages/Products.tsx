import { Button } from "@/components/ui/button";
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

interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
}

const products: Product[] = [
  {
    id: "1",
    name: "Premium API License",
    sku: "API-PREM-001",
    price: 299.99,
    stock: 45,
  },
  {
    id: "2",
    name: "Enterprise Scale Bundle",
    sku: "SCALE-ENT-002",
    price: 1499.99,
    stock: 12,
  },
  {
    id: "3",
    name: "Developer Toolkit",
    sku: "DEV-TOOL-003",
    price: 99.99,
    stock: 128,
  },
  {
    id: "4",
    name: "Advanced Analytics Module",
    sku: "ANALYTICS-ADV-004",
    price: 499.99,
    stock: 8,
  },
  {
    id: "5",
    name: "24/7 Support Plan",
    sku: "SUPPORT-247-005",
    price: 199.99,
    stock: 67,
  },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

function getStockColor(stock: number): string {
  if (stock > 50) return "text-green-600";
  if (stock > 10) return "text-yellow-600";
  return "text-red-600";
}

export default function Products() {
  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Products</h1>
            <p className="text-gray-600 mt-2">Manage your product catalog</p>
          </div>
          <Button className="gap-2 bg-blue-500 hover:bg-blue-600 text-white w-full md:w-auto">
            <Plus className="w-4 h-4" />
            Create New Product
          </Button>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow className="hover:bg-gray-50 border-gray-200">
                <TableHead className="text-gray-700 font-semibold">
                  Product Name
                </TableHead>
                <TableHead className="text-gray-700 font-semibold">
                  SKU
                </TableHead>
                <TableHead className="text-gray-700 font-semibold">
                  Price
                </TableHead>
                <TableHead className="text-gray-700 font-semibold">
                  Stock
                </TableHead>
                <TableHead className="w-12 text-gray-700 font-semibold">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  className="border-gray-200 hover:bg-gray-50"
                >
                  <TableCell className="font-medium text-gray-900">
                    {product.name}
                  </TableCell>
                  <TableCell className="text-gray-700 font-mono text-sm">
                    {product.sku}
                  </TableCell>
                  <TableCell className="text-gray-900 font-semibold">
                    {formatPrice(product.price)}
                  </TableCell>
                  <TableCell>
                    <span className={`font-semibold ${getStockColor(product.stock)}`}>
                      {product.stock}
                    </span>
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
