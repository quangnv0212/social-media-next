"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGetProfileMutation } from "@/queries/useAuth";
import { Icon } from "@iconify/react";

const UserSettingsHeader = () => {
  const { data } = useGetProfileMutation();
  return (
    <>
      <Card className="mt-6 rounded-2xl ">
        <CardContent className="p-0">
          <div
            className="relative h-[210px] xl:h-[296px] rounded-2xl w-full object-cover bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${data?.payload?.cover})`,
            }}
          >
            <Button
              className="absolute bottom-5 right-6 rounded px-5"
              size="sm"
            >
              <Icon className="w-4 h-4 mr-1" icon="heroicons:pencil-square" />
              Change Cover
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default UserSettingsHeader;
