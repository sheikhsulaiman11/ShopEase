import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
import authRoutes from "./routes/authRoutes.js";



// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('mongoDB connected successfully'))
.catch((err) => console.log(err));

app.set('view engine', 'ejs');  

app.use("/auth", authRoutes);
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.listen(process.env.PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});