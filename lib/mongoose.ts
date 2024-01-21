import mongoose from "mongoose"

let isConnected = false; 

const MONGODB_URI = process.env.MONGODB_URI

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!MONGODB_URI) return console.log("Missing MongoDB URI");

  if (isConnected) {
    console.log("MongoDB connection already established");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);

    isConnected = true; 
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};