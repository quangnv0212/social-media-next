"use client";

import { DialogDemo } from "./posts/create-post-dialog";
import { PostItem } from "./posts/post-item";
import { useGetPostsMutation } from "@/queries/usePost";

export default function HomePage() {
  const postMutation = useGetPostsMutation();
  const posts = postMutation.data?.payload?.data;

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <DialogDemo />
      {posts?.map((post: any) => (
        <PostItem
          key={post.id}
          hasMoreComments
          avatar={post.userId.avatar}
          username={post.userId.name}
          timeAgo={post.createdAt}
          image={post?.media?.[0]?.url}
          likes={post?.recentLikes?.length}
          comments={post?.comments?.length}
          commentsList={post?.comments?.map((comment: any) => ({
            avatar: comment.userId.avatar,
            username: comment.userId.name,
            comment: comment.content,
          }))}
          content={post.content}
        />
      ))}
    </div>
  );
}
