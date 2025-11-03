import { useState } from "react";
import { MainLayout } from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function Settings() {
  const [profile, setProfile] = useState({
    fullName: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    avatarUrl: "https://api.example.com/avatars/sarah.jpg",
  });

  const [platform, setPlatform] = useState({
    platformName: "Scale Development Platform",
    maintenanceMode: false,
  });

  const handleProfileChange = (field: string, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handlePlatformChange = (field: string, value: string | boolean) => {
    setPlatform((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveChanges = () => {
    console.log("Saving changes...", { profile, platform });
  };

  return (
    <MainLayout>
      <div className="max-w-2xl space-y-8">
        {/* Page Heading */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Settings</h1>
        </div>

        {/* Tabs Component */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="w-full justify-start border-b rounded-none bg-transparent p-0 h-auto">
            <TabsTrigger
              value="profile"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent"
            >
              Profile Settings
            </TabsTrigger>
            <TabsTrigger
              value="platform"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent"
            >
              Platform Settings
            </TabsTrigger>
          </TabsList>

          {/* Profile Settings Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Manage Your Profile
              </h2>
              <p className="text-gray-600 mt-2">
                Update your personal information and account settings
              </p>
            </div>

            {/* Profile Form */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
              {/* Full Name Field */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gray-700 font-medium">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={profile.fullName}
                  onChange={(e) =>
                    handleProfileChange("fullName", e.target.value)
                  }
                  className="border-gray-300"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    handleProfileChange("email", e.target.value)
                  }
                  className="border-gray-300"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Avatar URL Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="avatarUrl"
                  className="text-gray-700 font-medium"
                >
                  Avatar URL
                </Label>
                <Input
                  id="avatarUrl"
                  type="url"
                  value={profile.avatarUrl}
                  onChange={(e) =>
                    handleProfileChange("avatarUrl", e.target.value)
                  }
                  className="border-gray-300"
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>

              {/* Change Password Button */}
              <Button
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Change Password
              </Button>
            </div>
          </TabsContent>

          {/* Platform Settings Tab */}
          <TabsContent value="platform" className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Application Configuration
              </h2>
              <p className="text-gray-600 mt-2">
                Configure platform-wide settings and features
              </p>
            </div>

            {/* Platform Form */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
              {/* Platform Name Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="platformName"
                  className="text-gray-700 font-medium"
                >
                  Platform Name
                </Label>
                <Input
                  id="platformName"
                  type="text"
                  value={platform.platformName}
                  onChange={(e) =>
                    handlePlatformChange("platformName", e.target.value)
                  }
                  className="border-gray-300"
                  placeholder="Enter platform name"
                />
              </div>

              {/* Maintenance Mode Toggle */}
              <div className="flex items-center justify-between py-4 border-t border-gray-200">
                <div className="space-y-1">
                  <Label className="text-gray-700 font-medium">
                    Maintenance Mode
                  </Label>
                  <p className="text-sm text-gray-600">
                    Enable to restrict access and show a maintenance message
                  </p>
                </div>
                <Switch
                  checked={platform.maintenanceMode}
                  onCheckedChange={(checked) =>
                    handlePlatformChange("maintenanceMode", checked)
                  }
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Save Changes Button */}
        <div className="flex justify-end pt-6">
          <Button
            onClick={handleSaveChanges}
            className="gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
