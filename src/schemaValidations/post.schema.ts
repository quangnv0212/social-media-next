import z from "zod";

export const CreatePostBodyType = z
  .object({
    content: z.string().min(1, { message: "required" }),
    media: z.array(z.any()).optional(),
  })
  .strict();
export type CreatePostBodyType = z.TypeOf<typeof CreatePostBodyType>;

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
