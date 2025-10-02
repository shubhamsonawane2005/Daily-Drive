import mongoose from "mongoose";

export const CarPoolDB = mongoose.createConnection("mongodb://127.0.0.1:27017/CarPool", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
CarPoolDB.on("connected", () => console.log("✅ MongoDB connected on CarPool"));
CarPoolDB.on("error", (err) => console.error("CarPool DB error:", err.message));

// Rider DB
export const RiderDB = mongoose.createConnection("mongodb://127.0.0.1:27017/Rider", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
RiderDB.on("connected", () => console.log("✅ MongoDB connected on Rider"));
RiderDB.on("error", (err) => console.error("Rider DB error:", err.message));
