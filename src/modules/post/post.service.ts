import { Post, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const createPost = async (payload: Prisma.PostCreateInput): Promise<Post> => {
  const result = await prisma.post.create({
    data: payload,
  });
  return result;
};
const getAllPosts = async () => {
  const result = await prisma.post.findMany({
    include: {
      author: {
        select: {
          name: true,
          email: true,
          phone: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return result;
};
const getPostById = async (id: number) => {
  const result = await prisma.post.findUnique({
    where: { id },
  });
  return result;
};
const updatePostById = async (id: number, payload: Prisma.PostUpdateInput) => {
  const result = await prisma.post.update({
    where: { id },
    data: payload,
  });
  return result;
};
const deletePostById = async (id: number) => {
  const result = await prisma.post.delete({
    where: { id },
  });
  return result;
};

export const PostService = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
};
