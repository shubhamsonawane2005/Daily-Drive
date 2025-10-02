import express from "express";
import cors from "cors";
import route from "./routes/validetion.router.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
// import { CarPoolDB, RiderDB } from "./config/Database.js";
dotenv.config();


const app = express();
app.set('view engine' , 'ejs')
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));



// Route: Register
app.use('/', route)

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
