import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import mongoose from "mongoose"
import auth_routes from "./routes/auth_routes.js"
import dotenv from "dotenv"
dotenv.config()

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", auth_routes)
app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
    res.send("hello world");
})
const start = async () => {
    const dbsetup = await mongoose.connect(process.env.MONGO_URL)
    if (dbsetup) {
        console.log("Database connected");
    }
    server.listen(app.get("port"), () => {
        console.log("Server is runnning on port ", app.get("port"));
    })
}
start();
