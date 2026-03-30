import express from "express"
import { registeruser, loginuser } from "../controllers/user.controllers.js"

const router = express.Router();

router.route("/register").post(registeruser)
router.route("/login").post(loginuser)
export default router