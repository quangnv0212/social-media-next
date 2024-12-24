import z from "zod";

export const CreatePostBodyType = z
  .object({
    content: z.string().min(1, { message: "required" }),
    media: z.array(z.any()).optional(),
  })
  .strict();
export type CreatePostBodyType = z.TypeOf<typeof CreatePostBodyType>;

export const EditPostBodyType = z
  .object({
    content: z.string().min(1, { message: "required" }),
    media: z.array(z.any()).optional(),
    postId: z.string().min(1, { message: "required" }),
  })
  .strict();
export type EditPostBodyType = z.TypeOf<typeof EditPostBodyType>;

export const CreatePostRes = z.object({
  status: z.number(),
  payload: z.object({
    data: z.object({
      userId: z.string(),
      id: z.string(),
      content: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
      likesCount: z.number(),
      sharesCount: z.number(),
      media: z.array(
        z.object({
          id: z.string(),
          url: z.string(),
          type: z.string(),
        })
      ),
    }),
  }),
});

export type CreatePostResType = z.TypeOf<typeof CreatePostRes>;

export const GetPostsRes = z.object({
  status: z.number(),
  payload: z.object({
    data: z.array(z.any()),
  }),
});
export type GetPostsResType = z.TypeOf<typeof GetPostsRes>;

export const DeletePostRes = z.object({
  status: z.number(),
  payload: z.object({
    data: z.any(),
  }),
});
export type DeletePostResType = z.TypeOf<typeof DeletePostRes>;
