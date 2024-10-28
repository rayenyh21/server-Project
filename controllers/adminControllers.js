const Product= require("../models/productSchema")
const Order=require("../models/orderSchema")




const addProduct =async(req,res)=>{
    try{
        const {name,description,price,poster}=req.body
        const newProduct= await Product.create(req.body)

        res.status(201).json({msg:" Product created",Product :newProduct})
    }
   
    catch(error){
        res.status(500).json({msg:"something went wrong /add Product",error :error.message})

    }

}

const updateProduct =async(req,res)=>{
    try{
        const updateProduct = await Product.findByIdandUpdate(req.params.id, {...req.body })
        res.status(201).json({msg:"Product Updated"})
    }

    catch(error){
        res.status(500).json({msg:"something went wrong/ Update Product",error :error.message})
    }
}

const deleteProduct = async(req,res)=>{
    try{
        const deleteProduct = await Product.findByIdandDelete(req.params.id)
        res.status(201).json({msg:"Product Deleted"})
    }
    catch(error){
        res.status(500).json({msg:"something went wrong/delete product",error :error.message})
    }
}

const getOrders = async(req,res)=>{
    try{
        const getOrders=  await Product.find()
        res.status(201).json({msg:"Sent Orders", orders: getOrders})
    }

    catch(error){
        res.status(500).json({msg:"something went wrong/ get orders",error :error.message})
    }
}



module.exports={addProduct,updateProduct,deleteProduct,getOrders}