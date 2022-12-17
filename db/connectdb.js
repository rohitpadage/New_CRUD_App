import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "school",
       useNewUrlParser: true 
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected Successfully..");
  } catch (err) {
    console.log("database error occured..."+err);
  }
};

export default connectDB;