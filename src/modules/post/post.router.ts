import { Router } from "express";
import { PostController } from "./post.controller";

const router = Router();

router.get("/stats", PostController.getBlogStat);

router.get("/", PostController.getAllPosts);
router.post("/", PostController.createPost);
router.get("/:id", PostController.getPostById);
router.patch("/:id", PostController.updatePostById);
router.delete("/:id", PostController.deletePostById);

export const PostRouter = router;
