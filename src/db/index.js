import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log("server is running......");
  } catch (error) {
    console.log("Mongoose Connection error : ", error);
    process.exit(1);
  }
};
export default connectDB;
 