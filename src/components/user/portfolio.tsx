import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PortfolioData {
  name: string;
  image: string;
  link: string;
}

const Portfolio = () => {
  const data: PortfolioData[] = [
    {
      name: "Github",
      image: "https://picsum.photos/seed/NWbJM2B/640/480",
      link: "#",
    },
    {
      name: "Dribble",
      image: "https://picsum.photos/seed/NWbJM2B/640/480",
      link: "#",
    },
    {
      name: "Behance",
      image: "https://picsum.photos/seed/NWbJM2B/640/480",
      link: "#",
    },
    {
      name: "Pinterest",
      image: "https://picsum.photos/seed/NWbJM2B/640/480",
      link: "#",
    },
    {
      name: "Web",
      image: "https://picsum.photos/seed/NWbJM2B/640/480",
      link: "#",
    },
  ];
  return (
    <Card>
      <CardHeader className="flex-row items-center border-none mb-2">
        <CardTitle className="flex-1"> Portfolio </CardTitle>
        <Button
          size="icon"
          className="flex-none bg-default-100 dark:bg-default-50 text-default-500 hover:bg-default-100 rounded h-6 w-6 -mt-1"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 items-center">
          {data.map((item, index) => (
            <Link key={`portfolio-${index}`} href={item.link}>
              <Image
                src={item.image}
                alt="image"
                className="h-9 w-9 rounded-full"
                priority={true}
                width={100}
                height={100}
              />
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Portfolio;
