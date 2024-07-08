import mongoose from "mongoose";




const connectDB = async () => {
  try {
    console.log(process.env.MONGODB_URI)
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    return connectionInstance;
  } catch (error) {
    console.log(process.env.MONGODB_URI)
    console.log("MONGODB connection FAILED ", error);
    process.exit(1)
  }
}

export default connectDB
