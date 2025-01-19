import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();
const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
