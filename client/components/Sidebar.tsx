import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  FolderOpen,
  Users,
  Zap,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { name: "Dashboard", href: "/", icon: <LayoutDashboard className="w-5 h-5" /> },
  { name: "Projects", href: "/projects", icon: <FolderOpen className="w-5 h-5" /> },
  { name: "Users", href: "/users", icon: <Users className="w-5 h-5" /> },
  { name: "Scales", href: "/scales", icon: <Zap className="w-5 h-5" /> },
  { name: "Products", href: "/products", icon: <Package className="w-5 h-5" /> },
  { name: "Packages", href: "/packages", icon: <ShoppingCart className="w-5 h-5" /> },
  { name: "Surveys", href: "/surveys", icon: <BarChart3 className="w-5 h-5" /> },
];

const settingsItems: NavItem[] = [
  { name: "Settings", href: "/settings", icon: <Settings className="w-5 h-5" /> },
];

interface SidebarProps {
  className?: string;
  onNavigate?: () => void;
}

export function Sidebar({ className, onNavigate }: SidebarProps) {
  return (
    <nav
      className={cn(
        "flex flex-col gap-6 py-6 px-4 bg-white border-r border-gray-200 h-screen",
        className,
      )}
    >
      <div className="flex items-center gap-2 px-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">S</span>
        </div>
        <span className="text-lg font-bold text-gray-900">Scale</span>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={onNavigate}>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              {item.icon}
              <span>{item.name}</span>
            </Button>
          </Link>
        ))}

        <div className="my-4 border-t border-gray-200"></div>

        {settingsItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={onNavigate}>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              {item.icon}
              <span>{item.name}</span>
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  );
}

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/50 md:hidden"
        onClick={onClose}
      />
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white md:hidden overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-lg font-bold text-gray-900">Scale</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-700"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex flex-col gap-2 p-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={onClose}>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                {item.icon}
                <span>{item.name}</span>
              </Button>
            </Link>
          ))}

          <div className="my-4 border-t border-gray-200"></div>

          {settingsItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={onClose}>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                {item.icon}
                <span>{item.name}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
