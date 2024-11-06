// Import necessary modules
import express from "express"; // Express framework for building the server
import dotenv from "dotenv"; // dotenv module to load environment variables from a .env file
import cookieParser from "cookie-parser"; // Middleware to parse cookies
import cors from "cors"; // Middleware to handle Cross-Origin Resource Sharing (CORS)
import { userRoute } from "./routes/userRoutes.js";
import { productRoute } from "./routes/productRoute.js";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware setup
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies

// CORS configuration
app.use(cors());

app.get("/", (req, res) => {
  console.log("Backend Working!");
  res.send("Hello World!");
});

app.use("/api/user", userRoute);
app.use("/api/product",productRoute)

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
