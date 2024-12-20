import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { UserPlus } from "lucide-react";
import { faker } from "@faker-js/faker";
interface DataItemProps {
  name: string;
  avatar: string;
  count: number;
}

const Connections = () => {
  const data: DataItemProps[] = [
    {
      name: "Alex Smith",
      avatar: faker.image.avatar(),
      count: 25,
    },
    {
      name: "Darrel Barnes",
      avatar: faker.image.avatar(),
      count: 26,
    },
    {
      name: "Eugenia Moore",
      avatar: faker.image.avatar(),
      count: 27,
    },
    {
      name: "Alice Stone",
      avatar: faker.image.avatar(),
      count: 28,
    },
    {
      name: "Monica Bellas",
      avatar: faker.image.avatar(),
      count: 29,
    },
    {
      name: "Prantik Chakraborty",
      avatar: faker.image.avatar(),
      count: 30,
    },
  ];
  return (
    <Card>
      <CardHeader className="flex-row items-center border-none mb-2">
        <CardTitle className="flex-1"> My Connections </CardTitle>
        <Button
          size="icon"
          className="flex-none bg-default-100 dark:bg-default-50 text-default-500 hover:bg-default-100 rounded h-6 w-6 -mt-1"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-5 mb-6">
          {data.map((item, index) => (
            <div
              key={`connection-${index}`}
              className="flex items-center gap-3"
            >
              <div className="flex-1 flex items-center gap-3">
                <div className="flex-none">
                  <Image
                    src={item.avatar}
                    className="h-12 w-12 rounded-full"
                    alt={item.name}
                    priority={true}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-1">
                  <div className="text-base font-medium text-default-700 mb-1">
                    {item.name}
                  </div>
                  <div className="text-sm text-default-500">
                    {item.count} Mutual Connections
                  </div>
                </div>
              </div>
              <Button
                size="icon"
                className="h-8 w-8 bg-default-100 dark:bg-default-50 dark:hover:bg-default-50 hover:bg-default-100 rounded"
              >
                <UserPlus className="flex-none h-5 w-5 text-primary" />
              </Button>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/" className="text-sm font-semibold text-primary">
            View All Connections
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default Connections;
