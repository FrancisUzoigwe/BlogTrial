import mongoose from "mongoose";

interface iAuth {
    name?: string;
    userName?: string;
    email?: string;
    password?: string;
}

interface iAuthdata extends iAuth, mongoose.Schema{}

const UserSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Please provide a name"]},
    userName: {type: String, required: [true, "Please provide a userName"]},
    email: {type: String, required: [true, "Please provide a valid email address"]},
    password: {type: String, required: [true, "Please provide a passwprd"]}
})

export default mongoose.model<iAuth>("Auth", UserSchema)