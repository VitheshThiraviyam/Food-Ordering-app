import mongoose from "mongoose";

//connection
export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://23cseb60vithesh_db_user:tq0qc8rmFKzOFScC@cluster0.nes9j4x.mongodb.net/?appName=Cluster0").then(()=>
    {console.log("DB connected")})
}

