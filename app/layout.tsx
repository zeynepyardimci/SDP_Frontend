"use client";

import "../client/global.css";
import { useState } from "react";
import { Sidebar, MobileSidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <div className="flex h-screen bg-gray-50">
          <div className="hidden md:block w-64 sticky top-0">
            <Sidebar />
          </div>

          <MobileSidebar isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-lg font-bold text-gray-900">Scale</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(true)}
                className="text-gray-700"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-auto">
              <div className="p-6 md:p-8">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}


