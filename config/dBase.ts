import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()


const MongoString: string = process.env.APPLICATION_STRING!
export const dBase = () => {
    mongoose.connect(MongoString).then(() => {
        console.log("Server and DB don done oo")
    })
}