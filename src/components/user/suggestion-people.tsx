import { RefreshCw } from "lucide-react";
import { Button } from "../ui/button";

interface Person {
  name: string;
  status: string;
  avatar: string;
}

export default function SuggestionPeople() {
  const people: Person[] = [
    {
      name: "Johnson Smith",
      status: "Suggested For You",
      avatar: "https://github.com/shadcn.png",
    },
    {
      name: "James Lewis",
      status: "Followed By Johnson",
      avatar: "https://github.com/shadcn.png",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">People you might know</h2>
        <Button variant="ghost" className="p-2 rounded-full hover:bg-gray-100">
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-4">
        {people.map((person, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">{person.name}</p>
                <p className="text-sm text-gray-500">{person.status}</p>
              </div>
            </div>
            <Button className="px-4 py-1 text-blue-600 font-medium rounded-full hover:bg-blue-50 bg-blue-50">
              Follow
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
