import auth from "./auth.routes.js";

import user from "./users.routes.js";

const router ={
    authRouter:auth,
    userRouter:user,
  
}

export default router;