import Service from "./service.model.js";
import Token from "./token.model.js";
import User from "./user.model.js";

const db ={
    UserModel:User,
    TokenModel:Token,
    ServiceModel:Service,
}

export default db;