import express, { Application , Request, Response} from "express";
import cors from "cors"
export const mainApp = (app: Application) => {
    app
    .use(express.json())
    .use(cors())
    .get("/", (req: Request, res: Response) => {
        try {
            return res.status(200).json({
                message : "Enjoy our API"
            })
        } catch (error) {
            console.log(error)
        }
    })
}