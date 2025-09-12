import { Request, Response } from "express";

const createPost = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).send(error);
  }
};
const getAllPosts = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).send(error);
  }
};
const getPostById = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).send(error);
  }
};
const updatePostById = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).send(error);
  }
};
const deletePostById = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).send(error);
  }
};

export const PostController = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
};
