import Joi from 'joi';

export const regisValidation = (req , res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
    phone: Joi.string().min(10).max(10).required(),
    city: Joi.string().min(3).max(100).required()
  });
  const {error} = schema.validate(req.body);
  if(error) {
    return res.status(400)
        .json({message:"Bad Request", error})
  }
  next();
}

export const LoginValidation = (req , res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });
  const {error} = schema.validate(req.body);
  if(error) {
    return res.status(400)
        .json({message:"Bad Request", error})
  }
  next();
}