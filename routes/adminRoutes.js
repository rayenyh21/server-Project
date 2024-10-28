const router =require ("express").Router()
const { check } = require("express-validator")
const {addProduct,updateProduct,deleteProduct, getOrders}= require("../controllers/adminControllers")
 const {adminMiddleware} = require("../middleware/adminMiddleware")




router.post("/addproduct",adminMiddleware , addProduct)
router.put("updatetproduct/:id",adminMiddleware ,updateProduct)

router.delete("/deleteProduct/:id", adminMiddleware ,deleteProduct)
router.get("/getorders", adminMiddleware, getOrders)



module.exports =router