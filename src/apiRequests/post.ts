import http from "@/lib/http";
import {
  CreatePostBodyType,
  CreatePostResType,
  DeletePostResType,
  GetPostsResType,
} from "@/schemaValidations/post.schema";
const createPostBody = (body: CreatePostBodyType) => {
  const { content, media } = body;
  const formData = new FormData();

  // Add text content
  formData.append("content", content);

  // Add media files
  media?.forEach((file) => {
    formData.append("media", file);
  });

  return formData;
};
const postApiRequest = {
  createPost: async (body: CreatePostBodyType) => {
    const formData = createPostBody(body);
    return http.post<CreatePostResType>("/api/v1/posts", formData);
  },
  editPost: async (id: string, body: CreatePostBodyType) => {
    const formData = createPostBody(body);
    return http.put<CreatePostResType>(`/api/v1/posts/${id}`, formData);
  },
  getPosts: async () => {
    return http.get<GetPostsResType>("/api/v1/posts");
  },
  deletePost: async (postId: string) => {
    return http.delete<DeletePostResType>(`/api/v1/posts/${postId}`);
  },
};

export default postApiRequest;
