import mongoose from "mongoose";
import  {CarPoolDB}  from "../config/Database.js";

 const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email:{ 
   type: String,
  },
  password:{
    type: String,
  },
  phone: {
    type:String,
  },
  city:{
    type:String,
  },
  role: {
    type:String,
    enum: ["user" , "admin"],
    default: "user"
  }
});

// Model
export  const User = CarPoolDB.model("User", userSchema);
export default User;