"use client";
import {
  useDeletePostMutation,
  useUpdatePostMutation,
} from "@/queries/usePost";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Edit, Loader2, Trash } from "lucide-react";
export default function DeletePost({ post }: { post: any }) {
  const deletePostMutation = useDeletePostMutation();
  const updatePostMutation = useUpdatePostMutation();
  const handleDeletePost = async () => {
    await deletePostMutation.mutateAsync(post.id);
  };
  const handleEditPost = async () => {
    await updatePostMutation.mutateAsync({
      id: post.id,
      content: post.content,
      media: post.media,
    });
  };
  return (
    <>
      <DropdownMenu.Item
        onClick={handleDeletePost}
        className="group text-sm leading-none text-foreground rounded-sm flex items-center h-9 px-2 relative select-none outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground cursor-pointer"
      >
        {deletePostMutation.isPending ? (
          <Loader2 className="h-4 w-4" />
        ) : (
          <div className="flex items-center gap-2">
            <Trash className="h-4 w-4" />
            Delete
          </div>
        )}
      </DropdownMenu.Item>
      <DropdownMenu.Item
        onClick={handleEditPost}
        className="group text-sm leading-none text-foreground rounded-sm flex items-center h-9 px-2 relative select-none outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground cursor-pointer"
      >
        {deletePostMutation.isPending ? (
          <Loader2 className="h-4 w-4" />
        ) : (
          <div className="flex items-center gap-2">
            <Edit className="h-4 w-4" />
            Edit
          </div>
        )}
      </DropdownMenu.Item>
    </>
  );
}
