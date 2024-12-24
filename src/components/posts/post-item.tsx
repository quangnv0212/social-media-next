import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import {
  EllipsisIcon,
  Forward,
  ImageIcon,
  MessageCircle,
  Share2,
  VideoIcon,
} from "lucide-react";
import { useState } from "react";
import DeletePost from "./delete-post";

interface PostItemProps {
  post: any;
}

export function PostItem({ post }: PostItemProps) {
  let hasMoreComments = false;
  const [isInputFocused, setIsInputFocused] = useState(false);
  const commentsList = post?.comments?.map((comment: any) => ({
    avatar: comment.userId.avatar,
    username: comment.userId.name,
    comment: comment.content,
  }));
  return (
    <Card className="w-full  bg-background border-border dark:bg-card dark:border-border p-2">
      {/* Post Header */}
      <div className="flex items-center p-4 gap-2 border-b border-border dark:border-border">
        <Avatar className="h-10 w-10">
          <AvatarImage src={post.userId.avatar} />
          <AvatarFallback className="bg-muted dark:bg-muted">
            {post.userId.name[0]}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium text-sm text-foreground dark:text-foreground">
            {post.userId.name}
          </span>
          <span className="text-xs text-muted-foreground dark:text-muted-foreground">
            {post.createdAt}
          </span>
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto text-foreground dark:text-foreground hover:bg-muted dark:hover:bg-muted"
            >
              <EllipsisIcon className="h-4 w-4" />
            </Button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="min-w-[100px] bg-white dark:bg-card rounded-md p-1 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
              sideOffset={5}
            >
              <DeletePost post={post} />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>

      <p className="text-sm p-4 text-foreground dark:text-foreground">
        {post?.content}
      </p>
      {post?.media?.[0]?.url && (
        <div className="relative aspect-square">
          <img
            src={post?.media?.[0]?.url}
            alt="Post"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
      )}

      {/* Post Actions */}
      <CardContent className="p-4 border-t border-border dark:border-border">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="bg-pink-100 rounded-full hover:bg-pink-200"
          >
            <HeartFilledIcon color="red" className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary/50 dark:hover:bg-muted"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary/50 dark:hover:bg-muted"
          >
            <Share2 className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto hover:bg-primary/50 dark:hover:bg-muted"
          >
            <Forward className="h-6 w-6" />
          </Button>
        </div>
        <div className="mt-2">
          <div className="font-medium text-sm text-foreground dark:text-foreground flex items-center gap-1">
            <p>{post?.recentLikes?.length.toLocaleString()} likes</p>
          </div>
        </div>
      </CardContent>

      {/* Comments Section */}
      <CardFooter className="flex flex-col gap-4 p-4 pt-0">
        {commentsList.map((comment: any, index: any) => (
          <div key={index} className="flex items-start gap-2 w-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src={comment.avatar} />
              <AvatarFallback className="bg-muted dark:bg-muted">
                {comment.username[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-medium text-sm text-foreground dark:text-foreground">
                {comment.username}
              </span>
              <span className="text-sm text-muted-foreground dark:text-muted-foreground">
                {comment.comment}
              </span>
            </div>
          </div>
        ))}

        {/* More Comments Button */}
        {hasMoreComments && (
          <Button
            variant="ghost"
            className="w-full text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
          >
            View more comments
          </Button>
        )}

        {/* Add Comment Input */}
        <div className="flex items-center gap-2 w-full mt-2 relative">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="bg-muted dark:bg-muted">
              U
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 flex items-center gap-2">
            <Input
              placeholder="Add Comment...."
              className="flex-1 bg-transparent border-none text-sm focus-visible:ring-0 text-foreground dark:text-foreground placeholder:text-muted-foreground dark:placeholder:text-muted-foreground"
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
            />
            <div
              className={`flex gap-2 transition-all duration-200 ${
                isInputFocused
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
            >
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ImageIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <VideoIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-primary dark:text-primary hover:bg-primary/50 dark:hover:bg-muted"
          >
            Reply
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
