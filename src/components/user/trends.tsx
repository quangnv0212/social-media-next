import { RefreshCw } from "lucide-react";
import { Button } from "../ui/button";

interface Trend {
  title: string;
  posts: string;
}

export default function TrendsForYou() {
  const trends: Trend[] = [
    {
      title: "Artificial Intelligence",
      posts: "1,245,62 Post",
    },
    {
      title: "Web Developers",
      posts: "1,624 Post",
    },
    {
      title: "UI Designers",
      posts: "820 Post",
    },
    {
      title: "Affiliate Marketing",
      posts: "480 Post",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">Trends for you</h2>
        <Button variant="ghost" className="p-2 rounded-full hover:bg-gray-100">
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-4">
        {trends.map((trend, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-xl font-bold text-gray-300">#</span>
            <div>
              <p className="font-medium">{trend.title}</p>
              <p className="text-sm text-gray-500">{trend.posts}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
