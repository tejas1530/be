import app from "./app";
import connectDB from "./DB/database";
const PORT = process.env.PORT || 3000;

connectDB().then(
    () => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }
)


