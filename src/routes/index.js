import auth from "./auth.routes.js";
import service from "./service.routes.js";

import user from "./users.routes.js";

const router ={
    authRouter:auth,
    userRouter:user,
    ServiceRouter:service
  
}

export default router;