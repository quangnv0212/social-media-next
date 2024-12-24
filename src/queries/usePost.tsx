"use client";
import postApiRequest from "@/apiRequests/post";
import { toast } from "@/components/ui/use-toast";
import { CreatePostBodyType } from "@/schemaValidations/post.schema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCreatePostMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postApiRequest.createPost,
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast({
        title: "Post created successfully",
        description: "Your post has been created",
      });
    },
  });
};

export const useUpdatePostMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...body }: CreatePostBodyType & { id: string }) =>
      postApiRequest.editPost(id, body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
        exact: true,
      });
      toast({
        title: "Post updated successfully",
        description: "Your post has been updated",
      });
    },
  });
};

export const useGetPostsMutation = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: postApiRequest.getPosts,
  });
};

export const useDeletePostMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postApiRequest.deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast({
        title: "Post deleted successfully",
        description: "Your post has been deleted",
      });
    },
  });
};
