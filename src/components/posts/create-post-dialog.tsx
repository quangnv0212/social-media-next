import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useCreatePostMutation } from "@/queries/usePost";
import { CreatePostBodyType } from "@/schemaValidations/post.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppStore } from "../providers/app-provider";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Textarea } from "../ui/textarea";
import { toast } from "../ui/use-toast";
import { ImageUploader } from "./image-uploader";
export function DialogDemo() {
  const form = useForm<CreatePostBodyType>({
    resolver: zodResolver(CreatePostBodyType),
  });
  const [open, setOpen] = useState(false);
  const { user } = useAppStore();
  const createPostMutation = useCreatePostMutation();
  const onSubmit = async (data: CreatePostBodyType) => {
    await createPostMutation.mutateAsync(data);
    setOpen(false);
    form.reset();
  };
  useEffect(() => {
    if (createPostMutation.data) {
      toast({
        title: "Post created successfully",
        description: createPostMutation.data?.payload?.message,
      });
    }
  }, [createPostMutation.data]);

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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit, (e) => {
              console.log(e);
              console.log(form.getValues());
            })}
          >
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder={`What's on your mind, ${user?.name}?`}
                      className="border-none focus:ring-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="media"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <ImageUploader control={form.control} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={createPostMutation.isPending}
              type="submit"
              className="w-full mt-4"
            >
              {createPostMutation.isPending ? (
                <Loader className="animate-spin" />
              ) : (
                "Create Post"
              )}
            </Button>
          </form>
        </Form>
        {/* <div className="grid gap-4 py-4">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={`What's on your mind, ${user?.name}?`}
            className="border-none focus:ring-0"
          />
        </div>
        <ImageUploader files={files} setFiles={setFiles} />
        <DialogFooter>
          <Button
            disabled={createPostMutation.isPending}
            onClick={onSubmit}
            className="w-full"
          >
            {createPostMutation.isPending ? (
              <Loader className="animate-spin" />
            ) : (
              "Create Post"
            )}
          </Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
