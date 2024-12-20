import { RefreshCw } from "lucide-react";
import { Button } from "../ui/button";

interface Member {
  name: string;
  followers: string;
  avatar: string;
}

export default function ProMembers() {
  const members: Member[] = [
    {
      name: "Alexa Park",
      followers: "12K Followers",
      avatar: "https://github.com/shadcn.png",
    },
    {
      name: "James Lewis",
      followers: "15K Followers",
      avatar: "https://github.com/shadcn.png",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">Pro Members</h2>
        <Button variant="ghost" className="p-2 rounded-full hover:bg-gray-100">
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {members.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-20 h-20 rounded-full mx-auto mb-2"
            />
            <h3 className="font-medium">{member.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{member.followers}</p>
            <button className="w-full px-4 py-1 text-blue-600 font-medium rounded-full hover:bg-blue-50">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
