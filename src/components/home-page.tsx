"use client";

import { DialogDemo } from "./posts/create-post-dialog";
import { PostItem } from "./posts/post-item";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <DialogDemo />
      <PostItem
        hasMoreComments
        avatar="https://github.com/shadcn.png"
        username="shadcn"
        timeAgo="1 hour ago"
        image="https://github.com/shadcn.png"
        likes={10}
        comments={2}
        commentsList={[
          {
            avatar: "https://github.com/shadcn.png",
            username: "shadcn",
            comment: "This is a comment",
          },
        ]}
        content="This is a post"
      />
      <PostItem
        hasMoreComments
        avatar="https://github.com/shadcn.png"
        username="shadcn"
        timeAgo="1 hour ago"
        image="https://github.com/shadcn.png"
        likes={10}
        comments={2}
        commentsList={[
          {
            avatar: "https://github.com/shadcn.png",
            username: "shadcn",
            comment: "This is a comment",
          },
        ]}
        content="This is a post"
      />
    </div>
  );
}
