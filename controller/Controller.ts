import express, { Request, Response } from "express";
import Model from "../model/Model";

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const {email, password, userName, name} = req.body
    const User = await Model.create({ email, password, userName, name });
    return res.status(201).json({
      message: "User created successfully",
      data: User,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Unable to create user",
    });
  }
};

export const getUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const User = await Model.find();
    return res.status(201).json({
      message: "Reading user",
      data: User,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Unable to read user",
    });
  }
};
