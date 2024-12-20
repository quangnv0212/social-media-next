"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetProfileMutation } from "@/queries/useAuth";
import { EllipsisVertical, Globe, Mail, User } from "lucide-react";

const About = () => {
  const { data, isLoading, error } = useGetProfileMutation();
  console.log(data);
  const bio = data?.payload?.bio;

  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center mb-3 border-none">
        <CardTitle className="text-lg font-medium text-default-800">
          About
        </CardTitle>
        <Button
          size="icon"
          className="w-6 h-6 bg-default-100 dark:bg-default-50 text-default-500 hover:bg-default-100"
        >
          <EllipsisVertical className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-default-600 mb-3">{bio}</div>
        <div className="mt-6 flex flex-wrap items-center gap-6 2xl:gap-16">
          {[
            {
              title: "Designation",
              position: "Lead UX/UI Designer",
              icon: User,
            },
            {
              title: "Mail",
              position: data?.payload?.email,
              icon: Mail,
            },
          ].map((item, index) => (
            <div key={`about-${index}`} className="flex items-center gap-2">
              <div className="bg-default-100 dark:bg-default-50 text-primary h-10 w-10 grid place-content-center rounded">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-medium text-default-800 ">
                  {item.title}
                </div>
                <div className="text-xs font-medium text-default-600">
                  {item.position}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default About;
