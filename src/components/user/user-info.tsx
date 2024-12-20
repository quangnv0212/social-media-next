import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useGetProfileMutation } from "@/queries/useAuth";
import { CalendarCheck, MapPin, Phone, User } from "lucide-react";
import Image from "next/image";
interface UserInfoItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

const UserInfo = () => {
  const { data, isLoading, error } = useGetProfileMutation();
  const userInfo: UserInfoItem[] = [
    {
      icon: User,
      label: "Full Name",
      value: data?.payload?.name,
    },
    {
      icon: Phone,
      label: "Mobile",
      value: data?.payload?.phone,
    },
    {
      icon: MapPin,
      label: "Location",
      value: data?.payload?.state,
    },
    {
      icon: CalendarCheck,
      label: "Birth Date",
      value: data?.payload?.birthdate,
    },
  ];
  return (
    <Card>
      <CardHeader className="border-none mb-0">
        <CardTitle className="text-lg font-medium text-default-800">
          Information
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <p className="text-sm text-default-600">{data?.payload?.bio}</p>
        <ul className="mt-6 space-y-4">
          {userInfo.map((item, index) => (
            <li key={`user-info-${index}`} className="flex items-center">
              <div className="flex-none  2xl:w-56 flex items-center gap-1.5">
                <span>{<item.icon className="w-4 h-4 text-primary" />}</span>
                <span className="text-sm font-medium text-default-800">
                  {item.label}:
                </span>
              </div>
              <div className="flex-1 text-sm text-default-700">
                {item.value}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-lg font-medium text-default-800 mb-4">
          Active Teams
        </div>
        <div className="space-y-3">
          {[
            {
              title: "UI/UX Designer",
              img: "https://avatars.githubusercontent.com/u/97165289",
              total: 65,
            },
            {
              title: "Frontend Developer",
              img: "https://avatars.githubusercontent.com/u/97165289",
              total: 126,
            },
          ].map((item, index) => (
            <div
              key={`active-team-${index}`}
              className="flex items-center gap-2"
            >
              <Image
                src="https://avatars.githubusercontent.com/u/97165289"
                alt={item.title}
                className="w-4 h-4"
                width={24}
                height={24}
              />
              <div className="text-sm font-medium text-default-800">
                {item.title}
                <span className="font-normal">({item.total} members)</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfo;
