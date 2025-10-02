import express from 'express'
const route = express.Router();

import {
  regisValidation,
  LoginValidation,
} from '../middleware/validationmiddleware.js';

import {  
    postRegister,
    postLogin,
    getUser,
    postUser,
    getCars,
    postCars
} from '../controller/validetion.control.js'




route.post('/register' ,regisValidation, postRegister )
route.post('/login' ,LoginValidation , postLogin )
route.get('/users', getUser)
route.post('/users', postUser)
route.get("/cars" , getCars)
route.post("/cars" , postCars)



export default route;