"use client";

import { useGetPostsMutation } from "@/queries/usePost";
import { DialogDemo } from "./posts/create-post-dialog";
import { PostItem } from "./posts/post-item";

export default function HomePage() {
  const postMutation = useGetPostsMutation();
  const posts = postMutation.data?.payload?.data;

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <DialogDemo />
      {posts?.map((post: any) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
