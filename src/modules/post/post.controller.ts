import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPost(req.body);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getAllPosts = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = (req.query.search as string) || "";
    const isFeatured = req.query.isFeatured
      ? req.query.isFeatured === "true"
      : undefined;
    const tags = req.query.tags ? (req.query.tags as string).split(",") : [];
    const sortby = (req.query.sortby as string) || "createdAt";
    const sortbyOrder = (req.query.sortbyOrder as string) || "desc";

    const result = await PostService.getAllPosts({
      page,
      limit,
      search,
      isFeatured,
      tags,
      sortby,
      sortbyOrder,
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getPostById = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getPostById(Number(req.params.id));
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updatePostById = async (req: Request, res: Response) => {
  try {
    const result = await PostService.updatePostById(
      Number(req.params.id),
      req.body
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
const deletePostById = async (req: Request, res: Response) => {
  try {
    const result = await PostService.deletePostById(Number(req.params.id));
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getBlogStat = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getBlogStat();
    res.status(200).send(result);
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
  getBlogStat,
};
