import { FolderOpen, Users, Zap, BarChart3 } from "lucide-react";

interface StatCard {
  title: string;
  value: number;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
}

const statCards: StatCard[] = [
  {
    title: "Total Projects",
    value: 24,
    icon: <FolderOpen className="w-6 h-6" />,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Active Users",
    value: 156,
    icon: <Users className="w-6 h-6" />,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "Running Scales",
    value: 12,
    icon: <Zap className="w-6 h-6" />,
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    title: "Pending Surveys",
    value: 8,
    icon: <BarChart3 className="w-6 h-6" />,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

export default function Page() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Hello, Sarah</h1>
        <p className="text-gray-600 mt-2">Welcome back to your Scale Development Platform</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => (
          <div key={index} className={`${card.bgColor} rounded-lg border border-gray-200 p-6 space-y-4`}>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-700">{card.title}</h3>
              <div className={`${card.iconColor}`}>{card.icon}</div>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


