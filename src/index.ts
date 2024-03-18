import connectDB from "./DB/database";

import express, { Application ,Request,Response } from "express"
import dotenv from "dotenv"
import cors from "cors"
import router from "./routes"

dotenv.config()

const app :Application = express()

app.use(cors())

app.get("/", (req:Request, res:Response) => {
    res.send("Hello World");
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// routes 

app.use("/api/v1/user",router.authRouter)


const PORT = process.env.PORT || 3000;

connectDB().then(
    () => {
        app.listen(PORT, ():void => {
            console.log(`Server running on port ${PORT}`);
        });
    }
)


