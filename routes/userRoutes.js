const router =require ("express").Router()
//const { check } = require("express-validator")
const {register,login,getUserData,getProduct, createOrder , getUserOrders}= require("../controllers/userControllers")
const {AuthMiddleware} = require("../middleware/AuthMiddleware")



//router.post("/register",[ check('email',"Email is not valid").isEmail(), 
   // check("password"," Your password is not valid").isStrongPassword({
     //   minLength:6 ,minLowercase:1 , minSymbols :1 , minNumbers:1, minUppercase:1
  //  }) ] ,register)
router.post("/register", register)
router.post("/login",login)
router.get("/",AuthMiddleware, getUserData)
router.get("/getProducts",getProduct)
router.post("/createorder", AuthMiddleware, createOrder)
router.get("/getUserOrders", AuthMiddleware, getUserOrders)


module.exports =router