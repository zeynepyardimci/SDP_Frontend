import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/MainLayout";

const NotFound = () => {
  const location = useLocation();

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
        <div>
          <h1 className="text-6xl font-bold text-gray-900">404</h1>
          <p className="text-xl text-gray-600 mt-4">Page not found</p>
        </div>
        <p className="text-gray-500 max-w-md">
          The page "{location.pathname}" doesn't exist. Return to the dashboard
          to continue.
        </p>
        <Link to="/">
          <Button className="gap-2 bg-blue-500 hover:bg-blue-600 text-white">
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFound;
