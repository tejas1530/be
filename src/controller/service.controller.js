import db from "../model/index.js"

const createService = async(req,res)=>{
    try {
        const service = await db.ServiceModel.create(req.body)
        if (!service) {
            return res.status(400).json({
                status: "fail",
                message: "service not created"
            })
        }

        return res.status(201).json({
            status: "success",
            data: service
        })
    } catch (error) {
 
        return res.status(500).json({
            status: "fail",
            message: error.message
    })
}
} 

const deleteService = async(req, res)=>{
    try {
        const service = await db.ServiceModel.findByIdAndDelete(req.params.id)
        if (!service) {
            return res.status(400).json({
                status: "fail",
                message: "service not found"
            })
        }

        return res.status(200).json({
            status: "success",
            data: service
        })
    } catch (error) {

        return res.status(500).json({
            status: "fail",
            message: error.message
    })
}
}
const getService = async(req, res)=>{

    try {
        const service = await db.ServiceModel.find()
        if (!service) {
            return res.status(400).json({
                status: "fail",
                message: "service not found"
            })
        }

        return res.status(200).json({
            status: "success",
            data: service
        })
    } catch (error) {

        return res.status(500).json({
            status: "fail",
            message: error.message
    })
}
}
const updateService = async(req, res)=>{
    try {
        const service = await db.ServiceModel.findByIdAndUpdate(req.params.id,req.body)
        if (!service) {
            return res.status(400).json({
                status: "fail",
                message: "service not found"
            })
        }

        return res.status(200).json({
            status: "success",
            data: service
        })
    } catch (error) {

        return res.status(500).json({
            status: "fail",
            message: error.message
    })
}


}

const getServiceById = async(req, res)=>{
    try {
        const service = await db.ServiceModel.findById(req.params.id)
        if (!service) {
            return res.status(400).json({
                status: "fail",
                message: "service not found"
            })
        }

        return res.status(200).json({
            status: "success",
            data: service
        })
    } catch (error) {

        return res.status(500).json({
            status: "fail",
            message: error.message
    })
}
}
const serviceController ={
    createService ,deleteService ,getService ,updateService ,getServiceById
}
export default serviceController