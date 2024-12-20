"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@/components/ui/timeline";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const RecentActivity = () => {
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center mb-3 border-none">
        <CardTitle className="text-lg font-medium text-default-800">
          Recent Activity
        </CardTitle>
        <Button
          size="icon"
          className="w-6 h-6 bg-default-100 dark:bg-default-50 text-default-500  hover:bg-default-100"
        >
          <EllipsisVertical className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <Timeline>
          <TimelineItem className="pb-9">
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="md:flex gap-4">
                <div className="grow">
                  <h5 className="font-medium text-sm text-default-600 ">
                    User Photo Changed
                  </h5>
                </div>
                <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                  12 minutes ago
                </div>
              </div>
              <p className="text-sm text-default-500  mt-1">
                Jone Doe changed his avatar photo
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="pb-9">
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="tm-content">
                <div className="md:flex gap-4">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600 ">
                      Video Added
                    </h5>
                  </div>
                  <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                    1 hour ago
                  </div>
                </div>
                <p className="text-sm text-default-500  mt-1 mb-4">
                  Mores Clarke added new video
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="pb-9">
            <TimelineSeparator>
              <TimelineDot color="info" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="tm-content">
                <div className="md:flex gap-4">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600 ">
                      Image Added
                    </h5>
                  </div>
                  <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                    9 hours ago
                  </div>
                </div>
                <p className="text-sm text-default-500  mt-1 mb-4">
                  Mores Clarke added new video
                </p>
                <div className="grid grid-cols-3 gap-3 max-w-[260px]">
                  <div className="w-20 h-12">
                    <Image
                      src={"https://picsum.photos/seed/NWbJM2B/640/480"}
                      className="w-full h-full object-cover"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="w-20 h-12">
                    <Image
                      src={"https://picsum.photos/seed/NWbJM2B/640/480"}
                      className="w-full h-full object-cover"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="w-20 h-12">
                    <Image
                      src={"https://picsum.photos/seed/NWbJM2B/640/480"}
                      className="w-full h-full object-cover"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="w-20 h-12">
                    <Image
                      src={"https://picsum.photos/seed/NWbJM2B/640/480"}
                      className="w-full h-full object-cover"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="w-20 h-12">
                    <Image
                      src={"https://picsum.photos/seed/NWbJM2B/640/480"}
                      className="w-full h-full object-cover"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="w-20 h-12">
                    <Image
                      src={"https://picsum.photos/seed/NWbJM2B/640/480"}
                      className="w-full h-full object-cover"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="pb-9">
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" />
            </TimelineSeparator>
            <TimelineContent>
              <div className="tm-content">
                <div className="md:flex gap-4">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600 ">
                      Video Added
                    </h5>
                  </div>
                  <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                    1 hour ago
                  </div>
                </div>
                <p className="text-sm text-default-500  mt-1 mb-4">
                  Mores Clarke added new video
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="pb-9">
            <TimelineContent>
              <div className="tm-content">
                <div className="md:flex gap-4">
                  <div className="grow">
                    <h5 className="font-medium text-sm text-default-600 ">
                      Portfolio Added
                    </h5>
                  </div>
                  <div className="text-default-400 text-xs md:min-w-[90px] md:max-w-[120px] md:text-right">
                    9 hours ago
                  </div>
                </div>
                <p className="text-sm text-default-500  mt-1 mb-4">
                  Mores Clarke added new video
                </p>
                <div className="grid grid-cols-3 gap-3 max-w-[260px]">
                  <div className="w-20 h-12">
                    <Image
                      src={"https://picsum.photos/seed/NWbJM2B/640/480"}
                      className="w-full h-full object-cover"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="w-20 h-12">
                    <Image
                      src={"https://picsum.photos/seed/NWbJM2B/640/480"}
                      className="w-full h-full object-cover"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="w-20 h-12">
                    <Image
                      src={"https://picsum.photos/seed/NWbJM2B/640/480"}
                      className="w-full h-full object-cover"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="w-20 h-12">
                    <Image
                      src={"https://picsum.photos/seed/NWbJM2B/640/480"}
                      className="w-full h-full object-cover"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="w-20 h-12">
                    <Image
                      src={"https://picsum.photos/seed/NWbJM2B/640/480"}
                      className="w-full h-full object-cover"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="w-20 h-12">
                    <Image
                      src={"https://picsum.photos/seed/NWbJM2B/640/480"}
                      className="w-full h-full object-cover"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <div className="flex justify-center">
          <Link href="/" className="text-sm font-semibold text-primary">
            View All Activity
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
