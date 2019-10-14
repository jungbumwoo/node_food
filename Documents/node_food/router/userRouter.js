import routes from '../routes';

import { userDetail } from '../controllers/usercontroller';

const userRouter = express.Router();

userRouter.get(routes.userDetail(), userDetail);
