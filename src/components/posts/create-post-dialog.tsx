import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { ImageUploader } from "./image-uploader";
import { useAppStore } from "../providers/app-provider";
import { Avatar, AvatarImage } from "../ui/avatar";

export function DialogDemo() {
  const [open, setOpen] = useState(false);
  const { user } = useAppStore();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="flex flex-col bg-white items-center gap-2 rounded-lg border-2 border-gray-200 p-3 cursor-pointer hover:bg-gray-100 w-full ">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={user?.avatar} />
            </Avatar>
            <div className="text-gray-500 flex-grow text-left">
              What's on your mind, {user?.name}?
            </div>
          </div>
          <div className="flex gap-4 py-2 border-t border-gray-200 w-full">
            <Button
              color="secondary"
              className="flex items-center gap-2 p-2 hover:bg-secondary/50 rounded-lg w-full"
            >
              <span className="text-red-500">📹</span>
              Live video
            </Button>
            <Button
              color="secondary"
              className="flex items-center gap-2 p-2 hover:bg-secondary/50 rounded-lg w-full"
            >
              <span className="text-green-500">🖼️</span>
              Photo/video
            </Button>
            <Button
              color="secondary"
              className="flex items-center gap-2 p-2 hover:bg-secondary/50 rounded-lg w-full"
            >
              <span className="text-yellow-500">😊</span>
              Feeling/activity
            </Button>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Create Post</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Textarea
            placeholder={`What's on your mind, ${user?.name}?`}
            className="border-none focus:ring-0"
          />
        </div>
        <ImageUploader />

        <DialogFooter>
          <Button type="submit" className="w-full">
            Create Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
