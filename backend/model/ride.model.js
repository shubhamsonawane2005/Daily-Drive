import mongoose from "mongoose";
import { RiderDB } from "../config/Database.js";

 const rideSchema = new mongoose.Schema({
  startTime:{
    type:String
  },
  endTime:{
    type:String
  },
  from: {
    type: String,
  },
  to:{ 
   type: String,
  },
  date:{
    type: Date,
  },
  seats: {
    type:Number,
  },
  price:{
    type:Number,
  },
  driver:{
    type:String,
  },
});

// Model

export  const Ride = RiderDB.model("Ride", rideSchema);
export default Ride;