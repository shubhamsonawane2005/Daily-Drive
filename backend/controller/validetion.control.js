import User  from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Ride } from "../model/ride.model.js";

export const postRegister = async (req, res) => {
  try {
    const { name, email, password , phone , city} = req.body;

    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const hashPassword = await bcrypt.hash(password, 10); // 10 is standard
    const newUser = new User({ name, email, password: hashPassword , 
      role:email === "admin@gmail.com" ? "admin" : "user" , phone, city}); 
    await newUser.save();

    res.status(201).json({ message: "Register success!", success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong", success: false });
  }
};

export const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existdata = await User.findOne({ email });
    if (!existdata)
      return res.status(401).json({ message: "User not found", success: false });

    const isMatch =  await bcrypt.compare(password, existdata.password); // 10 is standard
    if (!isMatch)
      return res.status(403).json({ message: "Password does not match", success: false });
    
    const jwtToken = jwt.sign(
      { email: existdata.email, _id: existdata._id , role: existdata.role },
      process.env.SECRET_CODE, // must match .env key
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "Login success!",
      success: true,
      // jwtToken,
      token :jwtToken,
      email: existdata.email,
      name: existdata.name,
      role : existdata.role
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", success: false });
  }
};


export const getUser = async(req , res) => {
  try{
    const users = await User.find();
    res.json(users)
  }catch(err){
    res.status(500).json({error: err.message})
  }
}

export const postUser = async(req , res) => {
  try{
    const newUser = new User(req.body)
    await newUser.save()
    res.json(newUser)
  }catch(err){
    res.status(500).json({error: err.message})
  }
}

export const getCars = async(req , res ) => {
    const cars = await Ride.find()
    res.json(cars)
}

export const postCars =async (req , res) => {
  try {
    const car = new Ride(req.body);
    await car.save();
    res.status(201).json({ message: "Car added", car });
  } catch (error) {
    res.status(500).json({ message: "Error adding car", error });
  }
}


