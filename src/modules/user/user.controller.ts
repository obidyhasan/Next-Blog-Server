import { Request, Response } from "express";

const createUser = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).send(error);
  }
};
const getAllUsers = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).send(error);
  }
};
const getUserById = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateUserById = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteUserById = async (req: Request, res: Response) => {
  try {
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
