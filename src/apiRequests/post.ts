import http from "@/lib/http";
import {
  CreatePostBodyType,
  CreatePostResType,
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
  getPosts: async () => {
    return http.get<GetPostsResType>("/api/v1/posts");
  },
};

export default postApiRequest;
