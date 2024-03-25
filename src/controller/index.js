import { getRefreshToken, login, logout, signUp } from "../Auth/auth.controller.js";
import serviceController from "./service.controller.js";

import { getAllUsers } from "./user.controller.js";

const controller = {
    RegisterUser:signUp,
    LoginUser:login,
    LogoutUser:logout,
    GetRefreshToken:getRefreshToken,
    GetAllUsers:getAllUsers,
    ServiceController:serviceController
}

export default controller;