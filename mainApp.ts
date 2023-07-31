import express, { Application, Request, Response } from "express";
import cors from "cors"
import router from "./router/Route";

export const mainApp = (app: Application) => {
    app.use(express.json())
    app.use(cors())
    app.get("/", (req: Request, res: Response) => {
        try {
            return res.status(200).json({
                message : "Welcome Idan!!",
            })
        } catch (error) {
            return res.status(400).json({
                message : "can't use GET request"
            })
        }
    })
    app.use("/api/v1/", router)
}