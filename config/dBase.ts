import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MongoString: string = process.env.APPLICATION_STRING!;
const dBase = () => {
  mongoose.connect(MongoString).then(() => {
    console.log("DB is ready and connected to Port");
  });
};
export default dBase;
