import express from "express"
import controller from "../controller/index.js"

const service = express.Router()

service.get("/all",controller.ServiceController.getService)
service.post("/create", controller.ServiceController.createService)
service.post("/update/:id", controller.ServiceController.updateService)
service.get("/delete/:id", controller.ServiceController.deleteService)
service.get("/uniq/:id", controller.ServiceController.getServiceById)

export default service;