const mongoose= require("mongoose")

const orderSchema= mongoose.Schema({
    CreateAt:{type: Date , default:new Date() },
    products :Array ,
    owner :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'person'

    }

})

const Order = mongoose.model("order",orderSchema)
module.exports=Order