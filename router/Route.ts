import express, {Router} from "express"
import { createUser, getUser } from "../controller/Controller"

const router = express.Router()
router.route("/create").post(createUser)
router.route("/view").get(getUser)

export default router