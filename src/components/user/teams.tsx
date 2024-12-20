"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { faker } from "@faker-js/faker";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TeamData {
  name: string;
  image: string;
  count: number;
  category: string;
  color?:
    | "default"
    | "destructive"
    | "success"
    | "info"
    | "warning"
    | "dark"
    | "secondary";
}

const Teams = () => {
  const data: TeamData[] = [
    {
      name: "Social Media Support",
      image: faker.image.urlPicsumPhotos(),
      count: 15,
      category: "social media",
      color: "destructive",
    },
    {
      name: "SEO & Product Marketing ",
      image: faker.image.urlPicsumPhotos(),
      count: 26,
      category: "Marketing",
      color: "destructive",
    },
    {
      name: "Laravel Developer",
      image: faker.image.urlPicsumPhotos(),
      count: 27,
      category: "Backend",
      color: "warning",
    },
    {
      name: "UX/UI Designer",
      image: faker.image.urlPicsumPhotos(),
      count: 28,
      category: "Designer",
      color: "success",
    },
    {
      name: "WordPress Developer",
      image: faker.image.urlPicsumPhotos(),
      count: 29,
      category: "Designer",
      color: "info",
    },
    {
      name: "React Developer",
      image: faker.image.urlPicsumPhotos(),
      count: 30,
      category: "Reactjs",
      color: "default",
    },
  ];
  return (
    <Card>
      <CardHeader className="flex-row items-center border-none mb-2">
        <CardTitle className="flex-1"> All Teams </CardTitle>
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
              className="flex flex-col sm:flex-row lg:flex-col 2xl:flex-row 2xl:items-center gap-3"
            >
              <div className="flex-1 flex items-center gap-3">
                <div className="flex-none">
                  <Image
                    src={item.image}
                    className="h-12 w-12 rounded"
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
                    {item.count} members
                  </div>
                </div>
              </div>
              <div>
                <Badge
                  color={item.color}
                  variant="soft"
                  className="text-sm font-medium capitalize whitespace-nowrap"
                >
                  {item.category}
                </Badge>
              </div>
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

export default Teams;
