import { getRefreshToken, login, logout, signUp } from "../Auth/auth.controller.js";

import { getAllUsers } from "./user.controller.js";

const controller = {
    RegisterUser:signUp,
    LoginUser:login,
    LogoutUser:logout,
    GetRefreshToken:getRefreshToken,
    GetAllUsers:getAllUsers,
}

export default controller;