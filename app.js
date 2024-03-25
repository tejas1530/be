import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import router from "./src/routes/index.js"

dotenv.config()

const app = express() 

app.use(cors(
    {
        origin: ["http://localhost:3000","https://www.realedgetechnology.com/"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true
    }
))

app.get("/", (req, res) => {
    res.send("Hello World");
  });

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// routes 

app.use("/api/v1/auth",router.authRouter)
app.use("/api/v1/user", router.userRouter)
app.use("/api/v1/service", router.ServiceRouter)

export default app