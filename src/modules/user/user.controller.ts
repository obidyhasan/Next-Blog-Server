import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createUser(req.body);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUsers();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getUserById = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUserById(Number(req.params.id));
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateUserById = async (req: Request, res: Response) => {
  try {
    const result = await UserService.updateUserById(
      Number(req.params.id),
      req.body
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteUserById = async (req: Request, res: Response) => {
  try {
    const result = await UserService.deleteUserById(Number(req.params.id));
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const UserController = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
