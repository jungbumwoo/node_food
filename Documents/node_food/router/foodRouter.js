import routes from '../route';
import { food, upload, list } from '../controllers/foodcontroller';

const foodRouter = express.Router();

foodRouter.get(routes.home, food);
foodRouter.get(routes.upload, upload);
foodRouter.get(routes.list, list);

export default foodRouter;
