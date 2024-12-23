"use client";
import postApiRequest from "@/apiRequests/post";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCreatePostMutation = () => {
  return useMutation({
    mutationFn: postApiRequest.createPost,
  });
};
export const useGetPostsMutation = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: postApiRequest.getPosts,
  });
};
