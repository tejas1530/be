
import express, { Application ,Request,Response } from "express"
import dotenv from "dotenv"
import cors from "cors"
import router from "./routes"
import mongoose from "mongoose";

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

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || "", {
            dbName: process.env.DB_NAME,
        });
    } catch (error) {
        console.error('Database connection error:', error);
    }
}

mongoose.connection.on('connecting', () => {
    console.log('Connecting to MongoDB...');
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});


connectDB().then(
    () => {
        app.listen(PORT, ():void => {
            console.log(`Server running on port ${PORT}`);
        });
    }
)


