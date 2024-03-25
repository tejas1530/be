import mongoose  from "mongoose";

const ServiceSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    subTitle:{
        type:String,
    },
    description:{
        type:String,
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
    },
    isActive:{
        type:Boolean,
        default:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }

})

const Service = mongoose.model("Service",ServiceSchema)
export default Service