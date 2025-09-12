import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

router.get("/", UserController.getAllUsers);
router.post("/", UserController.createUser);
router.get("/:id", UserController.getUserById);
router.patch("/:id", UserController.updateUserById);
router.delete("/:id", UserController.deleteUserById);

export const UserRouter = router;
